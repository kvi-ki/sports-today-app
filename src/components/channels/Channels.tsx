import Channel, { ChannelProps } from './Channel';

export type ChannelsProps = {
  channels: ChannelProps[];
};

export default function Channels(channels: ChannelsProps) {
  const channelsList = () => {
    return channels.channels.map((channel: ChannelProps, index: number) => {
      return <Channel key={index} {...channel} />;
    });
  };

  return (
    <ul className="col-span-3 flex justify-evenly justify-items-center flex-wrap">
      {channelsList()}
    </ul>
  );
}
