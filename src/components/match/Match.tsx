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

function Match(match: MatchProps) {
  return (
    <li className="m-4 grid grid-rows-3 grid-cols-2 gap-2">
      <HomeTeam teamName={match.homeTeam} teamLogo={match.homeTeamLogo} />
      <AwayTeam teamName={match.awayTeam} teamLogo={match.awayTeamLogo} />
      <Time startAt={match.startAt} />
      <Channels channels={match.channels} />
    </li>
  );
}

export default Match;
