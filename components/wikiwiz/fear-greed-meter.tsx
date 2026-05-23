'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface FearGreedMeterProps {
  value?: number;
  size?: 'sm' | 'md' | 'lg';
}

export function FearGreedMeter({ value = 67, size = 'md' } : FearGreedMeterProps) {
  const [displayValue, setDisplayValue] = useState(value);
  const radius = size === 'sm' ? 60 : size === 'md' ? 90 : 120;
  const strokeWidth = 8;

  useEffect(() => {
    setDisplayValue(value);
  }, [value]);

  // Determine color based on value
  const getColor = (val: number) => {
    if (val < 25) return '#FF4757'; // Extreme Fear - Red
    if (val < 45) return '#FFA502'; // Fear - Orange
    if (val < 55) return '#FFD700'; // Neutral - Yellow
    if (val < 75) return '#90EE90'; // Greed - Light Green
    return '#00C251'; // Extreme Greed - Green
  };

  // Determine label based on value
  const getLabel = (val: number) => {
    if (val < 25) return 'Extreme Fear';
    if (val < 45) return 'Fear';
    if (val < 55) return 'Neutral';
    if (val < 75) return 'Greed';
    return 'Extreme Greed';
  };

  const color = getColor(displayValue);
  const label = getLabel(displayValue);
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (displayValue / 100) * circumference;
  const angle = (displayValue / 100) * 180 - 90; // Convert to degrees for needle

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative" style={{ width: radius * 2 + 40, height: radius + 80 }}>
        <svg
          width={radius * 2 + 40}
          height={radius + 80}
          className="drop-shadow-lg"
        >
          {/* Gauge background */}
          <circle
            cx={radius + 20}
            cy={radius + 20}
            r={radius}
            fill="none"
            stroke="oklch(0.15 0 0)"
            strokeWidth={strokeWidth}
          />

          {/* Gauge progress */}
          <motion.circle
            cx={radius + 20}
            cy={radius + 20}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            strokeLinecap="round"
            animate={{ strokeDashoffset }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{ transformOrigin: `${radius + 20}px ${radius + 20}px` }}
            transform="rotate(-90deg)"
          />

          {/* Needle */}
          <motion.line
            x1={radius + 20}
            y1={radius + 20}
            x2={radius + 20 + radius * 0.7 * Math.cos((angle * Math.PI) / 180)}
            y2={radius + 20 + radius * 0.7 * Math.sin((angle * Math.PI) / 180)}
            stroke={color}
            strokeWidth={3}
            strokeLinecap="round"
            animate={{ rotate: angle }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{ transformOrigin: `${radius + 20}px ${radius + 20}px` }}
          />

          {/* Center dot */}
          <circle
            cx={radius + 20}
            cy={radius + 20}
            r={6}
            fill={color}
          />

          {/* Labels around gauge */}
          <text x={20} y={35} fill="oklch(0.6 0 0)" fontSize="12" textAnchor="start">
            0
          </text>
          <text x={radius * 2 + 20} y={35} fill="oklch(0.6 0 0)" fontSize="12" textAnchor="end">
            100
          </text>
        </svg>
      </div>

      {/* Display Value and Label */}
      <motion.div className="text-center" animate={{ scale: [1, 1.05, 1] }} transition={{ delay: 0.3 }}>
        <div className="text-4xl font-serif font-bold text-primary">{displayValue}</div>
        <div className="text-lg font-medium" style={{ color }}>{label}</div>
        <p className="text-sm text-muted-foreground mt-2">Market Sentiment Index</p>
      </motion.div>
    </div>
  );
}
