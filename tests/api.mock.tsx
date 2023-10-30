import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import responseContent from './response.json' assert { type: 'json' };

export type Date = {
  matches: MatchProps[];
};

export type MatchProps = {
  homeTeam: string;
  homeTeamLogo: string;
  awayTeam: string;
  awayTeamLogo: string;
};

const mock = new MockAdapter(axios);

mock.onGet('/matches').reply(200, { data: responseContent });

export async function getMatchesMock() {
  const matches = axios.get('/matches').then(function (response) {
    return response.data;
  });

  return matches;
}

export const useMatches = () => {
  const { data } = useQuery({
    queryKey: ['matches'],
    queryFn: getMatchesMock
  });

  if (data) {
    const matchesList: MatchProps[] = data
      .map((day: Date) => {
        return day.matches;
      })
      .flat();

    return matchesList;
  }
};
