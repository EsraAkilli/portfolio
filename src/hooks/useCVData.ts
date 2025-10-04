import { useState, useEffect } from 'react';
import { CVData } from '../types';
import { cvData as staticCVData } from '../data/cvData';

export const useCVData = () => {
  const [cvData, setCvData] = useState<CVData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for better UX
    const timer = setTimeout(() => {
      setCvData(staticCVData);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return { cvData, loading, error: null };
};
