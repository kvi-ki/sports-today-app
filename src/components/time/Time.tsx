type TimeProps = {
  startAt: string;
};

export default function Time(time: TimeProps) {
  const timeFormated = () => {
    return time.startAt.slice(11, 16);
  };

  return (
    <div className="col-span-1 text-white bg-orange p-1.5 rounded-md font-bold text-time md:text-timeMd">
      {timeFormated()}
    </div>
  );
}
