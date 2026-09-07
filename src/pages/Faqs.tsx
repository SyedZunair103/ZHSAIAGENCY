import { useState, useCallback } from "react";
import { ChevronDown } from "lucide-react";
import Seo from "../components/ui/Seo";
import PageHero from "../components/ui/PageHero";
import Container from "../components/ui/Container";
import ScrollReveal from "../components/animations/ScrollReveal";
import CtaSection from "../components/ui/CtaSection";

const faqs = [
  {
    question: "What does ZHS AI Agency do?",
    answer:
      "ZHS AI Agency builds intelligent software systems that help businesses automate operations, grow digitally, and leverage cutting-edge technology. We specialize in AI agents, custom software development, automation workflows, digital growth strategies, and creative technology including 3D design.",
  },
  {
    question: "What is an AI agent?",
    answer:
      "An AI agent is an autonomous software system that can perceive its environment, make decisions, and take actions to achieve specific goals. Unlike traditional software that follows rigid rules, AI agents can adapt, learn, and handle complex multi-step tasks. They can manage customer interactions, analyze data, coordinate workflows, and much more.",
  },
  {
    question: "Can you automate customer support?",
    answer:
      "Yes. We build AI-powered customer support systems that handle common inquiries, route complex issues to human agents, and continuously improve through interaction data. This includes chatbots, email automation, ticket classification, and knowledge base integration — all tailored to your brand voice and processes.",
  },
  {
    question: "Can you automate WhatsApp workflows?",
    answer:
      "Absolutely. We build WhatsApp automation systems including order processing, appointment scheduling, customer onboarding sequences, and support workflows. These integrate with your existing tools and can handle everything from simple auto-replies to complex multi-step business processes.",
  },
  {
    question: "Can you build custom software?",
    answer:
      "Yes. We design and develop custom software solutions tailored to your specific business needs. This includes web applications, internal tools, APIs, dashboards, and enterprise systems. We work with modern technologies and follow best practices for scalability, security, and maintainability.",
  },
  {
    question: "Can you build SaaS products?",
    answer:
      "We can. From ideation to launch, we help build SaaS products including multi-tenant architecture, subscription billing, user management, and the core application logic. We work alongside your team or serve as your full technical partner depending on your needs.",
  },
  {
    question: "Do you work with startups?",
    answer:
      "Yes, we work with startups at various stages — from early MVP development to scaling production systems. We understand the unique constraints startups face and can adapt our approach to deliver maximum impact within your timeline and budget.",
  },
  {
    question: "Do you work with US businesses?",
    answer:
      "Absolutely. We serve clients across the United States and globally. Our team operates across time zones and we're comfortable with remote collaboration, async communication, and the workflows that US businesses expect.",
  },
  {
    question: "Can you integrate AI with existing systems?",
    answer:
      "Yes. We specialize in integrating AI capabilities into your existing tech stack. Whether you need AI features added to a current application, data pipelines connected to machine learning models, or automation layered on top of existing workflows, we can make it work.",
  },
  {
    question: "Do you provide SEO and digital marketing?",
    answer:
      "We do. Our digital growth services include SEO strategy and implementation, content marketing, conversion optimization, analytics setup, and paid campaign management. We take a data-driven approach focused on measurable business outcomes.",
  },
  {
    question: "Do you provide 3D design?",
    answer:
      "Yes. Our creative technology team handles 3D product visualization, architectural renders, animated explainers, interactive experiences, and real-time 3D applications. We use industry-standard tools and can deliver assets for web, print, or presentation use.",
  },
  {
    question: "How does the project process work?",
    answer:
      "Our process typically follows four phases: Discovery (understanding your goals and requirements), Strategy (planning the technical approach and roadmap), Build (developing and iterating with regular check-ins), and Launch (deploying, testing, and optimizing). We maintain transparent communication throughout and adapt to your preferred collaboration style.",
  },
  {
    question: "How do I start a project?",
    answer:
      "Simply reach out through our contact page or email us at zhsaiagency@gmail.com. We'll schedule an initial call to understand your needs, discuss how we can help, and provide a clear proposal with scope, timeline, and pricing. There's no commitment required for the initial conversation.",
  },
];

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
  id,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  id: string;
}) {
  return (
    <div
      className={`card-premium overflow-hidden transition-all duration-300 ${
        isOpen ? "dark:border-zhs-border-light border-indigo-200" : ""
      }`}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={id}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <h3 className="text-base font-semibold dark:text-zhs-white text-slate-900 sm:text-lg">
          {question}
        </h3>
        <ChevronDown
          className={`h-5 w-5 shrink-0 dark:text-zhs-muted text-slate-400 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        id={id}
        role="region"
        aria-labelledby={`${id}-trigger`}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isOpen ? "500px" : "0px",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="px-6 pb-5">
          <p className="dark:text-zhs-muted text-slate-500 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = useCallback(
    (index: number) => {
      setOpenIndex((prev) => (prev === index ? null : index));
    },
    []
  );

  return (
    <>
      <Seo
        title="FAQs | ZHS AI Agency"
        description="Find answers to frequently asked questions about ZHS AI Agency's services including AI agents, automation, software development, and digital growth."
        path="/faqs"
      />

      <PageHero
        eyebrow="FAQs"
        heading="Frequently Asked Questions"
        subheading="Everything you need to know about working with ZHS AI Agency."
      />

      <section className="relative py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-3xl space-y-3">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 40}>
                <FaqItem
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === i}
                  onToggle={() => toggle(i)}
                  id={`faq-${i}`}
                />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection
        heading="Still Have Questions?"
        subheading="Our team is happy to help. Reach out and we'll get back to you with the answers you need."
      />
    </>
  );
}
