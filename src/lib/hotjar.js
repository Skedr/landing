const delay = function (ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
const loadHelpScout = async () => {
  if (import.meta.env.SSR) return

  await delay(5000)

  !(function (e, t, n) {
    function a() {
      var e = t.getElementsByTagName("script")[0],
        n = t.createElement("script")
      ;(n.type = "text/javascript"),
        (n.async = !0),
        (n.src = "https://beacon-v2.helpscout.net"),
        e.parentNode.insertBefore(n, e)
    }
    if (
      ((e.Beacon = n =
        function (t, n, a) {
          e.Beacon.readyQueue.push({ method: t, options: n, data: a })
        }),
      (n.readyQueue = []),
      "complete" === t.readyState)
    )
      return a()
    e.attachEvent ? e.attachEvent("onload", a) : e.addEventListener("load", a, !1)
  })(window, document, window.Beacon || function () {})
  window.Beacon("init", "9d640825-f226-46b1-9a92-dbed14392554")
}

export default loadHelpScout
