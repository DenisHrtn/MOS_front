const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const IS_PROD_PING = process.env.REACT_APP_IS_PROD_PING === "true";

const pingBackend = () => {
  if (!IS_PROD_PING) {
    console.log("🔕 Skip ping (not production)");
    return;
  }

  fetch(`${BACKEND_URL}/ping/`)
    .then((res) => console.log("✅ Ping OK", res.status))
    .catch((err) => console.warn("❌ Ping failed", err));
};

export default pingBackend;
