const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const pingBackend = () => {
  fetch(`${BACKEND_URL}/ping/`)
    .then((res) => console.log("Ping OK", res.status))
    .catch((err) => console.warn("Ping failed", err));
};

export default pingBackend;