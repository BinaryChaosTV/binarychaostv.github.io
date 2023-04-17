import "../scss/modules/header.scss";
import { ChangeEventHandler } from "react";

const mediaQueryPreference = () => {
  const mediaQuery = "(prefers-color-scheme: dark)";
  const match = window.matchMedia(mediaQuery);
  const hasPreference = typeof match.matches === "boolean";

  if (hasPreference) {
    return match.matches ? "dark" : "light";
  }
};

const storePreference = (pref: string) => {
  localStorage.setItem("theme", pref);
  document.documentElement.setAttribute("data-theme", pref);
};

const getPreference = () => {
  return localStorage.getItem("theme");
};

const themePreference = getPreference();
const mqPreference = mediaQueryPreference();

// If Dark theme is enabled on Desktop, then set to Dark Theme
const defaultDark =
  themePreference === "dark" ||
  (themePreference === null && mqPreference === "dark");

if (defaultDark) {
  storePreference("dark");
} else {
  storePreference("light");
}

// When Toggled, change theme.
const toggle: ChangeEventHandler<HTMLInputElement> = (e) => {
  if (e.target.checked) {
    storePreference("dark");
  } else {
    storePreference("light");
  }
};

export default function ThemeToggle() {
  return (
    <>
      <input
        id="theme-toggle"
        type="checkbox"
        role="switch"
        name="theme"
        onChange={toggle}
        defaultChecked={defaultDark}
      />
      <label htmlFor="theme-toggle" title="Change colour theme"></label>
    </>
  );
}
