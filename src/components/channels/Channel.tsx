export type ChannelProps = {
  name: string;
  paid: boolean;
};

export default function Channel(channel: ChannelProps) {
  const setChannelStyle = () => {
    const baseStyle =
      'rounded-lg border-solid border-2 text-channel p-1 rounded mb-2 mr-2';

    if (channel.paid === false) {
      return `className=${baseStyle} text-navy border-orange`;
    } else {
      return `className=${baseStyle} text-orange border-navy`;
    }
  };

  return (
    <li data-testid="channel" className={setChannelStyle()}>
      {channel.name}
    </li>
  );
}
