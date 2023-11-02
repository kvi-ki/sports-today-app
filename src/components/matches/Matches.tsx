import { getMatches } from '../../api/sports';
import { useQuery } from '@tanstack/react-query';

type Date = {
  matches: MatchProps[];
};

type MatchProps = {
  homeTeam: string;
  homeTeamLogo: string;
  awayTeam: string;
  awayTeamLogo: string;
};

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

  const matches: MatchProps[] = data
    .map((day: Date) => {
      return day.matches;
    })
    .flat();

  const matchesList = () => {
    if (Array.isArray(matches)) {
      return (matches as MatchProps[]).map(
        (match: MatchProps, index: number) => {
          return <li key={index}>{match.homeTeam}</li>;
        }
      );
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
