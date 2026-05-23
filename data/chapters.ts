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
      transliteration: 'Arjun! Money is neither good nor bad, it is a tool like any other.',
      meaning: 'Understanding that wealth is neutral; its moral character comes from how we use it.',
      tradingApplication: 'Money should be viewed as a tool for long-term wealth creation, not as an end in itself.',
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
