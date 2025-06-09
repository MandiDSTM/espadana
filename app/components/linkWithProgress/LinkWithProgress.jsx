'use client';

import Link from 'next/link';
import NProgress from 'nprogress';

export default function LinkWithProgress({ children, ...props }) {
  const handleClick = () => {
    NProgress.start();
  };

  return (
    <Link {...props} onClick={handleClick}>
      {children}
    </Link>
  );
}
