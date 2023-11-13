import { Data } from '../data/Data';
import Date from '../date/Date';
import { getMatches } from '../../api/sports';
import { useQuery } from '@tanstack/react-query';
import Match, { MatchProps } from '../match/Match';

export default function Matches() {
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

  const matchesData: Data[] = data
    .map((data: Data) => {
      return data;
    })
    .flat();

  const matchesList = () => {
    if (Array.isArray(matchesData)) {
      return (matchesData as Data[]).map((matchesData: Data, index: number) => {
        return (
          <li key={index}>
            <Date day={matchesData.day} />
            <ul>{matches(matchesData.matches)}</ul>
          </li>
        );
      });
    }
  };

  const matches = (matches: MatchProps[]) => {
    return matches.map((match: MatchProps, index: number) => {
      return <Match key={index} {...match} />;
    });
  };

  return <ul>{matchesList()}</ul>;
}
