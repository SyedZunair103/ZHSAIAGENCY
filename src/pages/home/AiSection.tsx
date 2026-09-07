import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "../../components/animations/ScrollReveal";
import Container from "../../components/ui/Container";
import SectionHeading from "../../components/ui/SectionHeading";

const aiServices = [
  "AI Agents", "AI Chatbots", "Voice AI", "AI Assistants",
  "Customer Support AI", "Sales AI", "Lead Qualification",
  "Workflow Automation", "WhatsApp Automation", "CRM Automation",
  "AI Knowledge Bases", "RAG Systems", "LLM Integrations",
];

export default function AiSection() {
  return (
    <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-zhs-dark dark:via-zhs-dark-2 dark:to-zhs-dark bg-gradient-to-b from-white via-slate-50 to-white" />
      <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-zhs-accent/30 to-transparent" />

      <Container className="relative z-10">
        <ScrollReveal>
          <SectionHeading
            eyebrow="AI & Automation"
            heading="Intelligence That Works For Your Business."
            subheading="From AI agents to full workflow automation, we build the intelligent systems that power modern businesses."
          />
        </ScrollReveal>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {aiServices.map((service, i) => (
            <ScrollReveal key={service} delay={i * 40}>
              <div className="group rounded-xl dark:border-zhs-border border-slate-200 dark:bg-zhs-dark-2/50 bg-white px-4 py-3 text-sm font-medium dark:text-zhs-text text-slate-700 transition-all duration-300 hover:border-zhs-accent/30 hover:bg-zhs-accent/5 dark:hover:text-zhs-white hover:text-slate-900">
                <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-zhs-accent/50 transition-colors group-hover:bg-zhs-accent" />
                {service}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={500}>
          <div className="mt-12 text-center">
            <Link to="/ai-automation" className="btn-primary">
              Build An AI Agent
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
