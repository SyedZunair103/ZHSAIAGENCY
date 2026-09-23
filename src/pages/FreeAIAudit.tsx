import { useState, type FormEvent, type ChangeEvent } from "react";
import { Mail, Send, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/animations/ScrollReveal";
import Container from "../components/ui/Container";
import Seo from "../components/ui/Seo";
import PageHero from "../components/ui/PageHero";
import CtaSection from "../components/ui/CtaSection";
import { submitLead } from "../hooks/useLeads";

const industryOptions = [
  "SaaS & Technology",
  "Real Estate",
  "Healthcare & Clinics",
  "E-commerce & Retail",
  "Finance",
  "Education",
  "Professional Services",
  "Manufacturing",
  "Hospitality",
  "Local Businesses",
  "Startups",
  "Other",
];

const teamOptions = ["1-10", "11-50", "51-200", "201-500", "500+", "Not Sure"];

interface FormData {
  fullName: string;
  company: string;
  email: string;
  website: string;
  industry: string;
  teamSize: string;
  biggestChallenge: string;
  currentTools: string;
  losesTime: string;
  losesLeads: string;
  wantToAutomate: string;
  additionalInfo: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  company?: string;
  industry?: string;
}

const initialFormData: FormData = {
  fullName: "",
  company: "",
  email: "",
  website: "",
  industry: "",
  teamSize: "",
  biggestChallenge: "",
  currentTools: "",
  losesTime: "",
  losesLeads: "",
  wantToAutomate: "",
  additionalInfo: "",
};

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function FreeAIAudit() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors: FormErrors = {};
    if (!formData.fullName.trim()) validationErrors.fullName = "Full name is required.";
    if (!formData.email.trim()) validationErrors.email = "Email is required.";
    else if (!validateEmail(formData.email)) validationErrors.email = "Please enter a valid email.";
    if (!formData.company.trim()) validationErrors.company = "Company is required.";
    if (!formData.industry) validationErrors.industry = "Please select an industry.";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setFormState("submitting");
    try {
      await submitLead({
        full_name: formData.fullName.trim(),
        email: formData.email.trim(),
        company: formData.company.trim() || null,
        phone: null,
        country: formData.industry || "United States",
        service: "Free AI Audit",
        budget: null,
        description: `Industry: ${formData.industry}\nTeam Size: ${formData.teamSize}\nWebsite: ${formData.website}\nBiggest Challenge: ${formData.biggestChallenge}\nCurrent Tools: ${formData.currentTools}\nWhere Time is Lost: ${formData.losesTime}\nWhere Leads are Lost: ${formData.losesLeads}\nWant to Automate: ${formData.wantToAutomate}\nAdditional Info: ${formData.additionalInfo}`,
      });
      setFormState("success");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setFormState("error");
    }
  };

  const inputBase =
    "w-full rounded-xl border px-4 py-3 text-sm transition-all duration-200 outline-none dark:text-zhs-white text-slate-900 dark:placeholder-zhs-muted/60 placeholder-slate-400";
  const inputLight = "border-slate-200 bg-white focus:border-zhs-accent focus:ring-2 focus:ring-zhs-accent/20";
  const inputDark = "dark:border-zhs-border dark:bg-zhs-dark-2 dark:focus:border-zhs-accent dark:focus:ring-zhs-accent/20";
  const inputClass = `${inputBase} ${inputLight} ${inputDark}`;
  const errorClass = "dark:border-zhs-rose border-rose-400 focus:border-zhs-rose focus:ring-zhs-rose/20";

  return (
    <>
      <Seo
        title="Free AI Audit | ZHS AI Agency"
        description="Get a free AI audit for your business. Answer a few questions about your challenges and we'll help you find where AI and automation can create the most value."
        path="/free-ai-audit"
      />

      <PageHero
        eyebrow="Free AI Audit"
        heading="Discover Where AI Can Improve Your Business."
        subheading="Answer a few questions and we'll help you identify the highest-leverage opportunities for AI, automation, and technology."
      />

      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b dark:from-zhs-dark dark:via-zhs-dark-2 dark:to-zhs-black from-slate-50 via-white to-slate-50" />
        <div className="absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-zhs-accent/5 blur-[120px]" />
        <Container className="relative z-10">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl">
              {formState === "success" ? (
                <div className="card-premium p-10 text-center md:p-14">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-zhs-emerald/10 text-zhs-emerald">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <h2 className="dark:text-zhs-white text-slate-900 text-2xl font-bold sm:text-3xl">
                    Audit Request Sent!
                  </h2>
                  <p className="dark:text-zhs-muted text-slate-500 mt-4 text-lg max-w-md mx-auto">
                    Thank you for your audit request. We've received your details and will get back to you within 24 hours with a personalized analysis.
                  </p>
                  <div className="mt-8">
                    <Link to="/about-us" className="btn-primary">
                      Explore Our Services
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ) : formState === "error" ? (
                <div className="card-premium p-10 text-center md:p-14">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-zhs-rose/10 text-zhs-rose">
                    <Mail className="h-8 w-8" />
                  </div>
                  <h2 className="dark:text-zhs-white text-slate-900 text-2xl font-bold sm:text-3xl">
                    Something Went Wrong
                  </h2>
                  <p className="dark:text-zhs-muted text-slate-500 mt-4 text-lg max-w-md mx-auto">
                    {errorMsg}
                  </p>
                  <div className="mt-8">
                    <button
                      onClick={() => { setFormState("idle"); setFormData(initialFormData); }}
                      className="btn-primary"
                    >
                      Try Again
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card-premium p-8 md:p-10">
                  <h2 className="dark:text-zhs-white text-slate-900 text-2xl font-bold mb-2">
                    Get My Free AI Audit
                  </h2>
                  <p className="dark:text-zhs-muted text-slate-500 mb-8 text-sm">
                    Tell us about your business and we'll help identify where AI and automation can create the most value.
                  </p>

                  <div className="space-y-5">
                    {/* Row 1: Name + Company */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="fullName" className="dark:text-zhs-text text-slate-700 mb-1.5 block text-sm font-medium">
                          Full Name *
                        </label>
                        <input
                          id="fullName" name="fullName" type="text"
                          value={formData.fullName} onChange={handleChange}
                          className={`${inputClass} ${errors.fullName ? errorClass : ""}`}
                          placeholder="John Smith"
                        />
                        {errors.fullName && <p className="text-zhs-rose mt-1.5 text-xs">{errors.fullName}</p>}
                      </div>
                      <div>
                        <label htmlFor="company" className="dark:text-zhs-text text-slate-700 mb-1.5 block text-sm font-medium">
                          Company *
                        </label>
                        <input
                          id="company" name="company" type="text"
                          value={formData.company} onChange={handleChange}
                          className={`${inputClass} ${errors.company ? errorClass : ""}`}
                          placeholder="Acme Inc."
                        />
                        {errors.company && <p className="text-zhs-rose mt-1.5 text-xs">{errors.company}</p>}
                      </div>
                    </div>

                    {/* Row 2: Email + Website */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="email" className="dark:text-zhs-text text-slate-700 mb-1.5 block text-sm font-medium">
                          Work Email *
                        </label>
                        <input
                          id="email" name="email" type="email"
                          value={formData.email} onChange={handleChange}
                          className={`${inputClass} ${errors.email ? errorClass : ""}`}
                          placeholder="john@company.com"
                        />
                        {errors.email && <p className="text-zhs-rose mt-1.5 text-xs">{errors.email}</p>}
                      </div>
                      <div>
                        <label htmlFor="website" className="dark:text-zhs-text text-slate-700 mb-1.5 block text-sm font-medium">
                          Website
                        </label>
                        <input
                          id="website" name="website" type="url"
                          value={formData.website} onChange={handleChange}
                          className={inputClass}
                          placeholder="https://company.com"
                        />
                      </div>
                    </div>

                    {/* Row 3: Industry + Team Size */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="industry" className="dark:text-zhs-text text-slate-700 mb-1.5 block text-sm font-medium">
                          Industry *
                        </label>
                        <select
                          id="industry" name="industry"
                          value={formData.industry} onChange={handleChange}
                          className={`${inputClass} ${errors.industry ? errorClass : ""}`}
                        >
                          <option value="">Select an industry</option>
                          {industryOptions.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                        {errors.industry && <p className="text-zhs-rose mt-1.5 text-xs">{errors.industry}</p>}
                      </div>
                      <div>
                        <label htmlFor="teamSize" className="dark:text-zhs-text text-slate-700 mb-1.5 block text-sm font-medium">
                          Team Size
                        </label>
                        <select
                          id="teamSize" name="teamSize"
                          value={formData.teamSize} onChange={handleChange}
                          className={inputClass}
                        >
                          <option value="">Select team size</option>
                          {teamOptions.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Business Challenge */}
                    <div>
                      <label htmlFor="biggestChallenge" className="dark:text-zhs-text text-slate-700 mb-1.5 block text-sm font-medium">
                        Biggest Business Challenge
                      </label>
                      <textarea
                        id="biggestChallenge" name="biggestChallenge" rows={3}
                        value={formData.biggestChallenge} onChange={handleChange}
                        className={inputClass}
                        placeholder="What is costing your business time, money, leads, or efficiency?"
                      />
                    </div>

                    {/* Current Workflow/Tools */}
                    <div>
                      <label htmlFor="currentTools" className="dark:text-zhs-text text-slate-700 mb-1.5 block text-sm font-medium">
                        Current Workflow & Tools
                      </label>
                      <textarea
                        id="currentTools" name="currentTools" rows={3}
                        value={formData.currentTools} onChange={handleChange}
                        className={inputClass}
                        placeholder="What tools and processes are you currently using?"
                      />
                    </div>

                    {/* Time & Lead Loss */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="losesTime" className="dark:text-zhs-text text-slate-700 mb-1.5 block text-sm font-medium">
                          Where Does the Business Lose Time?
                        </label>
                        <textarea
                          id="losesTime" name="losesTime" rows={2}
                          value={formData.losesTime} onChange={handleChange}
                          className={inputClass}
                          placeholder="Describe repetitive tasks or bottlenecks..."
                        />
                      </div>
                      <div>
                        <label htmlFor="losesLeads" className="dark:text-zhs-text text-slate-700 mb-1.5 block text-sm font-medium">
                          Where Does the Business Lose Leads?
                        </label>
                        <textarea
                          id="losesLeads" name="losesLeads" rows={2}
                          value={formData.losesLeads} onChange={handleChange}
                          className={inputClass}
                          placeholder="Describe your lead generation and conversion challenges..."
                        />
                      </div>
                    </div>

                    {/* What to Automate */}
                    <div>
                      <label htmlFor="wantToAutomate" className="dark:text-zhs-text text-slate-700 mb-1.5 block text-sm font-medium">
                        What Do You Want to Automate?
                      </label>
                      <textarea
                        id="wantToAutomate" name="wantToAutomate" rows={3}
                        value={formData.wantToAutomate} onChange={handleChange}
                        className={inputClass}
                        placeholder="Describe processes you'd like to see automated..."
                      />
                    </div>

                    {/* Additional Info */}
                    <div>
                      <label htmlFor="additionalInfo" className="dark:text-zhs-text text-slate-700 mb-1.5 block text-sm font-medium">
                        Additional Information
                      </label>
                      <textarea
                        id="additionalInfo" name="additionalInfo" rows={3}
                        value={formData.additionalInfo} onChange={handleChange}
                        className={inputClass}
                        placeholder="Anything else you'd like us to know?"
                      />
                    </div>

                    {/* Submit */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={formState === "submitting"}
                        className="btn-primary w-full sm:w-auto disabled:opacity-50"
                      >
                        {formState === "submitting" ? (
                          <>
                            <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            Get My Free AI Audit
                            <Send className="h-4 w-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <CtaSection
        heading="Not Sure Where to Start?"
        subheading="If you'd rather talk first, our team is happy to discuss your challenges before you fill anything out."
        primaryLabel="Talk to Our Team"
        primaryTo="/contact"
      />
    </>
  );
}