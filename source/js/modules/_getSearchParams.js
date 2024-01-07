/**
 * This function is used to get the search parameters from a URL.
 * It first checks if a specific parameter or URL is provided. If not, it uses the current window location.
 * It then uses a regular expression to match and extract all the search parameters from the URL.
 * If a specific parameter is provided, it returns the value of that parameter. If the parameter does not exist, it returns null.
 * If no specific parameter is provided, it returns an object with all the search parameters.
 *
 * @module
 * @param {string} [param=false] - The specific search parameter to get. If not provided, all search parameters are returned.
 * @param {string} [url=false] - The URL to get the search parameters from. If not provided, the current window location is used.
 *
 * @returns {(string|Object|null)} - The value of the specific search parameter, an object with all the search parameters, or null if the specific search parameter does not exist.
 */
import debugLog from './_debugLog'

module.exports = (param = false, url = false) => {

    // If no URL is provided, use the current window location.
    url = url ? url : window.location.href

    // Log the operation.
    debugLog(`getSearchParams: "${param}" from [${url}]`)

    // Initialize an empty object to store the search parameters.
    const vars = {}

    // Use a regular expression to match and extract all the search parameters from the URL.
    // Replace the hash part of the URL with an empty string.
    // For each match, add the search parameter and its value to the vars object.
    url.replace(location.hash, '').replace(/[?&]+([^=&]+)=?([^&]*)?/gi, (m, key, value) => {
        vars[key] = value !== void 0 ? value : ''
    })

    // If a specific parameter is provided...
    if (param) {
        // If the parameter exists, return its value.
        if (vars[param]) {
            return vars[param]
        } else {
            // If the parameter does not exist, return null.
            return null
        }
    }

    // If no specific parameter is provided, return the vars object with all the search parameters.
    return vars

}
