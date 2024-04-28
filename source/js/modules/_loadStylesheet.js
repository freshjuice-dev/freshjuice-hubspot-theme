/**
 * This function is used to load a stylesheet into the HTML document.
 * It creates a new link element, sets its source to the provided URL,
 * and appends it to the head of the document.
 *
 * @module
 * @param {string} src - The URL of the stylesheet to be loaded.
 * @param {string} [media] - The media attribute of the stylesheet.
 * @param {string} [type="text/css"] - The type attribute of the stylesheet.
 * @returns {void} - This function does not return anything.
 */
module.exports = (src, media, type) => {

  // If the source does not start with "http" or "https", add "https" to the beginning of the source.
  if (!src.startsWith("http") && !src.startsWith("https")) {
    src = (src.startsWith("//")) ? `https:${src}` : `https://${src}`;
  }

  // Check if a link with the same source already exists in the document.
  // If it does, the function returns immediately.
  if (document.querySelector(`link[href="${src}"]`)) {
    return;
  }

  // Create a new link element.
  const link = document.createElement("link");

  // Set the rel attribute of the link to "stylesheet".
  link.rel = "stylesheet";

  // Set the type attribute of the link to the provided type.
  link.type = type || "text/css";

  // Set the href attribute of the link to the provided URL
  link.href = src;

  // Set the media attribute of the link to the provided media.
  if (media)
    link.media = media;

  // Append the link to the head of the document.
  document.head.appendChild(link);
};
