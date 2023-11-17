type DateProps = {
  day: string;
};

export default function Date(date: DateProps) {
  return (
    <p
      data-testid="date"
      className="text-center text-navy font-bold pt-2.5 text-date"
    >
      {date.day}
    </p>
  );
}
