export type ChannelProps = {
  name: string;
};

export default function Channel(channel: ChannelProps) {
  return (
    <li
      data-testid="channel"
      className="bg-navy rounded-lg text-center text-white text-channel w-28 p-1"
    >
      {channel.name}
    </li>
  );
}
