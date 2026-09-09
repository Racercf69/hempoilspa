(function () {
  const gate = document.getElementById("age-gate");
  if (gate && localStorage.getItem("hos_age") === "yes") {
    gate.classList.add("hidden");
  }
  window.confirmAge = function (ok) {
    if (!ok) {
      window.location.href = "https://www.google.com";
      return;
    }
    localStorage.setItem("hos_age", "yes");
    if (gate) gate.classList.add("hidden");
  };

  const burger = document.querySelector(".burger");
  const links = document.querySelector(".nav-links");
  if (burger && links) {
    burger.addEventListener("click", () => links.classList.toggle("open"));
  }

  document.querySelectorAll("[data-form]").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const box = form.querySelector(".success");
      if (box) box.classList.add("show");
      form.reset();
    });
  });

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
