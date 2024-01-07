/**
 * This function is used for debugging purposes.
 * It logs the provided arguments to the console if the hostname of the current location contains "local" or if the "juice" key exists in the sessionStorage.
 * The arguments are logged with a unicorn emoji as a prefix.
 *
 * @module
 * @param {...*} args - The arguments to be logged.
 *
 * @returns {void} - This function does not return anything.
 */
module.exports = (...args) => {
  if (location.hostname.match(/(.hs-sites|.hubspot)/g) || window.sessionStorage.juice)
    console.log("🍹:", ...args);
};
