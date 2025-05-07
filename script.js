// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Retrieve stored theme preference and apply it
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.body.classList.add(savedTheme); // Apply theme class
    document.getElementById("themeSelect").value = savedTheme; // Set select to the saved theme
  }

  // Trigger animation on button click
  document.getElementById("animateBtn").addEventListener("click", function () {
    const box = document.getElementById("box");
    box.classList.add("animate");

    // Save the animation trigger state to localStorage
    localStorage.setItem("animationTriggered", "true");
  });

  // Save theme preference to localStorage on theme change
  document
    .getElementById("themeSelect")
    .addEventListener("change", function () {
      const theme = this.value;
      document.body.classList.remove("light", "dark");
      document.body.classList.add(theme);
      localStorage.setItem("theme", theme); // Store the selected theme
    });
});
