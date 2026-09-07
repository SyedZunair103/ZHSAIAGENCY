import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "../../components/animations/ScrollReveal";
import Container from "../../components/ui/Container";

export default function AboutPreview() {
  return (
    <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <ScrollReveal>
              <p className="section-label mb-4">About Us</p>
              <h2 className="section-heading">We Build What Comes Next.</h2>
              <p className="mt-6 text-lg leading-relaxed dark:text-zhs-muted text-slate-500">
                ZHS AI Agency combines AI, automation, software engineering,
                creative expertise, 3D technology and digital growth to help
                modern businesses build better systems and move faster.
              </p>
              <p className="mt-4 text-lg leading-relaxed dark:text-zhs-muted text-slate-500">
                We are not just a technology provider. We are a strategic partner
                for businesses that want to operate smarter, scale faster, and
                build for the future.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="mt-8">
                <Link to="/about" className="btn-primary">
                  Meet ZHS
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200} direction="right">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {["AI", "Automation", "Software", "Creative", "3D", "Growth"].map((item) => (
                  <div
                    key={item}
                    className="group flex items-center justify-center rounded-2xl dark:border-zhs-border border-slate-200 dark:bg-zhs-dark-2/60 bg-white p-6 transition-all duration-300 hover:border-zhs-accent/30 dark:hover:bg-zhs-dark-3/60 hover:bg-slate-50"
                  >
                    <span className="text-sm font-semibold dark:text-zhs-muted text-slate-500 transition-colors dark:group-hover:text-zhs-white group-hover:text-slate-900">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <div className="absolute -inset-8 -z-10 rounded-3xl bg-zhs-accent/3 blur-3xl" />
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
