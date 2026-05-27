document.addEventListener("DOMContentLoaded", function () {
  const fab = document.getElementById("bcf-fab");
  const panel = document.getElementById("bcf-settings-panel");
  const closeBtn = document.getElementById("bcf-panel-close");
  
  if (fab && panel) {
    fab.addEventListener("click", function (e) {
      e.stopPropagation();
      const isVisible = panel.style.display === "flex";
      panel.style.display = isVisible ? "none" : "flex";
      console.log("BCF Settings Panel toggled to:", !isVisible);
    });
  }
  
  if (closeBtn && panel) {
    closeBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      panel.style.display = "none";
      console.log("BCF Settings Panel closed");
    });
  }
  
  // Close panel on outside click
  document.addEventListener("click", function (e) {
    if (panel && panel.style.display === "flex" && !panel.contains(e.target) && e.target !== fab) {
      panel.style.display = "none";
    }
  });

  // Alt+Shift+B keyboard shortcut to toggle BCF panel
  document.addEventListener("keydown", function (e) {
    if (e.altKey && e.shiftKey && e.code === "KeyB") {
      e.preventDefault();
      if (panel) {
        panel.style.display = panel.style.display === "flex" ? "none" : "flex";
      }
    }
  });
});