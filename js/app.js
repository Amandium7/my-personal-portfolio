document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.neptune-fader picture.background');
    let current = 0;
    const total = slides.length;
    const intervalMs = 4000; // 3 seconds
  
    function showSlide(idx) {
      slides.forEach((s, i) => {
        s.classList.toggle('active', i === idx);
      });
    }
  
    // start the loop
    setInterval(() => {
      current = (current + 1) % total;
      showSlide(current);
    }, intervalMs);
  });
  