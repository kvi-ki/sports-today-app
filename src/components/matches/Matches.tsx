import Date from '../date/Date';
import { Data } from '../data/Data';
import { getMatches } from '../../api/sports';
import Match, { MatchProps } from '../match/Match';

export default async function Matches() {
  const matchesData: Data[] = await getMatches();

  const showMatchesData = () => {
    if (Array.isArray(matchesData)) {
      return (matchesData as Data[]).map((matchesData: Data, index: number) => {
        return (
          <li key={index} className="flex flex-col items-center">
            <Date day={matchesData.day} />
            <ul className="md:flex flex-wrap justify-center">
              {getMatchesList(matchesData.matches)}
            </ul>
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
