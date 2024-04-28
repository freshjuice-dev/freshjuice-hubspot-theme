import debugLog from "../_debugLog";
import loadScript from "../_loadScript";
import loadStylesheet from "../_loadStylesheet";
import getSearchParams from "../_getSearchParams";
export default () => {
  return {

    debugLog: (...args) => debugLog(...args),

    _GET: (param = false, url = false) => getSearchParams(param, url),

    loadScript: (src, loading = "defer", callback, callbackForced) => loadScript(src, loading, callback, callbackForced),

    loadStylesheet: (src, media, type) => loadStylesheet(src, media, type),

    scrollToTop: () => { window.scrollTo({ top: 0, behavior: 'smooth' }) },

    init() {
      debugLog("AlpineJS DOM init");
    },

  };
};
