'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Script from 'next/script';
import { Navbar } from '@/components/wikiwiz/navbar';
import { FearGreedMeter } from '@/components/wikiwiz/fear-greed-meter';
import { MarketSymbolSwitcher, MarketSymbol } from '@/components/wikiwiz/market-symbol-switcher';
import { MLKVisualization } from '@/components/wikiwiz/mlk-visualization';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const probabilityConeData = [
  { period: 'Now', pessimistic: 100, expected: 100, optimistic: 100 },
  { period: '3M', pessimistic: 85, expected: 110, optimistic: 130 },
  { period: '6M', pessimistic: 75, expected: 125, optimistic: 165 },
  { period: '9M', pessimistic: 70, expected: 140, optimistic: 200 },
  { period: '12M', pessimistic: 65, expected: 155, optimistic: 240 },
];

const INITIAL_SYMBOL: MarketSymbol = {
  label: 'NIFTY',
  tradingview: 'NSE:NIFTY50',
  color: 'from-green-500 to-green-600',
  description: 'NIFTY 50 Index'
};

const SYMBOL_VOLATILITIES: Record<string, number> = {
  'GOLD': 0.15,
  'EURUSD': 0.12,
  'OIL': 0.25,
  'BTCUSD': 0.45,
  'NIFTY': 0.18,
  'NASDAQ': 0.20
};

export default function MLKLabPage() {
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [activeSymbol, setActiveSymbol] = useState<MarketSymbol>(INITIAL_SYMBOL);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Header */}
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-4 py-16 sm:px-6 lg:px-8 border-b border-border"
        >
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">
              MLK Prediction Lab
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Mathematical framework for understanding market regimes
            </p>
            <motion.button
              onClick={() => setShowAnalysis(!showAnalysis)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition"
            >
              {showAnalysis ? 'Hide Analysis' : 'Activate MLK Analysis'}
            </motion.button>
          </div>
        </motion.section>

        {/* Content */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-12">
            {/* Market Sentiment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-lg border border-border bg-card p-8"
            >
              <h2 className="text-2xl font-serif font-bold text-foreground mb-8 text-center">
                Current Market Sentiment
              </h2>
              <div className="flex justify-center">
                <FearGreedMeter value={62} size="md" />
              </div>
            </motion.div>

            {/* Analysis Section */}
            {showAnalysis && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-12"
              >
                {/* Market Symbol Switcher */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-lg border border-border bg-card p-8"
                >
                  <MarketSymbolSwitcher 
                    activeSymbol={activeSymbol}
                    onSymbolChange={setActiveSymbol}
                  />
                </motion.div>

                {/* MLK Visualization */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-lg border border-border bg-card p-8"
                >
                  <MLKVisualization 
                    symbol={activeSymbol.label}
                    volatility={SYMBOL_VOLATILITIES[activeSymbol.label] || 0.2}
                  />
                </motion.div>

                {/* Live Chart Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-lg border border-border bg-card p-8"
                >
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-8">Live Market Chart</h3>
                  <div id="tradingview_widget" style={{ height: '500px', width: '100%' }} />
                  <Script 
                    src="https://s3.tradingview.com/tv.js"
                    strategy="afterInteractive"
                    onLoad={() => {
                      if ((window as any).TradingView) {
                        new (window as any).TradingView.widget({
                          width: "100%",
                          height: 500,
                          symbol: activeSymbol.tradingview,
                          interval: "D",
                          timezone: "Asia/Kolkata",
                          theme: "dark",
                          style: "1",
                          locale: "en",
                          toolbar_bg: "#0A0A0F",
                          enable_publishing: false,
                          allow_symbol_change: true,
                          container_id: "tradingview_widget"
                        });
                      }
                    }}
                  />
                </motion.div>

                {/* Regime Detection */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-lg border border-border bg-card p-8"
                >
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-8">
                    Regime Detection
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Stable Regime */}
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="p-6 rounded-lg border-2 border-primary/30 bg-primary/5 space-y-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="relative w-3 h-3 rounded-full bg-primary">
                          <motion.div
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="absolute inset-0 rounded-full bg-primary opacity-75"
                          />
                        </div>
                        <h4 className="font-serif font-bold text-primary text-lg">Stable Regime</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Markets moving in predictable patterns. Lower volatility. Good for trend following.
                      </p>
                      <div className="text-xs text-primary font-mono">Volatility: Low • Confidence: High</div>
                    </motion.div>

                    {/* Transitional Regime */}
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="p-6 rounded-lg border-2 border-secondary/30 bg-secondary/5 space-y-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-secondary" />
                        <h4 className="font-serif font-bold text-secondary text-lg">Transitional</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Markets in flux. Increased volatility. Range-bound price action.
                      </p>
                      <div className="text-xs text-secondary font-mono">Volatility: Medium • Confidence: Medium</div>
                    </motion.div>

                    {/* Critical Regime */}
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="p-6 rounded-lg border-2 border-destructive/30 bg-destructive/5 space-y-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="relative w-3 h-3 rounded-full bg-destructive">
                          <motion.div
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="absolute inset-0 rounded-full bg-destructive opacity-75"
                          />
                        </div>
                        <h4 className="font-serif font-bold text-destructive text-lg">Critical</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Extreme volatility. Sharp reversals. Risk of gap moves.
                      </p>
                      <div className="text-xs text-destructive font-mono">Volatility: High • Confidence: Low</div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Probability Cone */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="rounded-lg border border-border bg-card p-8"
                >
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-8">
                    Probability Cone (Confidence Bands)
                  </h3>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={probabilityConeData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.15 0 0)" />
                        <XAxis dataKey="period" stroke="oklch(0.6 0 0)" />
                        <YAxis stroke="oklch(0.6 0 0)" />
                        <Tooltip
                          contentStyle={{ backgroundColor: 'oklch(0.10 0 0)', border: '1px solid oklch(0.15 0 0)' }}
                        />
                        <Area
                          type="monotone"
                          dataKey="pessimistic"
                          fill="oklch(0.75 0.20 25)"
                          stroke="oklch(0.75 0.20 25)"
                          opacity={0.1}
                          name="Pessimistic"
                        />
                        <Area
                          type="monotone"
                          dataKey="expected"
                          fill="oklch(0.65 0.15 40)"
                          stroke="oklch(0.65 0.15 40)"
                          opacity={0.3}
                          name="Expected"
                        />
                        <Area
                          type="monotone"
                          dataKey="optimistic"
                          fill="oklch(0.70 0.15 120)"
                          stroke="oklch(0.70 0.15 120)"
                          opacity={0.1}
                          name="Optimistic"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    The cone widens over time, representing increasing uncertainty. This shows the range of possible outcomes.
                  </p>
                </motion.div>

                {/* Mathematical Framework */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="rounded-lg border border-border bg-card p-8"
                >
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-8">
                    Mathematical Framework
                  </h3>
                  
                  <div className="space-y-8">
                    {/* Volatility Calculation */}
                    <div className="p-6 rounded-lg bg-background/40 border border-border space-y-3">
                      <h4 className="font-serif font-bold text-primary">Volatility (σ)</h4>
                      <p className="font-mono text-sm text-muted-foreground break-all">
                        σ = √(Σ(Return_i - Mean_Return)² / n)
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Measures the dispersion of returns around the mean. Higher volatility = more unpredictable.
                      </p>
                    </div>

                    {/* Confidence Bands */}
                    <div className="p-6 rounded-lg bg-background/40 border border-border space-y-3">
                      <h4 className="font-serif font-bold text-primary">Confidence Bands</h4>
                      <p className="font-mono text-sm text-muted-foreground">
                        Upper Band = Expected ± (1.96 × σ × √t)
                      </p>
                      <p className="font-mono text-sm text-muted-foreground">
                        Lower Band = Expected - (1.96 × σ × √t)
                      </p>
                      <p className="text-sm text-muted-foreground">
                        1.96σ represents 95% confidence interval from statistics (normal distribution).
                      </p>
                    </div>

                    {/* Regime Identification */}
                    <div className="p-6 rounded-lg bg-background/40 border border-border space-y-3">
                      <h4 className="font-serif font-bold text-primary">Regime Identification</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• <span className="text-primary">Stable</span>: σ &lt; 1%, tight patterns</li>
                        <li>• <span className="text-secondary">Transitional</span>: 1% ≤ σ ≤ 2%, random walk behavior</li>
                        <li>• <span className="text-destructive">Critical</span>: σ &gt; 2%, high uncertainty</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                {/* Trading Application */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="rounded-lg border border-accent/30 bg-accent/5 p-8"
                >
                  <h3 className="text-2xl font-serif font-bold text-accent mb-6">
                    How to Use This Framework
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-bold text-foreground">In Stable Regime</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>✓ Use trend-following strategies</li>
                        <li>✓ Place tighter stop losses</li>
                        <li>✓ Higher position sizing is acceptable</li>
                        <li>✓ Support/resistance levels are reliable</li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-bold text-foreground">In Critical Regime</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>✗ Avoid tight stop losses (whipsaws)</li>
                        <li>✗ Reduce position sizes significantly</li>
                        <li>✗ Use wider bands for entries/exits</li>
                        <li>✗ Consider sitting on the sidelines</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* Market Chart - TradingView Widget */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-lg border border-border bg-card p-6 space-y-4"
            >
              <h3 className="text-2xl font-serif font-bold text-foreground">Live Market Chart</h3>
              <div className="w-full rounded-lg overflow-hidden bg-background/50">
                <div id="tradingview_mlk_widget" style={{ height: '500px', width: '100%' }} />
                <Script 
                  src="https://s3.tradingview.com/tv.js"
                  strategy="afterInteractive"
                  onLoad={() => {
                    if ((window as any).TradingView) {
                      new (window as any).TradingView.widget({
                        width: "100%",
                        height: 500,
                        symbol: "NSE:NIFTY50",
                        interval: "D",
                        timezone: "Asia/Kolkata",
                        theme: "dark",
                        style: "1",
                        locale: "en",
                        toolbar_bg: "#0A0A0F",
                        enable_publishing: false,
                        allow_symbol_change: true,
                        container_id: "tradingview_mlk_widget"
                      });
                    }
                  }}
                />
              </div>
            </motion.div>

            {/* Disclaimer */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="rounded-lg border-2 border-destructive/30 bg-destructive/5 p-6"
            >
              <h3 className="font-serif font-bold text-destructive mb-2">⚠️ Important Disclaimer</h3>
              <p className="text-sm text-muted-foreground">
                This is an educational framework for understanding market behavior. It is NOT a prediction system, 
                trading signal, or financial advice. Past patterns do not guarantee future results. Always conduct 
                your own research and consult with financial professionals before making investment decisions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border px-4 py-12 sm:px-6 lg:px-8 bg-card/30">
          <div className="max-w-7xl mx-auto text-center text-muted-foreground">
            <p>MLK Lab - Mathematical Learning Kit for Market Analysis</p>
          </div>
        </footer>
      </main>
    </>
  );
}
