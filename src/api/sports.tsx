export async function getData() {
  try {
    const url = process.env.NEXT_PUBLIC_API_URL + '/api/matches';
    const response: Response = await fetch(url, {
      next: { revalidate: 60 }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    return response.json();
  } catch (error) {
    console.error('Failed to fetch: ', error);
  }
}
