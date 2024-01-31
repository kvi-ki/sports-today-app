'use client';

import { Suspense } from 'react';
import { useHydration } from '../../hooks/useHydration';

type TimeProps = {
  startAt: string;
};

export default function Time(time: TimeProps) {
  const hydrated = useHydration();

  return (
    <div className="col-span-1 row-span-2 place-self-center text-orange p-1.5 rounded-md font-bold text-time lg:text-timeLg">
      <Suspense key={hydrated ? 'local' : 'utc'}>
        <time dateTime={time.startAt}>
          {new Date(time.startAt).toLocaleTimeString().slice(0, 5)}
          {hydrated ? '' : ' (UTC)'}
        </time>
      </Suspense>
    </div>
  );
}
