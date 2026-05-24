'use client';

import { motion } from 'framer-motion';
import { Calendar, TrendingUp } from 'lucide-react';

interface Event {
  date: string;
  event: string;
  impact: 'High' | 'Medium' | 'Low';
  currency: string;
}

const economicEvents: Event[] = [
  { date: 'Jan 29, 2025', event: 'RBI MPC Decision', impact: 'High', currency: 'INR' },
  { date: 'Feb 5, 2025', event: 'US Jobless Claims', impact: 'High', currency: 'USD' },
  { date: 'Feb 12, 2025', event: 'US CPI (Core)', impact: 'High', currency: 'USD' },
  { date: 'Feb 14, 2025', event: 'India Retail Inflation', impact: 'Medium', currency: 'INR' },
  { date: 'Feb 19, 2025', event: 'ECB Interest Rate', impact: 'High', currency: 'EUR' },
  { date: 'Mar 5, 2025', event: 'US Nonfarm Payroll', impact: 'High', currency: 'USD' },
  { date: 'Mar 7, 2025', event: 'RBI Monetary Policy', impact: 'High', currency: 'INR' },
  { date: 'Mar 19, 2025', event: 'FOMC Decision', impact: 'High', currency: 'USD' },
  { date: 'Apr 2, 2025', event: 'India Budget Q4 GDP', impact: 'Medium', currency: 'INR' },
  { date: 'Apr 9, 2025', event: 'US CPI (Core)', impact: 'High', currency: 'USD' },
];

function getImpactColor(impact: string) {
  switch (impact) {
    case 'High':
      return 'border-l-red-500 bg-red-500/5 hover:bg-red-500/10';
    case 'Medium':
      return 'border-l-yellow-500 bg-yellow-500/5 hover:bg-yellow-500/10';
    case 'Low':
      return 'border-l-green-500 bg-green-500/5 hover:bg-green-500/10';
    default:
      return 'border-l-primary bg-primary/5';
  }
}

function getImpactBadge(impact: string) {
  const baseClasses = 'px-2 py-1 rounded text-xs font-medium';
  switch (impact) {
    case 'High':
      return `${baseClasses} bg-red-500/20 text-red-200 border border-red-500/30`;
    case 'Medium':
      return `${baseClasses} bg-yellow-500/20 text-yellow-200 border border-yellow-500/30`;
    case 'Low':
      return `${baseClasses} bg-green-500/20 text-green-200 border border-green-500/30`;
    default:
      return `${baseClasses} bg-primary/20 text-primary border border-primary/30`;
  }
}

export function EconomicCalendar() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-8 h-8 text-primary" />
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">Economic Calendar</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            Track crucial economic events that move markets. High-impact events can trigger significant volatility.
          </p>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-4 mb-8"
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <span className="text-sm text-muted-foreground">High Impact</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="text-sm text-muted-foreground">Medium Impact</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-sm text-muted-foreground">Low Impact</span>
          </div>
        </motion.div>

        {/* Events Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-3"
        >
          {economicEvents.map((event, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 rounded-lg border-l-4 transition-all duration-200 ${getImpactColor(event.impact)}`}
            >
              <div className="flex items-start gap-4 flex-1">
                <div className="mt-1">
                  <Calendar className="w-5 h-5 text-primary opacity-70" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-mono">{event.date}</p>
                  <p className="text-lg font-medium text-foreground mt-1">{event.event}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:justify-end">
                <div className={getImpactBadge(event.impact)}>
                  {event.impact}
                </div>
                <span className="px-3 py-1 rounded bg-card border border-border text-sm font-medium text-primary">
                  {event.currency}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 p-6 rounded-lg bg-card border border-border"
        >
          <div className="flex items-start gap-3">
            <TrendingUp className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-foreground mb-2">Trading During Events</h3>
              <p className="text-sm text-muted-foreground">
                High-impact events can cause price volatility and wider spreads. Consider reducing position sizes or tightening stop losses during major data releases.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
