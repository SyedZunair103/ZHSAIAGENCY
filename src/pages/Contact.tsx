import { useState, type FormEvent, type ChangeEvent } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowRight,
} from "lucide-react";
import ScrollReveal from "../components/animations/ScrollReveal";
import Container from "../components/ui/Container";
import PageHero from "../components/ui/PageHero";
import CtaSection from "../components/ui/CtaSection";
import Seo from "../components/ui/Seo";
import { siteConfig } from "../config/site";

const serviceOptions = [
  "AI Agents",
  "AI Automation",
  "AI Chatbot",
  "Voice AI",
  "Software Development",
  "Web Development",
  "Mobile App",
  "SaaS",
  "Branding",
  "Creative",
  "Video",
  "AI Commercial",
  "3D Design",
  "3D Printing",
  "SEO",
  "Digital Marketing",
  "Other",
];

const budgetOptions = [
  "Under $1,000",
  "$1,000–$5,000",
  "$5,000–$10,000",
  "$10,000–$25,000",
  "$25,000+",
  "Not Sure Yet",
];

interface FormData {
  fullName: string;
  company: string;
  email: string;
  country: string;
  phone: string;
  service: string;
  budget: string;
  description: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  country?: string;
  service?: string;
  description?: string;
}

const initialFormData: FormData = {
  fullName: "",
  company: "",
  email: "",
  country: "",
  phone: "",
  service: "",
  budget: "",
  description: "",
};

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.fullName.trim()) {
    errors.fullName = "Full name is required.";
  }

  if (!data.email.trim()) {
    errors.email = "Work email is required.";
  } else if (!validateEmail(data.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!data.country.trim()) {
    errors.country = "Country is required.";
  }

  if (!data.service) {
    errors.service = "Please select a service.";
  }

  if (!data.description.trim()) {
    errors.description = "Please describe your project.";
  }

  return errors;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [showEmailCta, setShowEmailCta] = useState(false);

  const handleChange = (
    e: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setShowEmailCta(true);
  };

  const inputBase =
    "w-full rounded-xl border px-4 py-3 text-sm transition-all duration-200 outline-none dark:text-zhs-white text-slate-900 dark:placeholder-zhs-muted/60 placeholder-slate-400";
  const inputLight = "border-slate-200 bg-white focus:border-zhs-accent focus:ring-2 focus:ring-zhs-accent/20";
  const inputDark = "dark:border-zhs-border dark:bg-zhs-dark-2 dark:focus:border-zhs-accent dark:focus:ring-zhs-accent/20";
  const inputClass = `${inputBase} ${inputLight} ${inputDark}`;
  const errorClass =
    "dark:border-zhs-rose border-rose-400 focus:border-zhs-rose focus:ring-zhs-rose/20";

  return (
    <>
      <Seo
        title="Contact | ZHS AI Agency"
        description="Get in touch with ZHS AI Agency. Tell us about your project and we'll help you find the best solution."
        path="/contact"
      />

      <PageHero
        eyebrow="Contact"
        heading="Let's Build Something Great."
        subheading="Have a project in mind? We'd love to hear about it. Tell us what you're building and we'll figure out the best way to help."
      />

      {/* Contact Section */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b dark:from-zhs-dark dark:via-zhs-dark-2 dark:to-zhs-black from-slate-50 via-white to-slate-50" />
        <div className="absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-zhs-accent/5 blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/3 h-60 w-60 rounded-full bg-zhs-cyan/5 blur-[100px]" />

        <Container className="relative z-10">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form Column */}
            <ScrollReveal className="lg:col-span-3">
              {showEmailCta ? (
                <div className="card-premium p-10 text-center md:p-14">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-zhs-accent/10 text-zhs-accent">
                    <Mail className="h-8 w-8" />
                  </div>
                  <h2 className="dark:text-zhs-white text-slate-900 text-2xl font-bold sm:text-3xl">
                    Email Us to Get Started
                  </h2>
                  <p className="dark:text-zhs-muted text-slate-500 mt-4 text-lg max-w-md mx-auto">
                    For the fastest response, send us an email directly with your project details.
                  </p>
                  <div className="mt-8 flex flex-col items-center gap-3">
                    <a
                      href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("Project Inquiry — " + (formData.service || "General"))}&body=${encodeURIComponent(
                        "Hi ZHS AI Agency,\n\n" +
                        "Name: " + formData.fullName + "\n" +
                        (formData.company ? "Company: " + formData.company + "\n" : "") +
                        "Email: " + formData.email + "\n" +
                        "Country: " + formData.country + "\n" +
                        (formData.phone ? "Phone: " + formData.phone + "\n" : "") +
                        "Service: " + formData.service + "\n" +
                        (formData.budget ? "Budget: " + formData.budget + "\n" : "") +
                        "\nProject Details:\n" + formData.description + "\n"
                      )}`}
                      className="btn-primary"
                    >
                      <Mail className="h-4 w-4" />
                      Email {siteConfig.email}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                    <button
                      onClick={() => {
                        setShowEmailCta(false);
                        setFormData(initialFormData);
                      }}
                      className="text-sm text-zhs-muted hover:text-zhs-accent transition-colors"
                    >
                      Edit your details
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card-premium p-8 md:p-10">
                  <h2 className="dark:text-zhs-white text-slate-900 text-2xl font-bold mb-2">
                    Tell Us About Your Project
                  </h2>
                  <p className="dark:text-zhs-muted text-slate-500 mb-8 text-sm">
                    Fields marked with * are required.
                  </p>

                  <div className="space-y-5">
                    {/* Row 1: Full Name + Company */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="fullName"
                          className="dark:text-zhs-text text-slate-700 mb-1.5 block text-sm font-medium"
                        >
                          Full Name *
                        </label>
                        <input
                          id="fullName"
                          name="fullName"
                          type="text"
                          value={formData.fullName}
                          onChange={handleChange}
                          className={`${inputClass} ${errors.fullName ? errorClass : ""}`}
                          placeholder="John Smith"
                        />
                        {errors.fullName && (
                          <p className="text-zhs-rose mt-1.5 text-xs">
                            {errors.fullName}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="company"
                          className="dark:text-zhs-text text-slate-700 mb-1.5 block text-sm font-medium"
                        >
                          Company
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleChange}
                          className={inputClass}
                          placeholder="Acme Inc."
                        />
                      </div>
                    </div>

                    {/* Row 2: Email + Country */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="email"
                          className="dark:text-zhs-text text-slate-700 mb-1.5 block text-sm font-medium"
                        >
                          Work Email *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`${inputClass} ${errors.email ? errorClass : ""}`}
                          placeholder="john@company.com"
                        />
                        {errors.email && (
                          <p className="text-zhs-rose mt-1.5 text-xs">
                            {errors.email}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="country"
                          className="dark:text-zhs-text text-slate-700 mb-1.5 block text-sm font-medium"
                        >
                          Country *
                        </label>
                        <input
                          id="country"
                          name="country"
                          type="text"
                          value={formData.country}
                          onChange={handleChange}
                          className={`${inputClass} ${errors.country ? errorClass : ""}`}
                          placeholder="United States"
                        />
                        {errors.country && (
                          <p className="text-zhs-rose mt-1.5 text-xs">
                            {errors.country}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Row 3: Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="dark:text-zhs-text text-slate-700 mb-1.5 block text-sm font-medium"
                      >
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    {/* Row 4: Service + Budget */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="service"
                          className="dark:text-zhs-text text-slate-700 mb-1.5 block text-sm font-medium"
                        >
                          Service *
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className={`${inputClass} ${!formData.service ? "dark:text-zhs-muted/60 text-slate-400" : ""} ${errors.service ? errorClass : ""}`}
                        >
                          <option value="">Select a service</option>
                          {serviceOptions.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                        {errors.service && (
                          <p className="text-zhs-rose mt-1.5 text-xs">
                            {errors.service}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="budget"
                          className="dark:text-zhs-text text-slate-700 mb-1.5 block text-sm font-medium"
                        >
                          Budget
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className={`${inputClass} ${!formData.budget ? "dark:text-zhs-muted/60 text-slate-400" : ""}`}
                        >
                          <option value="">Select a budget range</option>
                          {budgetOptions.map((b) => (
                            <option key={b} value={b}>
                              {b}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Project Description */}
                    <div>
                      <label
                        htmlFor="description"
                        className="dark:text-zhs-text text-slate-700 mb-1.5 block text-sm font-medium"
                      >
                        Project Description *
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        rows={5}
                        value={formData.description}
                        onChange={handleChange}
                        className={`${inputClass} resize-none ${errors.description ? errorClass : ""}`}
                        placeholder="Tell us about your project — what you're building, what you need, and how we can help..."
                      />
                      {errors.description && (
                        <p className="text-zhs-rose mt-1.5 text-xs">
                          {errors.description}
                        </p>
                      )}
                    </div>

                    {/* Submit */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="btn-primary w-full sm:w-auto"
                      >
                        Prepare Email
                        <Send className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </ScrollReveal>

            {/* Info Column */}
            <ScrollReveal delay={200} className="lg:col-span-2">
              <div className="flex h-full flex-col gap-6">
                <div className="card-premium p-8">
                  <h3 className="dark:text-zhs-white text-slate-900 text-lg font-bold mb-6">
                    Get in Touch
                  </h3>

                  <div className="space-y-5">
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="flex items-center gap-4 group"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-zhs-accent/10 text-zhs-accent transition-colors group-hover:bg-zhs-accent/20">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="dark:text-zhs-muted text-slate-500 text-xs">
                          Email
                        </p>
                        <p className="dark:text-zhs-white text-slate-900 text-sm font-medium transition-colors group-hover:text-zhs-accent">
                          {siteConfig.email}
                        </p>
                      </div>
                    </a>

                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-zhs-cyan/10 text-zhs-cyan">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="dark:text-zhs-muted text-slate-500 text-xs">
                          Phone
                        </p>
                        <p className="dark:text-zhs-white text-slate-900 text-sm font-medium">
                          Available on request
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-zhs-emerald/10 text-zhs-emerald">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="dark:text-zhs-muted text-slate-500 text-xs">
                          Location
                        </p>
                        <p className="dark:text-zhs-white text-slate-900 text-sm font-medium">
                          Remote-first, worldwide
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-premium p-8">
                  <h3 className="dark:text-zhs-white text-slate-900 text-lg font-bold mb-4">
                    What Happens Next?
                  </h3>
                  <p className="dark:text-zhs-muted text-slate-500 mb-5 text-sm leading-relaxed">
                    Here's how we typically work with new clients:
                  </p>
                  <ol className="space-y-4">
                    {[
                      {
                        step: "1",
                        title: "Discovery Call",
                        desc: "We discuss your goals, timeline, and budget to understand the project scope.",
                      },
                      {
                        step: "2",
                        title: "Scope & Proposal",
                        desc: "You receive a tailored proposal with scope, timeline, and investment breakdown.",
                      },
                      {
                        step: "3",
                        title: "Kickoff",
                        desc: "Once aligned, we move into onboarding and begin work on your project.",
                      },
                    ].map((item) => (
                      <li key={item.step} className="flex items-start gap-3">
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-zhs-accent/10 text-xs font-bold text-zhs-accent">
                          {item.step}
                        </div>
                        <div>
                          <p className="dark:text-zhs-white text-slate-900 text-sm font-semibold">
                            {item.title}
                          </p>
                          <p className="dark:text-zhs-muted text-slate-500 mt-0.5 text-xs leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="card-premium p-8">
                  <h3 className="dark:text-zhs-white text-slate-900 text-lg font-bold mb-3">
                    Prefer Email?
                  </h3>
                  <p className="dark:text-zhs-muted text-slate-500 mb-5 text-sm leading-relaxed">
                    You can also reach us directly at:
                  </p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="btn-primary w-full"
                  >
                    <Mail className="h-4 w-4" />
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <CtaSection
        heading="Have a Bigger Vision?"
        subheading="From AI-powered platforms to complete brand transformations, we've got you covered. Let's talk about what's possible."
      />
    </>
  );
}
