import axios from 'axios';
import { Date } from '../components/date/Date';
import { useQuery } from '@tanstack/react-query';
import { MatchProps } from '../components/match/Match';

export async function getMatches() {
  const matches = await axios.get(
    'https://deportes-hoy.herokuapp.com/api/matches'
  );

  return matches.data;
}

export const useMatches = () => {
  const { isFetching, isError, data, error } = useQuery({
    queryKey: ['matches'],
    queryFn: getMatches
  });

  if (isFetching) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const matchesList: MatchProps[] = data
    .map((day: Date) => {
      return day.matches;
    })
    .flat();

  return matchesList;
};
