"use client";

import { useLazyComponent } from '@/hooks/useIntersectionObserver';
import { ComponentType, ReactElement } from 'react';

interface LazySectionProps {
  children: ReactElement;
  fallback: ReactElement;
  className?: string;
}

export default function LazySection({ children, fallback, className = "" }: LazySectionProps) {
  const { ref, shouldLoad } = useLazyComponent();

  return (
    <div ref={ref} className={className}>
      {shouldLoad ? children : fallback}
    </div>
  );
}