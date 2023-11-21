type DateProps = {
  day: string;
};

export default function DateMatch(date: DateProps) {
  const todayJson = new Date().toJSON();
  const today = todayJson.slice(0, 10);

  if (date.day === today) {
    return (
      <p
        data-testid="date"
        className="hurrey text-center text-navy font-bold pt-2.5 text-date"
      >
        Hoy
      </p>
    );
  } else {
    return (
      <p
        data-testid="date"
        className="text-center text-navy font-bold pt-2.5 text-date"
      >
        {date.day}
      </p>
    );
  }
}
