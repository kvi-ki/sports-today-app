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
    <li className="m-3.5 p-2 w-11/12 rounded-md bg-gray grid grid-flow-col grid-cols-[11rem_3rem_6rem] grid-rows-2 items-center gap-2 place-content-center md:w-6/12">
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
