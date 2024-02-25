// {% raw %}
import flyingPages from "flying-pages-module";
import Alpine from "alpinejs";
//import intersect from "@alpinejs/intersect";
import dataDOM from "./modules/Alpine.data/DOM";

// The window.Alpine = Alpine bit is optional, but is nice to have for
// freedom and flexibility. Like when tinkering with Alpine from the devtools for example.
window.Alpine = Alpine;

// Function for executing code on document ready
function domReady(callback) {
  if (['interactive', 'complete'].indexOf(document.readyState) >= 0) {
    callback();
  } else {
    document.addEventListener('DOMContentLoaded', callback);
  }
}

// If you imported Alpine into a bundle, you have to make sure you are registering any
// extension code IN BETWEEN when you import the Alpine global object, and when you
// initialize Alpine by calling Alpine.start().

// Add plugins to Alpine
//Alpine.plugin(intersect);

Alpine.data("xDOM", dataDOM);

// Start Alpine when the page is ready.
domReady(() => {
  // Theme info
  console.log('\n\n\n%c🍹', 'color: #CA0000; background: #FFFF00; font-size: 200px; font-weight: bold; padding: 10px 36px; white-space: nowrap;');

  console.log('%cFresh Juice', 'color: #CA0000; background: #FFFF00; font-size: 32px; font-weight: bold; padding: 10px 30px; white-space: nowrap;');
  console.log('%cIt`s a stunningly crafted starter theme for HubSpot CMS, meticulously assembled using the powerful combination of TailwindCSS and AlpineJS.', 'font-size:18px');
  console.log('%cFork me on GitHub:\nhttps://github.com/freshjuice-dev/freshjuice-hubspot-theme\n\n\n', 'font-size:18px');

  Alpine.start();
  flyingPages({
    // Prefetch all pages by default
  });
});
// {% endraw %}
