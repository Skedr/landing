const loadHotjar = async () => {
  if (import.meta.env.SSR) return;

  const hotjarId = import.meta.env.VITE_HOTJAR_ID;

  if (!hotjarId) return;
  (function (h, o, t, j, a, r) {
    h.hj =
      h.hj ||
      function () {
        (h.hj.q = h.hj.q || []).push(arguments);
      };
    h._hjSettings = { hjid: hotjarId, hjsv: 6 };
    a = o.getElementsByTagName("head")[0];
    r = o.createElement("script");
    r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    console.log(r);
    a.appendChild(r);
  })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
};

export default loadHotjar;
