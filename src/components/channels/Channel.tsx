export type ChannelProps = {
    name: string;
}

export default function Channel(channel: ChannelProps) {
    return (
        <div data-testid='channel'>{channel.name}</div>
        );
}