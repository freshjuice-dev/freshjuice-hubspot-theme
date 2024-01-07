import debugLog from "../_debugLog";
import loadScript from "../_loadScript";
import getSearchParams from "../_getSearchParams";
export default () => {
  return {

    debugLog: (...args) => debugLog(...args),

    _GET: (param = false, url = false) => getSearchParams(param, url),

    loadScript: (src, loading = "defer", callback) => loadScript(src, loading, callback),

    scrollToTop: () => { window.scrollTo({ top: 0, behavior: 'smooth' }) },

    init() {
      debugLog("AlpineJS DOM init");
    },

  };
};
