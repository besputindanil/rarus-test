const url = (resource) => `${process.env.VUE_APP_HOST}/${resource}`;

export function getResource(resource) {
  // eslint-disable-next-line no-console
  console.log('fetch(url(resource))', url(resource));
  return fetch(url(resource)).then(response => response.json())
}

export function postResource(resource, payload = {}) {
  return fetch(url(resource), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }).then(response => response.json())
}
