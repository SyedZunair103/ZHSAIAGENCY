import { Link } from "react-router-dom";
import { ArrowRight, Users, Code2, Palette, TrendingUp, Brain } from "lucide-react";
import ScrollReveal from "../components/animations/ScrollReveal";
import Container from "../components/ui/Container";
import { SectionWrapper } from "../components/ui/SectionHeading";
import Seo from "../components/ui/Seo";
import PageHero from "../components/ui/PageHero";
import CtaSection from "../components/ui/CtaSection";

const disciplines = [
  {
    icon: Brain,
    title: "AI & Automation",
    desc: "AI engineers and automation specialists who design intelligent systems, agents, chatbots, and workflows around real business processes.",
  },
  {
    icon: Code2,
    title: "Engineering",
    desc: "Full-stack developers building web platforms, mobile applications, custom software, and integrations that hold up in production.",
  },
  {
    icon: Palette,
    title: "Creative & 3D",
    desc: "Designers and 3D artists crafting brand identity, visual content, commercial creative, and immersive 3D experiences.",
  },
  {
    icon: TrendingUp,
    title: "Growth & Strategy",
    desc: "Strategists who connect technology to business outcomes — SEO, digital marketing, AI consulting, and continuous optimization.",
  },
  {
    icon: Users,
    title: "Delivery & Client Success",
    desc: "Project leads who keep communication clear, milestones visible, and delivery aligned with your business goals.",
  },
];

const values = [
  { title: "Business Before Technology", desc: "Every team member starts from the business problem — not the toolkit." },
  { title: "Cross-Disciplinary by Default", desc: "AI, engineering, design, and growth work together on the same problem from day one." },
  { title: "Human-Guided Work", desc: "People stay in the loop for judgment, quality control, and accountability." },
  { title: "Ownership Through Optimization", desc: "We stay involved after launch — measuring, refining, and improving." },
];

export default function Team() {
  return (
    <>
      <Seo
        title="Our Team | ZHS AI Agency"
        description="Meet the disciplines behind ZHS AI Agency — AI engineers, developers, designers, and growth strategists working together to solve real business problems."
        path="/about-us/team"
      />

      <PageHero
        eyebrow="Our Team"
        heading="One Team Across AI, Technology, Creative and Growth."
        subheading="ZHS brings together the disciplines needed to take a business problem from strategy to a working system — with people accountable at every step."
      >
        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/about-us" className="btn-primary">
            About ZHS
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/contact" className="btn-secondary">
            Talk to Our Team
          </Link>
        </div>
      </PageHero>

      <SectionWrapper id="disciplines" className="dark:bg-zhs-dark-2 bg-slate-50">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="section-label mb-4">Disciplines</p>
              <h2 className="section-heading">The People Behind the Work.</h2>
              <p className="section-subheading mx-auto mt-4 max-w-2xl">
                Every engagement draws on the right mix of these capabilities — assembled around your problem, not a fixed template.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {disciplines.map((d, i) => {
              const Icon = d.icon;
              return (
                <ScrollReveal key={d.title} delay={i * 80}>
                  <div className="card-premium group h-full p-8 transition-all duration-300 hover:-translate-y-1">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zhs-accent/10 text-zhs-accent transition-colors duration-300 group-hover:bg-zhs-accent/20">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="dark:text-zhs-white text-slate-900 text-lg font-bold mb-2">{d.title}</h3>
                    <p className="dark:text-zhs-muted text-slate-500 text-sm leading-relaxed">{d.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper id="how-we-work" className="dark:bg-zhs-black bg-white">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="section-label mb-4">How We Work Together</p>
              <h2 className="section-heading">What You Can Expect.</h2>
            </div>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 80}>
                <div className="card-premium h-full p-8">
                  <h3 className="dark:text-zhs-white text-slate-900 text-lg font-bold mb-2">{v.title}</h3>
                  <p className="dark:text-zhs-muted text-slate-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={300}>
            <div className="mt-12 text-center">
              <Link to="/about-us/process" className="btn-secondary">
                See Our Process
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </Container>
      </SectionWrapper>

      <CtaSection
        heading="Want to Work With Us?"
        subheading="Let's discuss your challenges and how our team can help."
        primaryLabel="Get Free AI Audit"
        primaryTo="/free-ai-audit"
      />
    </>
  );
}
