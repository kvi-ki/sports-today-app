import { TeamProps } from './Team';

function HomeTeam(team: TeamProps) {
  return (
    <div className="flex justify-between">
      <img src={team.teamLogo} alt="team logo" />
      <h2 className="text-gray pt-3.5">{team.teamName}</h2>
    </div>
  );
}

export default HomeTeam;