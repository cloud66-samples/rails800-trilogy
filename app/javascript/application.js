// entry point for esbuild — bundled via jsbundling-rails
import "@hotwired/turbo-rails"
import "./controllers"

// click handler for flower rows
document.addEventListener('turbo:load', () => {
  const flowerRows = document.querySelectorAll('.flower-row');
  flowerRows.forEach(row => {
    row.addEventListener('click', () => {
      window.location.href = row.dataset.href;
    });
  });
});
