import '../../index.css';
import Time from '../time/Time';
import AwayTeam from '../team/AwayTeam';
import HomeTeam from '../team/HomeTeam';
import Channels from '../channels/Channels';
import { ChannelProps } from '../channels/Channel';

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
    <li className="m-3.5 pb-2 pl-2 pr-2 w-80 rounded-sm shadow-2xl bg-gray grid grid-flow-row grid-cols-3 auto-rows-min gap-1 place-items-center">
      <Time startAt={match.startAt} />
      <HomeTeam teamName={match.homeTeam} teamLogo={match.homeTeamLogo} />
      <img
        src="./src/assets/dash.png"
        className="col-span-1 pt-4.5 w-4/12 opacity-60"
      />
      <AwayTeam teamName={match.awayTeam} teamLogo={match.awayTeamLogo} />
      <Channels channels={match.channels} />
    </li>
  );
}

// 191,103,77,75
