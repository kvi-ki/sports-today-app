type DateProps = {
  day: string;
};

export default function Date(date: DateProps) {
  return (
    <p
      data-testid="date"
      className="text-center bg-gray text-white h-12 pt-2.5 text-date"
    >
      {date.day}
    </p>
  );
}
