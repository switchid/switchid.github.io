document.addEventListener("DOMContentLoaded", () => {
  const sky = document.getElementById("static-star");
  const starCount = 150; // Number of stars

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    // Random size, position, and animation duration
    const size = Math.random() * 3;
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const duration = Math.random() * 1.5 + 0.5;

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${top}vh`;
    star.style.left = `${left}vw`;
    star.style.animationDuration = `${duration}s`;

    sky.appendChild(star);
  }
});

setInterval(() => createStarFalls(5), 20 * 1000);

function createStarFalls(stars) {
  const sky = document.getElementById("fall-star");
  sky.innerHTML = "";
  let starFallCount = stars; // Number of stars

  for (let i = 0; i < starFallCount; i++) {
    const starFall = document.createElement("div");
    starFall.classList.add("star-fall");
    // Random size, initial position, and animation duration
    const size = Math.random() * 3;
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const duration = Math.random() * 1.5 + 0.5;
    const fallDuration = Math.random() * 5 + 5;

    starFall.style.width = `${size}px`;
    starFall.style.height = `${size}px`;
    starFall.style.top = `${top}vh`;
    starFall.style.left = `${left}vw`;
    starFall.style.animationDuration = `${duration}s, ${fallDuration}s`;
    starFall.style.animationDelay = `0s, 0s`;

    if (i % 2 == 0) {
      starFall.style.setProperty("--tail-color", "rgba(0, 156, 74, 0.5)");
    } else {
      starFall.style.setProperty("--tail-color", "rgba(255, 255, 255, 0.5)");
    }
    sky.appendChild(starFall);
  }
}

function redirect_link(url) {
  return window.open(url, "_blank").focus();
}
