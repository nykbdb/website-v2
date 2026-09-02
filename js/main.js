// LUXE Ambassadors — shared site behavior

document.addEventListener("DOMContentLoaded", () => {
  // Mobile nav toggle
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      links.classList.toggle("open");
      const expanded = links.classList.contains("open");
      toggle.setAttribute("aria-expanded", String(expanded));
    });
  }

  // Highlight active nav link based on current page
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === path || (path === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });

  // Footer year
  document.querySelectorAll(".current-year").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  // Formspree AJAX submission for any form with [data-ajax-form]
  document.querySelectorAll("form[data-ajax-form]").forEach((form) => {
    const statusEl = form.querySelector(".form-status");
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.textContent : "";
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending...";
      }

      try {
        const response = await fetch(form.action, {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" },
        });

        if (response.ok) {
          form.reset();
          if (statusEl) {
            statusEl.textContent =
              "Thank you! Your submission has been received — we'll be in touch soon.";
            statusEl.className = "form-status success";
          }
        } else {
          if (statusEl) {
            statusEl.textContent =
              "Something went wrong sending your form. Please email us directly or try again.";
            statusEl.className = "form-status error";
          }
        }
      } catch (err) {
        if (statusEl) {
          statusEl.textContent =
            "Network error — please check your connection and try again.";
          statusEl.className = "form-status error";
        }
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        }
      }
    });
  });
});
