const btn2 = document.querySelector(".btn2");

btn2.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

const observer = new IntersectionObserver((entries) => {
  console.log(entries);
});
observer.observe(btn2[0]);
