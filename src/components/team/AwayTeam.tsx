import { TeamProps } from './Team';

function AwayTeam(team: TeamProps) {
  return (
    <div>
      <h2 className="text-gray pt-3.5">{team.teamName}</h2>
    </div>
  );
}

export default AwayTeam;
