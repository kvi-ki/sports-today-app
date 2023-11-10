export type ChannelProps = {
  name: string;
  paid: boolean;
};

export default function Channel(channel: ChannelProps) {
  const setChannelStyle = () => {
    const baseStyle =
      'rounded-lg text-center text-white text-channel w-28 p-1 rounded';

    if (channel.paid === false) {
      return `className=${baseStyle} + bg-green`;
    } else {
      return `className=${baseStyle} + bg-navy`;
    }
  };

  return (
    <li data-testid="channel" className={setChannelStyle()}>
      {channel.name}
    </li>
  );
}
