import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function initLightbox() {
  const lightbox = new SimpleLightbox('.lightbox', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
    animationSpeed: 200,
    close: true, // enable close button
    docClose: true, // ✅ clicking outside closes the modal
    overlayOpacity: 0.85,
  });

  // Optional: Trigger reinitialization if gallery items change
  // lightbox.refresh();
}
