export function logEvent(level, message, meta = {}) {
  const payload = {
    level,
    message,
    meta,
    timestamp: new Date().toISOString()
  };

  fetch("https://your-logging-endpoint.com/logs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  }).catch(err => console.error("Log send failed", err));
}
