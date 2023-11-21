export type ChannelProps = {
  name: string;
  paid: boolean;
};

export default function Channel(channel: ChannelProps) {
  const setChannelStyle = () => {
    const baseStyle = 'border-solid border rounded text-navy text-channel p-1 mb-2 mr-2';

    if (channel.paid === false) {
      return `className=${baseStyle} border-orange`;
    } else {
      return `className=${baseStyle} border-navy`;
    }
  };

  return (
    <li data-testid="channel" className={setChannelStyle()}>
      {channel.name}
    </li>
  );
}
