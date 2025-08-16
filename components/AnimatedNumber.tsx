import React, { useState, useEffect } from 'react';

interface AnimatedNumberProps {
  value: number;
  isCurrency?: boolean;
  className?: string;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value, isCurrency = false }) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    let startTime: number;
    const duration = 1500; // Animation duration in ms

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      const easedValue = value * (1 - Math.pow(1 - percentage, 3)); // Ease-out cubic
      setCurrentValue(easedValue);

      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCurrentValue(value);
      }
    };

    const frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [value]);

  const formatNumber = (num: number) => {
    if (isCurrency) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        notation: 'compact',
        maximumFractionDigits: 1
      }).format(num);
    }
    return new Intl.NumberFormat('en-US', {
        notation: 'compact',
        maximumFractionDigits: 1
    }).format(num);
  };

  return <span>{formatNumber(currentValue)}</span>;
};

export default AnimatedNumber;
