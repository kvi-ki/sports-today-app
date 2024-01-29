export type ChannelProps = {
  name: string;
  paid: boolean;
};

export default function Channel(channel: ChannelProps) {
  const baseStyle: string =
    'border-b text-navy text-channel p-1 mb-1 mr-1 md:text-channelMd';

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
