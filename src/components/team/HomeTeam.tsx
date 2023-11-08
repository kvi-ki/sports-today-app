import { TeamProps } from './Team';

function HomeTeam(team: TeamProps) {
  return (
    <div className="flex justify-evenly">
      <img src={team.teamLogo} alt="team logo" />
      <h2 className="text-gray text-team pt-3.5">{team.teamName}</h2>
    </div>
  );
}

export default HomeTeam;
