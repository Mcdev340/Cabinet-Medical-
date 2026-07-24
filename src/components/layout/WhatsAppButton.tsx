import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/config";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink("Bonjour, je souhaiterais avoir des informations sur les rendez-vous.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter le cabinet sur WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-lg shadow-accent/30 transition-transform hover:scale-105"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-30 motion-reduce:hidden" />
      <MessageCircle size={26} strokeWidth={1.75} className="relative" />
    </a>
  );
}
