const API_URL = process.env.REACT_APP_BACKEND_URL;

export const request = async (endpoint, options = {}) => {
  const url = `${API_URL}${endpoint}`;
  console.log(url)

  const defaultHeaders = {
    'Content-Type': 'application/json',
  };

  const config = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };

  const response = await fetch(url, config);

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    throw new Error(errorBody.detail || 'API Error');
  }

  return await response.json();
};
