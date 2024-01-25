import Time from '../time/Time';
import Channels from '../channels/Channels';
import { ChannelProps } from '../channels/Channel';
import HomeTeam from '../team/HomeTeam';
import AwayTeam from '../team/AwayTeam';

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
    <li className="m-3.5 pt-2 w-11/12 rounded-md bg-gray grid grid-flow-row grid-cols-5 auto-rows-min gap-1 place-items-center md:w-4/5 rounded-lg xl:w-2/5">
      <HomeTeam
        teamName={match.homeTeam}
        teamLogo={match.homeTeamLogo}
        data-testid="homeTeam"
      />
      <Time startAt={match.startAt} />
      <AwayTeam
        teamName={match.awayTeam}
        teamLogo={match.awayTeamLogo}
        data-testid="awayTeam"
      />
      <Channels channels={match.channels} />
    </li>
  );
}
