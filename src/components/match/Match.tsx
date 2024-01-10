import Time from '../time/Time';
import Channels from '../channels/Channels';
import { ChannelProps } from '../channels/Channel';
import Team from '../team/Team';

export type MatchProps = {
  startAt: string;
  homeTeam: string;
  homeTeamLogo: string;
  awayTeam: string;
  awayTeamLogo: string;
  channels: ChannelProps[];
};

export default function Match(match: MatchProps) {
  return (
    <li className="m-3.5 pt-3 w-80 rounded-sm shadow-2xl bg-gray grid grid-flow-row grid-cols-3 auto-rows-min gap-1 place-items-center md:w-85">
      <Team
        teamName={match.homeTeam}
        teamLogo={match.homeTeamLogo}
        data-testid="homeTeam"
      />
      <Time startAt={match.startAt} />
      <Team
        teamName={match.awayTeam}
        teamLogo={match.awayTeamLogo}
        data-testid="awayTeam"
      />
      <Channels channels={match.channels} />
    </li>
  );
}
