import Container from "@/components/ui/Container";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="py-16 sm:py-20">
      <Container className="flex flex-col gap-10">{children}</Container>
    </div>
  );
}
