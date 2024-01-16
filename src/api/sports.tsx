export async function getMatches() {
  const url = process.env.API_URL + '/api/matches';
  const response: Response = await fetch(url, {
    next: { revalidate: 3600 }
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
}
