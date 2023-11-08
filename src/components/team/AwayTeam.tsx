import { TeamProps } from './Team';

function AwayTeam(team: TeamProps) {
  return (
    <div data-testId="awayTeam" className="flex justify-around">
      <h2 className="text-gray text-team text-center pt-3.5">
        {team.teamName}
      </h2>
      <img src={team.teamLogo} alt="team logo" />
    </div>
  );
}

export default AwayTeam;
