const { fetch: originalFetch } = window;
window.fetch = async (...args) => {
  const loader = document.createElement('div');
  loader.classList.add('loading');
  document.body.style.position = 'relative';
  document.body.appendChild(loader);
  try {
    const response = await originalFetch(...args);
    document.body.removeChild(loader);
    document.body.style.position = 'static';
    if (!response.ok) {
      throw response;
    }
    return response;
  } catch (e) {
    document.body.removeChild(loader);
    document.body.style.position = 'static';
    return new Response();
  }
};
export { };
