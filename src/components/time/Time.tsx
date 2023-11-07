type TimeProps = {
  startAt: string;
};

export default function Time(time: TimeProps) {
  const timeFormated = () => {
    return time.startAt.slice(11, 16);
  };

  return <div className="text-red text-center font-bold">{timeFormated()}</div>;
}
