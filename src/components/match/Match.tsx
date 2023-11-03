import '../../index.css';
import AwayTeam from '../team/AwayTeam';
import HomeTeam from '../team/HomeTeam';

export type MatchProps = {
  homeTeam: string;
  homeTeamLogo: string;
  awayTeam: string;
  awayTeamLogo: string;
};

function Match(match: MatchProps) {
  return (
    <li>
      <HomeTeam teamName={match.homeTeam} teamLogo={match.homeTeamLogo} />
      <AwayTeam teamName={match.awayTeam} teamLogo={match.awayTeamLogo} />
    </li>
  );
}

export default Match;
