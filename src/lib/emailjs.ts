import emailjs from "@emailjs/browser";
import { siteConfig } from "@/data/config";
import { AppointmentFormData } from "@/types";

export interface SendResult {
  success: boolean;
  error?: string;
}

/**
 * Envoie une demande de rendez-vous via EmailJS.
 * Nécessite NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
 * et NEXT_PUBLIC_EMAILJS_PUBLIC_KEY (voir .env.local.example et le README).
 */
export async function sendAppointmentRequest(
  data: AppointmentFormData,
): Promise<SendResult> {
  const { serviceId, templateId, publicKey } = siteConfig.emailjs;

  if (!serviceId || !templateId || !publicKey) {
    return {
      success: false,
      error:
        "La configuration EmailJS est incomplète. Renseignez les variables NEXT_PUBLIC_EMAILJS_* dans .env.local.",
    };
  }

  try {
    // Debug: show which IDs are actually used at runtime (temporary)
    // Useful to confirm env vars are loaded correctly in the browser console.
    // Remove these logs once debugging is complete.
    console.debug("EmailJS runtime IDs:", { serviceId, templateId });
    const templateParams = {
      nom_complet: data.nomComplet,
      telephone: data.telephone,
      email: data.email || "Non renseigné",
      medecin_souhaite: data.medecin,
      motif: data.motif,
      creneau_souhaite: data.creneauSouhaite,
    };

    // EmailJS expects the public key as a string (fourth arg), not an object.
    await emailjs.send(serviceId, templateId, templateParams, publicKey);
    return { success: true };
  } catch (error: unknown) {
    // Log useful details for debugging (status / text when available).
    console.error("Erreur d'envoi EmailJS :", error);

    type EmailJSError = { status?: number; text?: string; message?: string };

    const err = (error as EmailJSError | null) ?? null;

    const details =
      typeof err?.status === "number"
        ? `EmailJS status ${err.status}`
        : (err?.text ??
          err?.message ??
          (typeof error === "string" ? error : JSON.stringify(error)));

    return {
      success: false,
      error: `L'envoi de la demande a échoué. ${details || "Merci de réessayer ou contacter via WhatsApp."}`,
    };
  }
}
