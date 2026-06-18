"use strict";

(() => {
  const root = document.documentElement;
  const media = window.matchMedia("(prefers-color-scheme: dark)");

  const applyTheme = (isDark) => {
    root.setAttribute("data-theme", isDark ? "dark" : "light");
  };

  applyTheme(media.matches);

  media.addEventListener("change", (event) => {
    applyTheme(event.matches);
  });
})();
