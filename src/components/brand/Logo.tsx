import { useTheme } from "../../context/useTheme";
import darkLogo from "../../assets/brand/zhs-ai-agency-logo-v2-dark.svg";
import lightLogo from "../../assets/brand/zhs-ai-agency-logo-v2.svg";
import darkLogoNav from "../../assets/brand/zhs-ai-agency-logo-v2-nav-dark.svg";
import lightLogoNav from "../../assets/brand/zhs-ai-agency-logo-v2-nav.svg";

interface LogoProps {
  className?: string;
  tagline?: boolean;
}

export default function Logo({ className = "", tagline = true }: LogoProps) {
  const { theme } = useTheme();

  if (!tagline) {
    const src = theme === "dark" ? darkLogoNav : lightLogoNav;
    return (
      <img
        src={src}
        alt="ZHS AI Agency"
        className={`h-12 w-auto sm:h-[56px] lg:h-[64px] ${className}`}
        loading="eager"
        width={200}
        height={64}
      />
    );
  }

  const src = theme === "dark" ? darkLogo : lightLogo;
  return (
    <img
      src={src}
      alt="ZHS AI Agency"
      className={`h-16 w-auto lg:h-20 ${className}`}
      loading="eager"
      width={250}
      height={89}
    />
  );
}
