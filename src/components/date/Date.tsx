type DateProps = {
  day: string;
};

export default function Date(date: DateProps) {
  return (
    <p
      data-testid="date"
      className="w-11/12 text-center text-navy font-bold h-12 pt-2.5 text-date"
    >
      {date.day}
    </p>
  );
}
