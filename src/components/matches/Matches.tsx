import { Data } from '../data/Data';
import Match, { MatchProps } from '../match/Match';
import { getMatches } from '../../api/sports';
import { useQuery } from '@tanstack/react-query';

function Matches() {
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
            <p data-testid="day">{matchesData.day}</p>
            <ul>
              {matchesData.matches.map((match: MatchProps, index: number) => {
                return <Match key={index} {...match} />;
              })}
            </ul>
          </li>
        );
      });
    }
  };

  return (
    <div>
      <h3 className="text-center bg-gray text-white h-12 pt-2.5 font-medium">
        Hoy - Jueves, 5 de Octubre
      </h3>
      <ul>{matchesList()}</ul>
    </div>
  );
}

export default Matches;
