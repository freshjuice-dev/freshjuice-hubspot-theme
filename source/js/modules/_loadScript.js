/**
 * This function is used to load a script into the HTML document.
 * It creates a new script element, sets its source to the provided URL,
 * and appends it to the body of the document.
 *
 * @module
 * @param {string} src - The URL of the script to be loaded.
 * @param {string} [loading="defer"] - The loading strategy for the script. It can be either "defer" or "async".
 * @param {function} [callback] - A callback function to be executed when the script has finished loading.
 *
 * @returns {void} - This function does not return anything.
 */
module.exports = (src, loading = "defer", callback) => {

  // If the source does not start with "http" or "https", add "https" to the beginning of the source.
  if (!src.startsWith("http") && !src.startsWith("https")) {
    src = (src.startsWith("//")) ? `https:${src}` : `https://${src}`;
  }

  // Check if a script with the same source already exists in the document.
  // If it does, the function returns immediately.
  if (document.querySelector(`script[src="${src}"]`)) {
    return;
  }

  // Create a new script element.
  const script = document.createElement("script");

  // Set the source of the script to the provided URL.
  script.src = src;

  // Set the loading strategy of the script.
  // If "defer" is provided, the script is executed when the page has finished parsing.
  // If "async" is provided, the script is executed as soon as it is available.
  if (loading === "defer") script.defer = true;
  if (loading === "async") script.async = true;

  // Set the cross-origin attribute of the script to "anonymous".
  script.crossOrigin = "anonymous";

  // Set the onload and onreadystatechange events of the script.
  // When the script has finished loading, the callback function is executed (if provided),
  // and the onload and onreadystatechange events are removed.
  script.onload = script.onreadystatechange = () => {
    if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {
      if (callback) callback();
      script.onload = script.onreadystatechange = null;
    }
  };

  // Append the script to the body of the document.
  document.body.appendChild(script);
};
