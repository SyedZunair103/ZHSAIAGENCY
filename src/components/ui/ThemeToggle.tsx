import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../context/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border transition-all duration-300 dark:border-zhs-border dark:bg-zhs-dark-2/50 dark:text-zhs-muted dark:hover:border-zhs-border-light dark:hover:text-zhs-white dark:hover:bg-zhs-dark-3/50 border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:text-slate-900 hover:bg-slate-100"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4 transition-transform duration-300" />
      ) : (
        <Moon className="h-4 w-4 transition-transform duration-300" />
      )}
    </button>
  );
}
