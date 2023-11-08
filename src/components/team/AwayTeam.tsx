import { TeamProps } from './Team';

function AwayTeam(team: TeamProps) {
  return (
    <div className="flex justify-evenly">
      <h2 className="text-gray text-team pt-3.5">{team.teamName}</h2>
      <img src={team.teamLogo} alt="team logo" />
    </div>
  );
}

export default AwayTeam;
