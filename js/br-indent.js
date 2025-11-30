(() => {
  // <stdin>
  (function() {
    "use strict";
    window.addEventListener("DOMContentLoaded", () => {
      const contentContainer = document.querySelector("section.page-section");
      if (!contentContainer) return;
      const paragraphs = contentContainer.querySelectorAll("p");
      paragraphs.forEach((p) => {
        if (p.querySelector("br")) {
          p.innerHTML = p.innerHTML.replace(
            /<br\s*\/?>\s*/gi,
            '<br><span style="display:inline-block; width: 2em; user-select: none;"></span>'
          );
        }
      });
    });
  })();
})();
