import { Shield } from "lucide-react";
import Seo from "../components/ui/Seo";
import PageHero from "../components/ui/PageHero";
import Container from "../components/ui/Container";
import ScrollReveal from "../components/animations/ScrollReveal";
import CtaSection from "../components/ui/CtaSection";

const sections = [
  {
    title: "Information We Collect",
    content:
      "When you interact with ZHS AI Agency, we may collect information you provide directly, such as your name, email address, phone number, company details, and any other information you share through contact forms, emails, or project discussions. We also collect basic usage data including browser type, device information, and pages visited to improve our services.",
  },
  {
    title: "How We Use Information",
    content:
      "We use the information we collect to respond to your inquiries, provide requested services, communicate about projects and updates, improve our website and offerings, and send relevant information about our services. We do not sell your personal information to third parties.",
  },
  {
    title: "Contact Forms",
    content:
      "Information submitted through our contact forms is used solely to respond to your message and follow up on your inquiry. This data is stored securely and is only accessed by authorized team members who need it to assist you. We retain contact form submissions for a reasonable period to maintain context for ongoing conversations.",
  },
  {
    title: "Cookies & Tracking",
    content:
      "Our website may use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and understand how visitors use our site. You can control cookie settings through your browser preferences. Disabling cookies may affect some functionality of the website.",
  },
  {
    title: "Data Sharing",
    content:
      "We may share your information with trusted service providers who assist in operating our website and delivering our services, and when required by law. These providers are contractually obligated to protect your information and use it only for the purposes we specify. We do not sell or rent personal information to third parties.",
  },
  {
    title: "Data Security",
    content:
      "We implement reasonable administrative, technical, and physical measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. While we strive to use commercially acceptable means to protect your data, no method of transmission or storage is completely secure.",
  },
  {
    title: "Your Rights",
    content:
      "You have the right to access, correct, or delete your personal information held by us. You may also opt out of receiving communications from us at any time. To exercise these rights or inquire about our data practices, please contact us using the information provided below.",
  },
];

export default function Privacy() {
  return (
    <>
      <Seo
        title="Privacy Policy | ZHS AI Agency"
        description="Learn how ZHS AI Agency collects, uses, and protects your personal information."
        path="/privacy"
      />

      <PageHero
        eyebrow="Legal"
        heading="Privacy Policy"
        subheading="How we collect, use, and protect your information."
      />

      <section className="relative py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <div className="mb-12 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg dark:bg-zhs-accent/10 bg-indigo-50 dark:text-zhs-accent text-zhs-accent">
                  <Shield className="h-5 w-5" />
                </div>
                <p className="dark:text-zhs-muted text-slate-500 text-sm">
                  Last updated: September 2026
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-10">
              {sections.map((section, i) => (
                <ScrollReveal key={i} delay={i * 60}>
                  <div>
                    <h2 className="text-xl font-semibold dark:text-zhs-white text-slate-900 mb-3">
                      {section.title}
                    </h2>
                    <p className="dark:text-zhs-muted text-slate-500 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={200}>
              <div className="mt-12 rounded-2xl dark:border-zhs-border border-slate-200 p-6 dark:bg-zhs-dark-2/50 bg-slate-50">
                <h3 className="font-semibold dark:text-zhs-white text-slate-900 mb-2">
                  Contact Us
                </h3>
                <p className="dark:text-zhs-muted text-slate-500 text-sm leading-relaxed">
                  If you have any questions about this Privacy Policy or our data practices,
                  please contact us at{" "}
                  <a
                    href="mailto:zhsaiagency@gmail.com"
                    className="dark:text-zhs-accent text-zhs-accent hover:underline"
                  >
                    zhsaiagency@gmail.com
                  </a>
                  .
                </p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <CtaSection
        heading="Have Questions About Privacy?"
        subheading="Our team is available to address any concerns about how we handle your data."
      />
    </>
  );
}
