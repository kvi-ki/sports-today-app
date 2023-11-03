import { TeamProps } from './Team';

function HomeTeam(team: TeamProps) {
  return (
    <div>
      <h2>{team.teamName}</h2>
    </div>
  );
}

export default HomeTeam;