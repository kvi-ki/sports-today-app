export type ChannelProps = {
  name: string;
  paid: boolean;
};

export default function Channel(channel: ChannelProps) {
  if (channel.paid === false) {
    return (
      <li
        data-testid="channel"
        className="bg-green rounded-lg text-center text-white text-channel w-28 p-1"
      >
        {channel.name}
      </li>
    );
  } else {
    return (
      <li
        data-testid="channel"
        className="bg-navy rounded-lg text-center text-white text-channel w-28 p-1"
      >
        {channel.name}
      </li>
    );
  }
}
