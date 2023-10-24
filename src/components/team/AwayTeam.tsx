import { TeamProps } from './Team';

function AwayTeam(team: TeamProps) {
  return (
    <div className="flex justify-between">
      <h2 className="text-gray pt-3.5">{team.teamName}</h2>
      <img src={team.teamLogo} alt="team logo" />
    </div>
  );
}

export default AwayTeam;
