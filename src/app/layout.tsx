import type { Metadata } from 'next';
import './index.css';

export const metadata: Metadata = {
  title: 'Deportes Hoy',
  description:
    'Consulta los partidos de fútbol de hoy en televisión. Consulta horarios y canales dónde ver el futbol por la TV'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
