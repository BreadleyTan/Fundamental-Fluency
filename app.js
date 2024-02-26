function updateProgressBar(){
  const {scrollTop, scrollHeight} = document.documentElement;
  const scrollPercent = scrollTop / (scrollHeight - window.innerHeight) * 100 + '%';
  document.querySelector('#progress-bar123').style.setProperty('--progress', scrollPercent);
}

document.addEventListener('scroll', updateProgressBar);


window.addEventListener("load", () => { const loading = document.querySelector(".loading_screen");

  loading.classList.add("loading_screen-hidden");

  loading.addEventListener("transitionend", () => {
    document.body.removeChild("loading_screen");
  })

})

const text = document.querySelector('.scroll-animation');

window.addEventListener('scroll', () =>{
  const current = window.scrollY;
  text.style.fontSize = `clamp(0vw, ${15 - current/10}vw, 15vw)`;

})

const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".move-in");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});