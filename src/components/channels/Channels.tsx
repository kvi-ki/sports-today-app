import { Channel } from "./Channel";

type ChannelsProps = {
  channels: Channel[];
};

export default function Channels(channels: ChannelsProps) {
  const channelsList = () => {
    return channels.channels.map((item: Channel) => {
      return <div data-testId='channel'>{item.name}</div>;
    });
  };

  return channelsList();
}
