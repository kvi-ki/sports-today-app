type TimeProps = {
  startAt: string;
};

export default function Time(time: TimeProps) {
  const timeFormated = () => {
    return time.startAt.slice(11, 16);
  };

  return (
    <div className="col-span-1 row-span-2 place-self-center text-orange p-1.5 rounded-md font-bold text-time">
      {timeFormated()}
    </div>
  );
}
