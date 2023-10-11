import axios from 'axios';

export async function getMatches() {
  const matches = await axios.get(
    'https://deportes-hoy.herokuapp.com/api/matches'
  );

  return matches;
}
