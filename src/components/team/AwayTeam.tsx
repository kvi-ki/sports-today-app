import { TeamProps } from './Team';

export default function AwayTeam(team: TeamProps) {
  return (
    <div
      data-testid="awayTeam"
      className="col-span-1 flex flex-col items-center"
    >
      <img src={team.teamLogo} className="w-7 h-7" alt="team logo" />
      <h2 className="text-navy text-team text-center">{team.teamName}</h2>
    </div>
  );
}
