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
    <li className="m-3.5 pt-2 w-11/12 rounded-md bg-gray grid grid-flow-col grid-cols-4 grid-rows-2 gap-1 place-items-center md:w-4/5 rounded-lg xl:w-2/5">
      <Team
        teamName={match.homeTeam}
        teamLogo={match.homeTeamLogo}
        data-testid="homeTeam"
      />
      <Team
        teamName={match.awayTeam}
        teamLogo={match.awayTeamLogo}
        data-testid="awayTeam"
      />
      <Time startAt={match.startAt} />
      <Channels channels={match.channels} />
    </li>
  );
}
