import { Link } from "react-router-dom";
import { Home, Compass, MessageCircle } from "lucide-react";
import Seo from "../components/ui/Seo";
import ScrollReveal from "../components/animations/ScrollReveal";
import Container from "../components/ui/Container";

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found | ZHS AI Agency"
        description="The page you're looking for doesn't exist or has been moved."
      />

      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute top-1/3 left-1/4 h-80 w-80 rounded-full bg-zhs-accent/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-60 w-60 rounded-full bg-zhs-cyan/5 blur-[100px]" />

        <Container className="relative z-10">
          <ScrollReveal>
            <div className="text-center">
              <h1 className="text-[8rem] font-bold leading-none dark:text-zhs-dark-3 text-slate-100 sm:text-[10rem]">
                404
              </h1>
              <p className="section-heading -mt-4 mb-4">Page Not Found</p>
              <p className="section-subheading mx-auto mb-10 max-w-md">
                Looks like this page doesn't exist. It may have been moved or the link might be
                incorrect.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/" className="btn-primary">
                  <Home className="h-4 w-4" />
                  Back Home
                </Link>
                <Link to="/solutions" className="btn-secondary">
                  <Compass className="h-4 w-4" />
                  Explore Solutions
                </Link>
                <Link to="/contact" className="btn-secondary">
                  <MessageCircle className="h-4 w-4" />
                  Contact Us
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
