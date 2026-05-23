export interface Chapter {
  id: string;
  phaseId: string;
  number: number;
  title: string;
  script: string;
  gitaShloka: {
    sanskrit?: string;
    transliteration: string;
    meaning: string;
    tradingApplication: string;
  };
}

export const chapters: Chapter[] = [
  {
    id: 'ch-0-0',
    phaseId: 'phase-0',
    number: 0,
    title: 'What is Money?',
    script: `## What is Money?

Money is not just pieces of paper or digital numbers. It is a store of value, a medium of exchange, and a unit of measurement for economic transactions. Understanding what money truly is forms the foundation of financial literacy.

### The Three Functions of Money

**1. Medium of Exchange**
In ancient times, people bartered goods directly. But this had limitations. What if a farmer had rice but needed cloth? The tailor might not need rice at that moment. Money solved this problem by becoming an accepted medium that anyone would take.

**2. Store of Value**
You work hard and earn money today. You want to use that value tomorrow, next month, or next year. Money allows you to store your labor's value and access it whenever needed. This is unlike perishable goods that lose value over time.

**3. Unit of Account**
Imagine measuring distances without a standard unit. You couldn't compare prices or values easily. Money provides a standard unit (₹1 = 100 paise) that lets us measure the value of any good or service.

### The Real Cost: Inflation

Here's the problem every investor must understand: Money loses purchasing power over time. 

In 2000, ₹100 could buy you a decent meal. Today, that same ₹100 barely buys you a coffee. This is inflation—the general increase in prices of goods and services.

If you keep ₹10,00,000 under your mattress and don't invest it, in 10 years at 5% inflation, it will only have the purchasing power of about ₹6,14,000. You've lost ₹3,86,000 without any change in the number!

### Why This Matters for Investors

This is why leaving money in a savings account earning 3% when inflation is 5% actually makes you poorer. You're losing purchasing power every day.

The investor's challenge is simple: Invest your money in assets that grow faster than inflation. That's how you build real wealth.

### Key Takeaway

Money is a tool—neither good nor evil. How you use it determines your financial destiny. The first step is understanding that doing nothing with your money is the riskiest move of all.`,
    gitaShloka: {
      sanskrit: 'धनं धान्यमवासे या: सुखदुःखहेतु: सर्वे:।',
      transliteration: 'Dhanam dhanya mavashe ya: sukha dukkha hetuh sarve:',
      meaning: 'Understanding that wealth is neutral; its moral character comes from how we use it.',
      tradingApplication: 'Money should be viewed as a tool for long-term wealth creation, not as an end in itself.',
    },
  },
  {
    id: 'ch-3-0',
    phaseId: 'phase-3',
    number: 0,
    title: 'Market Cycles',
    script: `## Understanding Market Cycles

Markets don't move in straight lines. They move in cycles—up, down, sideways, and repeat. Understanding these cycles is crucial for investors who want to avoid panic selling at bottoms and euphoric buying at tops.

### The Four Phases of Market Cycles

**Phase 1: Accumulation**
The market hits bottom after a major crash. News is terrible, fear is high. Smart investors (institutions, sophisticated traders) start buying quietly. Retail investors? They're watching from the sidelines, waiting for "better prices."

**Phase 2: Rising Market**
Prices start climbing. News gradually improves. More people join the party. Media starts talking positively. FOMO (fear of missing out) kicks in. This is where most retail money enters.

**Phase 3: Distribution**
The market reaches euphoric heights. Everyone and their grandmother is investing. Taxi drivers are giving stock tips. You see promotions for "get rich quick" trading apps. Smart money is silently exiting. This phase can last months.

**Phase 4: Decline**
Reality hits. Bad news emerges. Prices fall sharply. Panic selling begins. The cycle repeats.

### Real Example: The Tech Bubble (1999-2000)

**1999:** Tech stocks are rising 50-100% per year. Everyone wants to invest in "Internet companies." Companies with no profits are valued at billions.

**2000-2001:** The bubble bursts. Tech stocks fall 70-80%. Nasdaq loses ₹3 trillion in value. Investors who bought at the peak suffer losses for 15+ years.

But investors who bought in the accumulation phase of 2001-2003? They became millionaires by 2010.

### How to Profit from Cycles

1. **Accumulate during crashes** - When everyone is fearful
2. **Hold during rising markets** - Don't try to time exits
3. **Reduce during euphoria** - Sell to peaks, not at peaks
4. **Wait through declines** - The next accumulation phase is forming

The key insight: The worst time to invest is when you most want to. The best time to invest is when you most fear. This is counter-intuitive, but that's why most investors fail.

### Key Takeaway

Market cycles are inevitable. Fortunes are made not by predicting cycles but by having the discipline to act against your emotions in each phase.`,
    gitaShloka: {
      sanskrit: 'मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदु:खदा:।',
      transliteration: 'Matrasparshaste Kaunteya Shitoshna Sukha Dukkha Dah',
      meaning: 'One must learn to endure the dualities of heat and cold, pleasure and pain without attachment.',
      tradingApplication: 'Market ups and downs are like seasons. Accept them without emotional attachment.',
    },
  },
  {
    id: 'ch-4-0',
    phaseId: 'phase-4',
    number: 0,
    title: 'Diversification Mastery',
    script: `## The Art of Diversification

"Don't put all eggs in one basket"—you've heard this a thousand times. But what does it really mean? And how do you actually do it?

Diversification is spreading risk. But not all diversification is equal. Spreading ₹100 across 100 bad stocks won't help. You need intelligent diversification.

### Types of Assets

**Equities (Stocks):** High growth potential, high volatility
**Bonds:** Lower returns, lower volatility, income generation
**Real Estate:** Steady income, capital appreciation, illiquidity
**Commodities:** Inflation hedge, independent from stocks
**Cash/FDs:** Safety, liquidity, inflation erosion

### The Correlation Puzzle

Two assets are correlated if they move together. If Stock A and Stock B always move together, they're perfectly correlated. Owning both is like owning one with double the money.

True diversification means owning assets that DON'T move together:
- Stocks and Bonds often move opposite (negative correlation)
- Gold and Equities are often uncorrelated
- Small-cap and Large-cap can move differently

### Sample Portfolio Allocation

**Conservative (60+ years old):** 30% Stocks, 50% Bonds, 10% Gold, 10% Cash

**Moderate (40-60 years):** 60% Stocks, 30% Bonds, 7% Gold, 3% Cash

**Aggressive (20-40 years):** 80% Stocks, 10% Bonds, 5% Gold, 5% Cash

### Diversification Within Stocks

Don't just own multiple stocks; own different types:
- **By size:** Large-cap (stable), Mid-cap (growth), Small-cap (high-growth, high-risk)
- **By sector:** Tech, Healthcare, Finance, Consumer, Industrials
- **By geography:** Domestic stocks, International stocks
- **By style:** Value stocks (cheap, stable), Growth stocks (expensive, high-growth)

### The Key Insight

Diversification doesn't maximize returns; it minimizes the risk of catastrophic loss. Your goal isn't to beat everyone else. Your goal is to build wealth steadily while sleeping well at night.

### Key Takeaway

Intelligent diversification is the closest thing to a "free lunch" in investing. It reduces risk without proportionally reducing returns.`,
    gitaShloka: {
      sanskrit: 'योगस्थ: कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय।',
      transliteration: 'Yogasthah Kuru Karmani Sangam Tyaktvaa Dhananjaya',
      meaning: 'Perform your duties without attachment, maintaining balance in all circumstances.',
      tradingApplication: 'Build a balanced portfolio and maintain it without emotional attachment to individual holdings.',
    },
  },
  {
    id: 'ch-5-0',
    phaseId: 'phase-5',
    number: 0,
    title: 'Technical Analysis Basics',
    script: `## Introduction to Technical Analysis

Technical analysis is the study of price and volume data to predict future price movements. It assumes that all available information is already reflected in price, and price movements follow patterns.

### Core Principle

If you can identify patterns that have repeated historically, you can anticipate future moves and position yourself accordingly.

### Main Chart Types

**Candlestick Charts:** Most popular. Shows Open, High, Low, Close for each period. Bullish (green) candles close higher than they opened. Bearish (red) candles close lower.

**Line Charts:** Simple, shows only closing price. Good for beginners.

**Bar Charts:** Similar to candlesticks but looks different. Less popular.

### Support and Resistance

**Support:** A price level where buyers step in and prevent further decline.

**Resistance:** A price level where sellers step in and prevent further rise.

Example: If a stock keeps bouncing up from ₹100 but keeps hitting ceiling at ₹110, then ₹100 is support and ₹110 is resistance.

### Moving Averages

A moving average is the average closing price of the last N days. It smooths out daily noise and shows the trend.

**20-day MA:** Short-term trend
**50-day MA:** Medium-term trend
**200-day MA:** Long-term trend

When price is above these moving averages, it's in an uptrend. When below, downtrend.

### Common Patterns

**Trending:** Markets moving consistently up (uptrend) or down (downtrend).

**Reversal patterns:** Suggest trend might reverse (Head and Shoulders, Double Top/Bottom).

**Continuation patterns:** Suggest trend will continue (Triangles, Flags).

### Important Caveat

Technical analysis works best in trending markets. In sideways markets, it gives false signals. It's a tool, not a magic formula. Combine it with fundamentals and risk management.

### Key Takeaway

Technical analysis helps you identify when to enter and exit positions. But it won't tell you which stocks to own long-term.`,
    gitaShloka: {
      sanskrit: 'दूरस्था: सूक्ष्मरूपा: अव्यक्तमव्यक्तसंज्ञिता:।',
      transliteration: 'Durasthah Sukshma Rupa Avyaktam Vyakta Samjnita',
      meaning: 'The subtle and invisible aspects are harder to perceive but more important than the obvious.',
      tradingApplication: 'Technical patterns are subtle indicators; combine them with other analysis for better decisions.',
    },
  },
  {
    id: 'ch-1-0',
    phaseId: 'phase-1',
    number: 0,
    title: 'The Power of Compounding',
    script: `## The Power of Compounding

Albert Einstein called compounding the eighth wonder of the world. If you understand only one concept about investing, let it be this one.

### What is Compounding?

Compounding is when your earnings generate their own earnings. It's the process of earning returns not just on your initial investment, but also on all the accumulated earnings from previous years.

### The Magic Formula

Let's say you invest ₹10,000 at 12% annual returns.

**Year 1:** ₹10,000 × 1.12 = ₹11,200
**Year 2:** ₹11,200 × 1.12 = ₹12,544
**Year 3:** ₹12,544 × 1.12 = ₹14,049

Notice something? By Year 3, you're earning returns on returns. That extra ₹49 didn't come from your initial investment—it came from compounding.

### The 70-Year Old vs The 25-Year Old

Let's compare two investors:

**Investor A (Age 25):** Invests ₹5,000 every month until age 60 (35 years). Total invested: ₹21,00,000

**Investor B (Age 45):** Invests ₹10,000 every month until age 60 (15 years). Total invested: ₹18,00,000

Assuming 12% annual returns, Investor A ends up with ₹3,50,00,000 while Investor B ends up with ₹54,00,000.

Investor A invested MORE money but because they started earlier, they EARNED WAY MORE from compounding. Time is more powerful than money!

### The Two Variables You Control

1. **How much to invest** - The amount matters, but
2. **How long to invest** - Time matters even more

A small amount invested early beats a large amount invested late. This is why starting your investment journey at 25 is infinitely better than starting at 45.

### The Three Enemies of Compounding

1. **Withdrawals** - Taking money out breaks the compounding chain
2. **Inflation** - Erodes the real purchasing power of your returns
3. **Taxes** - Reduce the amount available for reinvestment

### Key Takeaway

Start investing today, even if it's a small amount. The earlier you start, the more time your money has to compound. This single decision can make the difference between a comfortable retirement and a struggling one.`,
    gitaShloka: {
      transliteration: 'Consistency and patience are the hallmarks of a wise investor.',
      meaning: 'The importance of discipline and long-term thinking in wealth building.',
      tradingApplication: 'Regular, consistent investments over long periods create wealth through compounding, not through trying to time the market.',
    },
  },
  {
    id: 'ch-2-0',
    phaseId: 'phase-2',
    number: 0,
    title: 'Risk and Reward',
    script: `## Understanding Risk and Reward

One of the first laws of investing: higher returns come with higher risk. There is no free lunch in the market. Every rupee of additional return you seek must be paired with acceptance of additional risk.

### What is Risk?

Risk is the chance that your investment will lose value. But not all risks are the same.

**Market Risk:** The risk that the entire market goes down (stocks, bonds, commodities)

**Company Risk:** The risk that a specific company performs poorly due to bad management or industry disruption

**Liquidity Risk:** The risk that you can't sell your investment quickly without losing value

**Inflation Risk:** The risk that inflation eats into your returns

**Interest Rate Risk:** The risk that changing interest rates affect bond values

### The Risk-Return Spectrum

Think of investments on a spectrum:

**Lowest Risk:** Government Bonds (FDs, Government Securities) → Returns: 4-6%

**Low-Medium Risk:** Blue-chip stocks, ETFs → Returns: 10-15%

**Medium Risk:** Mid-cap stocks → Returns: 15-20%

**High Risk:** Small-cap stocks, speculative trading → Returns: 20%+ (or significant losses)

**Highest Risk:** Options, leveraged trading → Returns: Unlimited, but losses can exceed investment

Notice the pattern? As risk increases, potential returns increase. As risk decreases, returns decrease.

### Measuring Your Risk Tolerance

Risk tolerance is NOT how much risk you CAN take. It's how much risk you CAN HANDLE EMOTIONALLY.

Ask yourself:
- If your ₹10 lakh investment drops to ₹7 lakhs in 6 months, will you panic sell?
- Can you stay invested during a market crash for 5+ years?
- Do you need this money in the next 2 years?

Your answers determine your actual risk tolerance, not your age or income.

### The Risk-Reward Ratio

In trading, this is critical: For every ₹1 you risk, how much can you potentially gain?

A 1:2 risk-reward ratio means if you risk ₹100, you're trying to gain ₹200. This is a healthy ratio.

A 1:0.5 ratio means you risk ₹100 to gain ₹50. Even if you win 70% of the time, you'll still lose money!

### Key Takeaway

There's no such thing as risk-free returns. Accept the risk appropriate for your situation, diversify to reduce unnecessary risk, and measure your risk-reward ratios carefully.`,
    gitaShloka: {
      transliteration: 'A wise person knows the risk they are taking and acts accordingly.',
      meaning: 'Informed decision-making requires understanding the consequences of your actions.',
      tradingApplication: 'Successful investing requires conscious acceptance and management of risk, not reckless gambling.',
    },
  },
];
