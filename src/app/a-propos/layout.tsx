import Container from "@/components/ui/Container";
import AboutSubNav from "@/components/about/AboutSubNav";

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <AboutSubNav />
        {children}
      </Container>
    </div>
  );
}
