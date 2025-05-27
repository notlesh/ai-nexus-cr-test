const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';

export async function fetchAPI(query: string, variables = {}) {
  const res = await fetch(`${STRAPI_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data;
}
