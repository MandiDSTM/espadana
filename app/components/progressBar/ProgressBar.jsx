'use client';

import { Suspense } from 'react';
import ProgressBarInner from './ProgressBarInner';

export default function ProgressBar() {
  return (
    <Suspense fallback={null}>
      <ProgressBarInner />
    </Suspense>
  );
}