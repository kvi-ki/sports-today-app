export async function getMatches() {
  const response: Response = await fetch('https://deportes-hoy.herokuapp.com/api/matches', {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  };

  return response.json();
}
