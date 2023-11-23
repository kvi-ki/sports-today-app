type DateProps = {
  day: string;
};

export default function DateMatch(date: DateProps) {
  const todayJson = new Date().toJSON();
  const today = todayJson.slice(0, 10);

  return (
    <p
      data-testid="date"
      className="text-center text-navy font-bold pt-2.5 text-date lg:text-dateLg pt-4 pb-2"
    >
      {date.day === today ? 'Hoy' : date.day}
    </p>
  );
}
