import { TeamProps } from './Team';

function HomeTeam(team: TeamProps) {
  return (
    <div className="flex justify-around">
      <img src={team.teamLogo} alt="team logo" />
      <h2 className="text-gray text-team text-center pt-3.5">
        {team.teamName}
      </h2>
    </div>
  );
}

export default HomeTeam;
