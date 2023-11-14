import { TeamProps } from './Team';

export default function HomeTeam(team: TeamProps) {
  return (
    <div
      data-testId="homeTeam"
      className="col-span-1 flex flex-col items-center"
    >
      <img src={team.teamLogo} className="w-8 h-8" alt="team logo" />
      <h2 className="text-brown text-team text-center">{team.teamName}</h2>
    </div>
  );
}
