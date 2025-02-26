var imgs = document.querySelectorAll(".image-containers1 img");
var img2 = document.querySelectorAll(".image-containers2 img");
var img3 = document.querySelectorAll(".image-containers3 img");
var img4 = document.querySelectorAll(".image-containers4 img");
var info = document.querySelectorAll(".info");
var headings = document.querySelectorAll(".txt");

gsap.to("#loader", {
  delay:2,
  duration: 5, // Duration of the animation
  top:"-100%"

  
}, code());


function code(){
  

gsap.from(".imgcont",{
  scale:0,
  duration: 0.5,
  ease: "power2.inOut",
  stagger:1,
  ease: "power2.out",
 
})

gsap.from(headings, {
opacity: 0, // Start with opacity 0
y: "100%", // Move 30 pixels down
duration: 1, // Duration of the animation
ease: "power2.inOut", // Easing function
zIndex: 999,
});

imgs.forEach(function (img) {
img.addEventListener("mouseover", function (e) {
  // console.log("Mouse over image: " + e.target.src);
  e.target.src =
    "./Assets/img1.png"; // Change the image source
  gsap.to(img, {
    display: "block", // Show the image
    opacity: 1, // Smoothly fade out the image instead of hiding it
    duration: 0.3,
    ease: "power2.out",
    zIndex: 999, // Move the image to the back to prevent it from being covered by the text
  });

  gsap.to(headings, {
    fontFamily: "'D', sans-serif", // Apply custom font
    color: "transparent", // Make text transparent
    WebkitTextStroke: "0.5px #4e4d4d", // Add stroke effect
    duration: 0.3,
    ease: "power2.out",
  });
});

img.addEventListener("mouseleave", function (e) {
  e.target.src = " "; // Change the image source

  gsap.to(img, {
    opacity: 1, // Fade the image back in
    duration: 0.3,
    ease: "power2.out",
  });

  gsap.to(headings, {
    fontFamily: "'D', sans-serif", // Apply custom font
    color: "white",
    duration: 0.3,
    ease: "power2.out",
  });
});
});

img2.forEach(function (img) {
img.addEventListener("mouseover", function (e) {
  // console.log("Mouse over image: " + e.target.src);
  e.target.src =
    "./Assets/img2.png"; // Change the image source
  gsap.to(img, {
    display: "block", // Show the image
    opacity: 1, // Smoothly fade out the image instead of hiding it
    duration: 0.3,
    ease: "power2.out",
    zIndex: 999, // Move the image to the back to prevent it from being covered by the text
  });

  gsap.to(headings, {
    fontFamily: "'D', sans-serif", // Apply custom font
    color: "transparent", // Make text transparent
    WebkitTextStroke: "0.5px #4e4d4d", // Add stroke effect
    duration: 0.3,
    ease: "power2.out",
  });
});

img.addEventListener("mouseleave", function (e) {
  e.target.src = " "; // Change the image source

  gsap.to(img, {
    opacity: 1, // Fade the image back in
    duration: 0.3,
    ease: "power2.out",
  });

  gsap.to(headings, {
    fontFamily: "'D', sans-serif", // Apply custom font
    color: "white",
    duration: 0.3,
    ease: "power2.out",
  });
});
});

img3.forEach(function (img) {
img.addEventListener("mouseover", function (e) {
  // console.log("Mouse over image: " + e.target.src);
  e.target.src =
    "./Assets/img3.png"; // Change the image source
  gsap.to(img, {
    display: "block", // Show the image
    opacity: 1, // Smoothly fade out the image instead of hiding it
    duration: 0.3,
    ease: "power2.out",
    zIndex: 999, // Move the image to the back to prevent it from being covered by the text
  });

  gsap.to(headings, {
    fontFamily: "'D', sans-serif", // Apply custom font
    color: "transparent", // Make text transparent
    WebkitTextStroke: "0.5px #4e4d4d", // Add stroke effect
    duration: 0.3,
    ease: "power2.out",
  });
});

img.addEventListener("mouseleave", function (e) {
  e.target.src = " "; // Change the image source

  gsap.to(img, {
    opacity: 1, // Fade the image back in
    duration: 0.3,
    ease: "power2.out",
  });

  gsap.to(headings, {
    fontFamily: "'D', sans-serif", // Apply custom font
    color: "white",
    duration: 0.3,
    ease: "power2.out",
  });
});
});

img4.forEach(function (img) {
img.addEventListener("mouseover", function (e) {
  // console.log("Mouse over image: " + e.target.src);
  e.target.src ="./Assets/img4.png"; // Change the image source
  gsap.to(img, {
    display: "block", // Show the image
    opacity: 1, // Smoothly fade out the image instead of hiding it
    duration: 0.3,
    ease: "power2.out",
    // Move the image to the back to prevent it from being covered by the text
  });

  gsap.to(headings, {
    fontFamily: "'D', sans-serif", // Apply custom font
    color: "transparent", // Make text transparent
    WebkitTextStroke: "0.5px #4e4d4d", // Add stroke effect
    duration: 0.3,
    ease: "power2.out",
  });
});

img.addEventListener("mouseleave", function (e) {
  e.target.src = " "; // Change the image source

  gsap.to(img, {
    opacity: 1, // Fade the image back in
    duration: 0.3,
    ease: "power2.out",
  });

  gsap.to(headings, {
    fontFamily: "'D', sans-serif", // Apply custom font
    color: "white",
    duration: 0.3,
    ease: "power2.out",
  });
});
});



const containerClasses = ["image-containers1", "image-containers2", "image-containers3", "image-containers4"];

containerClasses.forEach((className) => {
document.querySelectorAll(`.${className}`).forEach((container, index) => {
  container.addEventListener("mousemove", (e) => {
    let rect = container.getBoundingClientRect();
    let x = (e.clientX - rect.left) / rect.width - 0.5;
    let y = (e.clientY - rect.top) / rect.height - 0.5;

    let moveX = x * 40;
    let moveY = y * 40;

    // Ensure corresponding info element is shown if applicable
    let infoElements = document.querySelectorAll(`.info${className.slice(-1)}`);
    if (infoElements.length && infoElements[index]) {
      infoElements[index].style.display = "block";
    }

    gsap.to(container, {
      x: moveX,
      y: moveY,
      zIndex: 999,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  container.addEventListener("mouseleave", () => {
    let infoElements = document.querySelectorAll(`.info${className.slice(-1)}`);
    if (infoElements.length && infoElements[index]) {
      infoElements[index].style.display = "none";
    }

    gsap.to(container, {
      x: 0,
      y: 0,
      duration: 0.4,
      ease: "power2.out",
    });
  });
});
});

}

