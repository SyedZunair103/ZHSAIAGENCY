import ScrollReveal from "../../components/animations/ScrollReveal";
import Container from "../../components/ui/Container";

const agents = [
  { label: "Customer Support", angle: -60, color: "bg-zhs-blue" },
  { label: "Sales", angle: -20, color: "bg-zhs-emerald" },
  { label: "Research", angle: 20, color: "bg-zhs-violet" },
  { label: "Operations", angle: 60, color: "bg-zhs-amber" },
  { label: "Knowledge", angle: 100, color: "bg-zhs-cyan" },
];

export default function AiAgentsVisual() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <Container className="relative z-10">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-label mb-4">AI Operating System</p>
            <h2 className="section-heading">Your Business. Powered By AI Agents.</h2>
            <p className="section-subheading mx-auto mt-4">
              Multiple intelligent agents working together, orchestrated around your business operations.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="relative mx-auto mt-16 h-[340px] max-w-[500px]">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative h-24 w-24 rounded-2xl border border-zhs-accent/30 dark:bg-zhs-dark-2 bg-white flex items-center justify-center glow-accent">
                <div className="absolute inset-0 animate-spin-slow rounded-2xl border border-dashed border-zhs-accent/20" />
                <span className="text-xs font-bold dark:text-zhs-accent text-zhs-accent">CORE</span>
              </div>
            </div>

            {agents.map((agent, i) => {
              const rad = (agent.angle * Math.PI) / 180;
              const radius = 140;
              const x = Math.cos(rad) * radius;
              const y = Math.sin(rad) * radius;
              return (
                <div
                  key={agent.label}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    animation: `node-pulse 3s ease-in-out ${i * 0.6}s infinite`,
                  }}
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className={`h-2 w-2 rounded-full ${agent.color} opacity-60`} />
                    <div className="rounded-lg dark:border-zhs-border border-slate-200 dark:bg-zhs-dark-2/80 bg-white px-3 py-1.5 text-[11px] font-medium dark:text-zhs-muted text-slate-500">
                      {agent.label}
                    </div>
                  </div>
                </div>
              );
            })}

            <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
              {agents.map((agent, i) => {
                const rad = (agent.angle * Math.PI) / 180;
                const radius = 100;
                const x = Math.cos(rad) * radius + 250;
                const y = Math.sin(rad) * radius + 170;
                return (
                  <line
                    key={i}
                    x1="250" y1="170" x2={x} y2={y}
                    stroke="url(#agentLine)"
                    strokeWidth="0.5"
                    strokeDasharray="3 3"
                    opacity="0.4"
                  />
                );
              })}
              <defs>
                <linearGradient id="agentLine" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
