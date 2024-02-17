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