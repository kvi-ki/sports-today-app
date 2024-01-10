export type ChannelProps = {
  name: string;
  paid: boolean;
};

export default function Channel(channel: ChannelProps) {
  const baseStyle: string =
    'border-solid border rounded text-navy text-channel p-1 mb-2 mr-2 md:text-channelMd';

  return (
    <li
      data-testid="channel"
      className={
        channel.paid === false
          ? `${baseStyle} border-orange`
          : `${baseStyle} border-navy`
      }
    >
      {channel.name}
    </li>
  );
}
