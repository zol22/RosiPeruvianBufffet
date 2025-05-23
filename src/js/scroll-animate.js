const initializeObserver = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-animated');
        }
      });
    }, {
      threshold: 0,
    });
  
      
      // Delay observation to wait for layout rendering
      setTimeout(() => {
        const elements = document.querySelectorAll('.scroll-animation .col');
        elements.forEach((el) => observer.observe(el));
      }, 100); // small delay ensures DOM is ready
  };
  
  // Run once DOM is ready
  document.addEventListener('DOMContentLoaded', () => {
    initializeObserver();
  });
  
  // Run again after Astro client-side navigation
  document.addEventListener('astro:after-swap', () => {
    initializeObserver();
  });
  
  // Optional: run if Astro prefetching loads something via HMR or swap
  document.addEventListener('astro:page-loaded', () => {
    initializeObserver();
  });
  