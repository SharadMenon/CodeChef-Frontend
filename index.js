var navbar = document.getElementById("navbar");
window.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
      navbar.classList.remove("mt-4");
    } else {
      navbar.classList.add("mt-4");
    }
  });
  const slides = document.querySelectorAll(".slide");
  let counter = 0;
  let counter1 = 0;
  const totalSlides = slides.length;
  const intervalTime = 3000;
  const slides1 = document.querySelectorAll(".slide1")
  const totalSlides1 = slides1.length;
  slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
  });
  
  const slideImage = () => {
    slides.forEach((slide) => {
      slide.style.transform = `translateX(-${counter * 100}%)`;
    });
  };
  
  const goPrev = () => {
    counter = (counter - 1 + totalSlides) % totalSlides;
    slideImage();
    resetInterval();
  };
  
  const goNext = () => {
    counter = (counter + 1) % totalSlides;
    slideImage();
    resetInterval();
  };
  slides1.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
  });
  
  const slideImage1 = () => {
    slides1.forEach((slide) => {
      slide.style.transform = `translateX(-${counter1 * 100}%)`;
    });
  };
  
  const goPrev1 = () => {
    counter1 = (counter1 - 1 + totalSlides1) % totalSlides1;
    slideImage1();
    resetInterval();
  };
  
  const goNext1 = () => {
    counter1 = (counter1 + 1) % totalSlides1;
    slideImage1();
    resetInterval();
  };
  let slideshowInterval = setInterval(goNext, intervalTime);
  
  const resetInterval = () => {
    clearInterval(slideshowInterval);
    slideshowInterval = setInterval(goNext, intervalTime);
  };
  
document.querySelector(".relative").addEventListener("mouseenter", () => {
    clearInterval(slideshowInterval);
});
document.querySelector(".relative").addEventListener("mouseleave", () => {
    slideshowInterval = setInterval(goNext, intervalTime);
});
const element = document.getElementById("searching");
const searchTerms = ['Search "Earbuds" ', 'Search Headphones', 'Search "Smartwatches"'];
let currentIndex = 0;

function changePlaceholder() {
  element.placeholder = searchTerms[currentIndex];
  currentIndex = (currentIndex + 1) % searchTerms.length;
}

changePlaceholder();

setInterval(changePlaceholder, 3000); // Change every 3 seconds (adjust the time as needed)
function element1() {
  var commonButtons = document.getElementsByClassName("commonbutton");

  for (var i = 0; i < commonButtons.length; i++) {
    var button = commonButtons[i];

    if (button.classList.contains('bg-slate-300')) {
      button.classList.remove("bg-slate-300");
    }

    if (button.classList.contains('font-bold')) {
      button.classList.remove("font-bold");
    }
  }
  document.getElementById("button2").classList.remove("bg-white");
  document.getElementById("button2").classList.add("bg-slate-300");
  document.getElementById("button2").classList.add("font-bold");
  document.getElementById("id2_name").innerText = "Headphone";
}
function element2() {
  var commonButtons = document.getElementsByClassName("commonbutton");

  for (var i = 0; i < commonButtons.length; i++) {
    var button = commonButtons[i];

    if (button.classList.contains('bg-slate-300')) {
      button.classList.remove("bg-slate-300");
    }

    if (button.classList.contains('font-bold')) {
      button.classList.remove("font-bold");
    }
  }
  document.getElementById("button3").classList.remove("bg-white");
  document.getElementById("button3").classList.add("bg-slate-300");
  document.getElementById("button3").classList.add("font-bold");
  document.getElementById("id3_name").innerText = "Headphone";
}
function element3() {
  var commonButtons = document.getElementsByClassName("commonbutton");

  for (var i = 0; i < commonButtons.length; i++) {
    var button = commonButtons[i];

    if (button.classList.contains('bg-slate-300')) {
      button.classList.remove("bg-slate-300");
    }

    if (button.classList.contains('font-bold')) {
      button.classList.remove("font-bold");
    }
  }
  document.getElementById("button4").classList.remove("bg-white");
  document.getElementById("button4").classList.add("bg-slate-300");
  document.getElementById("button4").classList.add("font-bold");
  document.getElementById("id4_name").innerText = "Headphone";
}
function element4() {
  var commonButtons = document.getElementsByClassName("commonbutton");

  for (var i = 0; i < commonButtons.length; i++) {
    var button = commonButtons[i];

    if (button.classList.contains('bg-slate-300')) {
      button.classList.remove("bg-slate-300");
    }

    if (button.classList.contains('font-bold')) {
      button.classList.remove("font-bold");
    }
  }
  document.getElementById("button5").classList.remove("bg-white");
  document.getElementById("button5").classList.add("bg-slate-300");
  document.getElementById("button5").classList.add("font-bold");
  document.getElementById("id5_name").innerText = "Headphone";
}
function defaultele() {
  var commonButtons = document.getElementsByClassName("commonbutton");

  for (var i = 0; i < commonButtons.length; i++) {
    var button = commonButtons[i];

    if (button.classList.contains('bg-slate-300')) {
      button.classList.remove("bg-slate-300");
    }

    if (button.classList.contains('font-bold')) {
      button.classList.remove("font-bold");
    }
  }
  document.getElementById("button1").classList.remove("bg-white");
  document.getElementById("button1").classList.add("bg-slate-300");
  document.getElementById("button1").classList.add("font-bold");
  document.getElementById("id1_name").innerText = "Headphone";
}
function popular() {
  var commonButtons = document.getElementsByClassName("2ndcommonbutton");

  for (var i = 0; i < commonButtons.length; i++) {
    var button = commonButtons[i];

    if (button.classList.contains('bg-slate-300')) {
      button.classList.remove("bg-slate-300");
    }

    if (button.classList.contains('font-bold')) {
      button.classList.remove("font-bold");
    }
  }
  document.getElementById("popular").classList.remove("bg-white");
  document.getElementById("popular").classList.add("bg-slate-300");
  document.getElementById("popular").classList.add("font-bold");
}
function latest() {
  var commonButtons = document.getElementsByClassName("2ndcommonbutton");

  for (var i = 0; i < commonButtons.length; i++) {
    var button = commonButtons[i];

    if (button.classList.contains('bg-slate-300')) {
      button.classList.remove("bg-slate-300");
    }

    if (button.classList.contains('font-bold')) {
      button.classList.remove("font-bold");
    }
  }
  document.getElementById("latest").classList.remove("bg-white");
  document.getElementById("latest").classList.add("bg-slate-300");
  document.getElementById("latest").classList.add("font-bold");
}