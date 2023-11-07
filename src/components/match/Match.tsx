import '../../index.css';
import AwayTeam from '../team/AwayTeam';
import HomeTeam from '../team/HomeTeam';
import Time from '../time/Time';

export type MatchProps = {
  startAt: string;
  homeTeam: string;
  homeTeamLogo: string;
  awayTeam: string;
  awayTeamLogo: string;
};

function Match(match: MatchProps) {
  return (
    <div>
      <li className="m-4 flex justify-between">
        <HomeTeam teamName={match.homeTeam} teamLogo={match.homeTeamLogo} />
        <AwayTeam teamName={match.awayTeam} teamLogo={match.awayTeamLogo} />
      </li>
      <Time startAt={match.startAt} />
    </div>
  );
}

export default Match;
