const allAccordion = document.getElementsByClassName("kawa-accordion");
Array.from(allAccordion).forEach((e) => {
  e.addEventListener("click", function () {
    this.classList.toggle("active");
    const contentElm = e.nextElementSibling;
    if (contentElm.style.display === "none" || !contentElm.style.display) {
      contentElm.style.display = "block";
    } else {
      contentElm.style.display = "none";
    }
  });
});
