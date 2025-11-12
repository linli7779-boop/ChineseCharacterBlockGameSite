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

const initContactForm = () => {
  const form = document.querySelector("#contact-form");
  if (!form) {
    return;
  }
  const status = document.querySelector("#contact-status");
  const recipient = "lin.li7779@gmail.com";
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = (formData.get("name") || "").toString().trim();
    const email = (formData.get("email") || "").toString().trim();
    const message = (formData.get("message") || "").toString().trim();
    const subjectParts = ["Chinese Character Block message"];
    if (name) {
      subjectParts.push(`from ${name}`);
    }
    const subject = subjectParts.join(" ");
    const bodyLines = [
      `Name: ${name || "Not provided"}`,
      `Email: ${email || "Not provided"}`,
      "",
      message || "(No message provided)",
    ];
    const body = bodyLines.join("\n");
    const href =
      `mailto:${recipient}?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;
    if (status) {
      status.textContent = "Opening your email app to finish sending.";
    }
    window.location.assign(href);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  setCurrentYear();
  respectReducedMotion();
  initContactForm();
});
