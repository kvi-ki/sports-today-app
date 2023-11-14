export type ChannelProps = {
  name: string;
  paid: boolean;
};

export default function Channel(channel: ChannelProps) {
  const setChannelStyle = () => {
    const baseStyle = 'rounded-lg text-channel w-26 h-fit p-2 rounded m-1';

    if (channel.paid === false) {
      return `className=${baseStyle} + text-brown bg-green`;
    } else {
      return `className=${baseStyle} + text-green bg-brown`;
    }
  };

  return (
    <li data-testid="channel" className={setChannelStyle()}>
      {channel.name}
    </li>
  );
}
