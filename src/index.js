;(() => {
  if (INSTALL_OPTIONS.account === undefined) {
    return
  }
  const clientID = INSTALL_OPTIONS.account.userId
  const d = document

  const w = window
  w.MgSensorData = w.MgSensorData || []
  w.MgSensorData.push({
    cid: clientID,
    lng: "us",
    nosafari: true,
    project: "a.mgid.com",
  })
  const l = "a.mgid.com"
  const n = d.getElementsByTagName("script")[0]
  const s = d.createElement("script")
  s.type = "text/javascript"
  s.async = true
  const dt = !Date.now ? new Date().valueOf() : Date.now()
  s.src = `//${l}/mgsensor.js?d=${dt}`
  n.parentNode.insertBefore(s, n)
})()
