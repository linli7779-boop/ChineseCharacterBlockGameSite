const setCurrentYear = () => {
  const yearElement = document.querySelector("#current-year");
  if (!yearElement) {
    return;
  }
  const currentYear = new Date().getFullYear();
  yearElement.textContent = currentYear;
};

const respectReducedMotion = () => {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const video = document.querySelector(".media__player");
  if (!video) {
    return;
  }
  const updatePlayback = () => {
    if (mediaQuery.matches) {
      video.pause();
      video.controls = true;
    } else if (video.paused) {
      video.play().catch(() => undefined);
    }
  };
  mediaQuery.addEventListener("change", updatePlayback);
  updatePlayback();
};

document.addEventListener("DOMContentLoaded", () => {
  setCurrentYear();
  respectReducedMotion();
});
