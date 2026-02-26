window.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const media = window.matchMedia("(prefers-color-scheme: dark)");

  const applyTheme = (isDark) => {
    root.setAttribute("data-theme", isDark ? "dark" : "light");
  };

  applyTheme(media.matches);

  if (typeof media.addEventListener === "function") {
    media.addEventListener("change", (event) => applyTheme(event.matches));
  } else if (typeof media.addListener === "function") {
    media.addListener((event) => applyTheme(event.matches));
  }
});
