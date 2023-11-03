import { TeamProps } from './Team';

function HomeTeam(team: TeamProps) {
  return (
    <div>
      <h2 className="text-gray pt-3.5">{team.teamName}</h2>
    </div>
  );
}

export default HomeTeam;
