  const tabs = document.querySelectorAll('.tab');
  const slider_section = document.querySelectorAll('.scroll-slider');


  console.log("tabs", tabs);
  console.log("data", slider_section);

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const page = tab.dataset.page;
      console.log("page", page);

      tabs.forEach(t => t.classList.remove('active'));
      slider_section.forEach(c => c.classList.remove('active'));

      tab.classList.add('active');
      document.querySelector(`.scroll-slider[data-page="${page}"]`).classList.add('active');
    });
  });

slider_section.forEach(section => {
  const slides = section.querySelector('.right-content');
  const prev = section.querySelector('.prev');
  const next = section.querySelector('.next');

  prev.onclick = () => {
    slides.scrollLeft -= 300;
  };

  next.onclick = () => {
    slides.scrollLeft += 300;
  };
});
  

  

