import Date from '../date/Date';
import { Data } from '../data/Data';
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

  const showMatchesData = () => {
    if (Array.isArray(matchesData)) {
      return (matchesData as Data[]).map((matchesData: Data, index: number) => {
        return (
          <li key={index} className="flex flex-col items-center">
            <Date day={matchesData.day} />
            <ul>{getMatchesList(matchesData.matches)}</ul>
          </li>
        );
      });
    }
  };

  const getMatchesList = (matches: MatchProps[]) => {
    return matches.map((match: MatchProps, index: number) => {
      return <Match key={index} {...match} />;
    });
  };

  return <ul>{showMatchesData()}</ul>;
}
