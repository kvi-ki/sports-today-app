import { TeamProps } from './Team';

function AwayTeam(team: TeamProps) {
  return (
    <div>
      <h2>{team.teamName}</h2>
    </div>
  );
}

export default AwayTeam;
