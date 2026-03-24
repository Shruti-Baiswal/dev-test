const slider = document.getElementById("slider");
  const gap = 20;
  const speed = 500;
  let moving = false;

  function getWidth() {
    return slider.children[0].offsetWidth + gap;
  }

  // RIGHT ARROW
  function nextSlide() {
    if (moving) return;
    //moving true means slider busy
    moving = true;
//know the browser transition speed for smooth transition 
    slider.style.transition = `transform ${speed}ms ease`;
    //move only one image in left
    slider.style.transform = `translateX(-${getWidth()}px)`;

  // transition end 
    slider.addEventListener("transitionend", () => {
      slider.style.transition = "none";
      //last image + first image
      slider.appendChild(slider.firstElementChild);
      //now slider is normal position
      slider.style.transform = "translateX(0)";
      moving = false;
    }, { once: true });
  }

  // LEFT ARROW
  function prevSlide() {
    if (moving) return;
    moving = true;

    slider.style.transition = "none";
    slider.insertBefore(
      slider.lastElementChild,
      slider.firstElementChild
    );
    slider.style.transform = `translateX(-${getWidth()}px)`;
    requestAnimationFrame(() => {
      slider.style.transition = `transform ${speed}ms ease`;
      slider.style.transform = "translateX(0)";
    });

    slider.addEventListener("transitionend", () => {
      moving = false;
    }, { once: true });
  }