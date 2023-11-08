export type ChannelProps = {
  name: string;
};

export default function Channel(channel: ChannelProps) {
  return (
    <div
      data-testid="channel"
      className="bg-green rounded-lg text-center text-gray text-channel w-28 p-1"
    >
      {channel.name}
    </div>
  );
}
