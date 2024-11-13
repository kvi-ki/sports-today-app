
import Date from '../date/Date';
import { Data } from '../data/Data';
import Match, { MatchProps } from '../match/Match';
import { useEffect, useState } from 'react';
import { getData } from '@/api/sports';

export default function Matches() {
  const [matches, setMatches] = useState();

  useEffect(() => {
    async function getMatches() {
      const data = await getData();

      setMatches(data);
    }

    getMatches();
  }, []);

  const showMatchesData = () => {
    if (Array.isArray(matches)) {
      return (matches as Data[]).map((matchesData: Data, index: number) => {
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
