import Channel, { ChannelProps } from "./Channel";

type ChannelsProps = {
  channels: ChannelProps[];
};

export default function Channels(channels: ChannelsProps) {
  const channelsList = () => {
    return channels.channels.map((channel: ChannelProps) => {
      return <Channel {...channel} />;
    });
  };

  return channelsList();
}
