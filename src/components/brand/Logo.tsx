import { useTheme } from "../../context/useTheme";
import darkLogo from "../../assets/brand/zhs-ai-agency-logo-dark.svg";
import lightLogo from "../../assets/brand/zhs-ai-agency-logo-light.svg";
import darkLogoNav from "../../assets/brand/zhs-ai-agency-logo-dark-nav.svg";
import lightLogoNav from "../../assets/brand/zhs-ai-agency-logo-light-nav.svg";

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
        className={`h-9 w-auto lg:h-[46px] ${className}`}
        loading="eager"
      />
    );
  }

  const src = theme === "dark" ? darkLogo : lightLogo;
  return (
    <img
      src={src}
      alt="ZHS AI Agency"
      className={`h-8 w-auto lg:h-9 ${className}`}
      loading="eager"
    />
  );
}
