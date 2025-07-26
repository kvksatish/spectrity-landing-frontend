"use client";

import { useState, useEffect } from 'react';

export function useProgressiveLoading() {
  const [loadingStage, setLoadingStage] = useState(0);
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    // Stage 0: Initial loading screen (3 seconds)
    const stage1Timer = setTimeout(() => {
      setLoadingStage(1);
    }, 3000);

    // Stage 1: Load hero and first section (1 second)
    const stage2Timer = setTimeout(() => {
      setLoadingStage(2);
    }, 4000);

    // Stage 2: Load remaining sections progressively (every 500ms)
    const stage3Timer = setTimeout(() => {
      setLoadingStage(3);
    }, 4500);

    const stage4Timer = setTimeout(() => {
      setLoadingStage(4);
    }, 5000);

    const stage5Timer = setTimeout(() => {
      setLoadingStage(5);
      setIsInitialLoading(false);
    }, 5500);

    return () => {
      clearTimeout(stage1Timer);
      clearTimeout(stage2Timer);
      clearTimeout(stage3Timer);
      clearTimeout(stage4Timer);
      clearTimeout(stage5Timer);
    };
  }, []);

  return {
    loadingStage,
    isInitialLoading,
    shouldLoadHero: loadingStage >= 1,
    shouldLoadSpectraScan: loadingStage >= 1,
    shouldLoadEvalStack: loadingStage >= 2,
    shouldLoadMarketInsight: loadingStage >= 3,
    shouldLoadTranslational: loadingStage >= 4,
    shouldLoadContact: loadingStage >= 5,
  };
}