type DateProps = {
  day: string;
};

export default function DateMatch(date: DateProps) {
  const todayJson: string = new Date().toJSON();
  const today: string = todayJson.slice(0, 10);

  const parsedDate: Date = new Date(Date.parse(date.day));
  const formatedDate: string = parsedDate.toLocaleDateString('es-es', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });
  const firstLetterIsCapital: string = formatedDate.charAt(0).toUpperCase();
  const beautifulDate: string = firstLetterIsCapital + formatedDate.slice(1);

  return (
    <p
      data-testid="date"
      className="text-center text-navy font-bold pt-2.5 text-date lg:text-dateLg pt-4 pb-2"
    >
      {date.day === today ? 'Hoy' : beautifulDate}
    </p>
  );
}
