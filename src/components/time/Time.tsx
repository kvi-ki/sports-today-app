type TimeProps = {
  startAt: string;
};

export default function Time(time: TimeProps) {
  const timeFormated = () => {
    return time.startAt.slice(11, 16);
  };

  return (
    <div className="col-span-3 text-lightgreen font-bold text-time mt-2">
      {timeFormated()}
    </div>
  );
}
