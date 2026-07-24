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
  data: AppointmentFormData
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
    await emailjs.send(
      serviceId,
      templateId,
      {
        nom_complet: data.nomComplet,
        telephone: data.telephone,
        email: data.email || "Non renseigné",
        medecin_souhaite: data.medecin,
        motif: data.motif,
        creneau_souhaite: data.creneauSouhaite,
      },
      { publicKey }
    );
    return { success: true };
  } catch (error) {
    console.error("Erreur d'envoi EmailJS :", error);
    return {
      success: false,
      error:
        "L'envoi de la demande a échoué. Merci de réessayer, ou de nous contacter directement via WhatsApp.",
    };
  }
}
