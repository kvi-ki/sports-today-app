export type ChannelProps = {
  name: string;
  paid: boolean;
};

export default function Channel(channel: ChannelProps) {
  const classChoose = () => {
    if (channel.paid === false) {
      return 'className=rounded-lg text-center text-white text-channel w-28 p-1 rounded bg-green';
    } else {
      return 'className=rounded-lg text-center text-white text-channel w-28 p-1 rounded bg-navy';
    }
  };

  return (
    <li data-testid="channel" className={classChoose()}>
      {channel.name}
    </li>
  );
}
