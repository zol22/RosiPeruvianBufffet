import { animate, stagger } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm"

function runObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const delay = Number (entry.target.dataset.delay) || 0;
                const children = entry.target.querySelectorAll(":scope > *")
                if (entry.target.hasAttribute("data-stagger") && children.length) {
                    animate(children,
                    { opacity:[0,1], y:[40,0] },
                    { duration: 0.7, delay: stagger(0.1,{ start:delay /1000 }), easing: "ease-out" }
                )
                } else {
                    animate(entry.target,
                    { opacity:[0,1], y:[40,0] },
                    { duration: 0.7, delay: delay/1000, easing: "ease-out" }
                    )
                }

                observer.unobserve(entry.target);
                
            }
        });
    }, { threshold: 0.1 });


      document.querySelectorAll("[data-motion]").forEach((el)=> {
          el.style.opacity = 0;
          observer.observe(el)
      })
}

document.addEventListener("DOMContentLoaded", runObserver);
document.addEventListener("astro:page-load", runObserver);

