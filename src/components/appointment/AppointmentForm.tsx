"use client";

import { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { doctors } from "@/data/doctors";
import { sendAppointmentRequest } from "@/lib/emailjs";

const phoneRegex = /^\+?[0-9\s]{8,15}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = "idle" | "sending" | "success" | "error";

export default function AppointmentForm() {
  const searchParams = useSearchParams();
  const medecinPreselectionne = searchParams.get("medecin") || "";

  const [values, setValues] = useState({
    nomComplet: "",
    telephone: "",
    email: "",
    medecin: medecinPreselectionne,
    motif: "",
    date: "",
    creneau: "Peu importe",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [statusMessage, setStatusMessage] = useState<string>("");

  function updateField<K extends keyof typeof values>(field: K, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  function validate(): boolean {
    const nextErrors: Record<string, string> = {};

    if (values.nomComplet.trim().length < 2) {
      nextErrors.nomComplet = "Merci d'indiquer votre nom complet.";
    }
    if (!phoneRegex.test(values.telephone.trim())) {
      nextErrors.telephone = "Numéro de téléphone invalide (8 à 15 chiffres).";
    }
    if (values.email.trim() && !emailRegex.test(values.email.trim())) {
      nextErrors.email = "Adresse e-mail invalide.";
    }
    if (!values.medecin) {
      nextErrors.medecin = "Merci de choisir un médecin.";
    }
    if (values.motif.trim().length < 5) {
      nextErrors.motif = "Merci de préciser brièvement le motif de consultation.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;

    setStatus("sending");

    const medecinChoisi = doctors.find((doctor) => doctor.slug === values.medecin);
    const creneauSouhaite = [values.date, values.creneau].filter(Boolean).join(" — ");

    const result = await sendAppointmentRequest({
      nomComplet: values.nomComplet.trim(),
      telephone: values.telephone.trim(),
      email: values.email.trim(),
      medecin: medecinChoisi ? `${medecinChoisi.nom} (${medecinChoisi.specialite})` : values.medecin,
      motif: values.motif.trim(),
      creneauSouhaite: creneauSouhaite || "Non précisé",
    });

    if (result.success) {
      setStatus("success");
      setStatusMessage(
        "Votre demande a bien été envoyée. Notre secrétariat vous recontacte prochainement pour confirmer votre créneau."
      );
    } else {
      setStatus("error");
      setStatusMessage(result.error || "Une erreur est survenue.");
    }
  }

  if (status === "success") {
    return (
      <div className="mx-auto flex max-w-xl flex-col items-center gap-3 rounded-card border border-line bg-surface p-10 text-center">
        <CheckCircle2 size={40} strokeWidth={1.5} className="text-accent" />
        <h2 className="font-heading text-xl font-semibold text-primary">Demande envoyée</h2>
        <p className="text-sm text-ink-soft">{statusMessage}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="mx-auto flex w-full max-w-2xl flex-col gap-5 rounded-card border border-line bg-surface p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Nom complet"
          error={errors.nomComplet}
          input={
            <input
              type="text"
              value={values.nomComplet}
              onChange={(event) => updateField("nomComplet", event.target.value)}
              className={inputClasses(!!errors.nomComplet)}
              placeholder="Awa Diop"
            />
          }
        />

        <Field
          label="Téléphone"
          error={errors.telephone}
          input={
            <input
              type="tel"
              value={values.telephone}
              onChange={(event) => updateField("telephone", event.target.value)}
              className={inputClasses(!!errors.telephone)}
              placeholder="+221 77 123 45 67"
            />
          }
        />
      </div>

      <Field
        label="E-mail (optionnel)"
        error={errors.email}
        input={
          <input
            type="email"
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            className={inputClasses(!!errors.email)}
            placeholder="vous@exemple.com"
          />
        }
      />

      <Field
        label="Médecin souhaité"
        error={errors.medecin}
        input={
          <select
            value={values.medecin}
            onChange={(event) => updateField("medecin", event.target.value)}
            className={inputClasses(!!errors.medecin)}
          >
            <option value="">Sélectionnez un médecin</option>
            {doctors.map((doctor) => (
              <option key={doctor.slug} value={doctor.slug}>
                {doctor.nom} — {doctor.specialite}
              </option>
            ))}
          </select>
        }
      />

      <Field
        label="Motif de consultation"
        error={errors.motif}
        input={
          <textarea
            value={values.motif}
            onChange={(event) => updateField("motif", event.target.value)}
            className={inputClasses(!!errors.motif)}
            rows={3}
            placeholder="Ex. : consultation de suivi, douleurs, bilan annuel..."
          />
        }
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Date souhaitée (optionnel)"
          input={
            <input
              type="date"
              value={values.date}
              onChange={(event) => updateField("date", event.target.value)}
              className={inputClasses(false)}
            />
          }
        />

        <Field
          label="Créneau préféré"
          input={
            <select
              value={values.creneau}
              onChange={(event) => updateField("creneau", event.target.value)}
              className={inputClasses(false)}
            >
              <option>Peu importe</option>
              <option>Matin</option>
              <option>Après-midi</option>
            </select>
          }
        />
      </div>

      {status === "error" && (
        <div className="flex items-start gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle size={18} strokeWidth={1.75} className="mt-0.5 shrink-0" />
          {statusMessage}
        </div>
      )}

      <p className="text-xs leading-relaxed text-ink-soft">
        Cette demande n&rsquo;est pas une réservation ferme : notre secrétariat vous
        recontacte pour confirmer le créneau.
      </p>

      <Button type="submit" disabled={status === "sending"} className="w-full sm:w-auto">
        {status === "sending" ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Envoi en cours...
          </>
        ) : (
          "Envoyer ma demande"
        )}
      </Button>
    </form>
  );
}

function inputClasses(hasError: boolean) {
  return `w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-ink placeholder:text-ink-soft/60 focus:outline-none focus:ring-2 focus:ring-accent/40 ${
    hasError ? "border-red-400" : "border-line"
  }`;
}

function Field({
  label,
  error,
  input,
}: {
  label: string;
  error?: string;
  input: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-ink">{label}</span>
      {input}
      {error && <span className="text-xs text-red-600">{error}</span>}
    </label>
  );
}
