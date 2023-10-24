import Match, { MatchProps } from '../match/Match';
import { useMatches } from '../../api/sports';

function Matches() {
  const matches = useMatches();

  const matchesList = () => {
    if (Array.isArray(matches)) {
      return (matches as MatchProps[]).map(
        (match: MatchProps, index: number) => {
          return <Match key={index} {...match} />;
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
