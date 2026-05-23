'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/wikiwiz/navbar';
import { LessonRenderer } from '@/components/wikiwiz/lesson-renderer';
import { chapters } from '@/data/chapters';
import { phases } from '@/data/phases';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{
    phaseId: string;
    chapterId: string;
  }>;
}

export default async function ChapterPage({ params }: PageProps) {
  const { phaseId, chapterId } = await params;
  const chapter = chapters.find((c) => c.id === chapterId && c.phaseId === phaseId);
  const phase = phases.find((p) => p.id === phaseId);

  if (!chapter || !phase) {
    notFound();
  }

  // Get chapter index and neighbors
  const phaseChapters = chapters.filter((c) => c.phaseId === phaseId).sort((a, b) => a.number - b.number);
  const chapterIndex = phaseChapters.findIndex((c) => c.id === chapter.id);
  const prevChapter = chapterIndex > 0 ? phaseChapters[chapterIndex - 1] : null;
  const nextChapter = chapterIndex < phaseChapters.length - 1 ? phaseChapters[chapterIndex + 1] : null;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 px-4 py-8 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Left Sidebar - Chapter List */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-20 space-y-4">
              <div className="px-4 py-3 rounded-lg bg-card border border-border">
                <h3 className="font-serif font-bold text-foreground mb-2">Chapters</h3>
                <div className="text-sm text-muted-foreground mb-4">{phase.title}</div>
                <div className="space-y-2">
                  {phaseChapters.map((ch) => (
                    <Link
                      key={ch.id}
                      href={`/learn/${phaseId}/${ch.id}`}
                      className={`block px-3 py-2 rounded transition text-sm ${
                        ch.id === chapter.id
                          ? 'bg-primary text-primary-foreground font-medium'
                          : 'text-muted-foreground hover:text-foreground hover:bg-background'
                      }`}
                    >
                      Chapter {ch.number}: {ch.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/learn"
                className="flex items-center gap-2 px-4 py-3 rounded-lg border border-border hover:bg-card transition text-sm text-muted-foreground"
              >
                <ArrowLeft size={16} />
                Back to Roadmap
              </Link>
            </div>
          </motion.aside>

          {/* Main Content */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 min-h-screen"
          >
            {/* Chapter Header */}
            <div className="mb-12 pb-8 border-b border-border">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="text-sm font-mono text-primary/70 mb-2">
                  Phase {phase.number} • Chapter {chapter.number}
                </div>
                <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">
                  {chapter.title}
                </h1>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">
                    {phase.title}
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Lesson Content */}
            <div className="prose prose-invert max-w-none mb-12">
              <LessonRenderer content={chapter.script} />
            </div>

            {/* Navigation */}
            <div className="flex flex-col sm:flex-row gap-4 mt-16 pt-8 border-t border-border">
              {prevChapter ? (
                <Link
                  href={`/learn/${phaseId}/${prevChapter.id}`}
                  className="flex-1 flex items-center gap-2 px-4 py-3 rounded-lg border border-border hover:bg-card transition"
                >
                  <ArrowLeft size={18} />
                  <div>
                    <div className="text-xs text-muted-foreground">Previous Chapter</div>
                    <div className="font-medium">{prevChapter.title}</div>
                  </div>
                </Link>
              ) : (
                <div className="flex-1"></div>
              )}

              {nextChapter ? (
                <Link
                  href={`/learn/${phaseId}/${nextChapter.id}`}
                  className="flex-1 flex items-center justify-end gap-2 px-4 py-3 rounded-lg border border-border hover:bg-card transition text-right"
                >
                  <div>
                    <div className="text-xs text-muted-foreground">Next Chapter</div>
                    <div className="font-medium">{nextChapter.title}</div>
                  </div>
                  <ArrowRight size={18} />
                </Link>
              ) : (
                <div className="flex-1 flex justify-end">
                  <Link
                    href="/calculators"
                    className="flex items-center gap-2 px-4 py-3 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition"
                  >
                    Next: Try Calculators
                    <ArrowRight size={18} />
                  </Link>
                </div>
              )}
            </div>
          </motion.article>

          {/* Right Sidebar - Gita Wisdom */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-20 space-y-6">
              {/* Gita Wisdom Panel */}
              <div className="p-6 rounded-lg bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 space-y-4">
                <div>
                  <h3 className="font-serif font-bold text-foreground mb-2 text-lg">Gita Wisdom</h3>
                  <p className="text-sm text-muted-foreground">Philosophical insight for this chapter</p>
                </div>

                {chapter.gitaShloka.sanskrit && (
                  <div className="p-4 bg-background/40 rounded border border-border">
                    <p className="font-serif text-base text-foreground text-center leading-relaxed">
                      {chapter.gitaShloka.sanskrit}
                    </p>
                  </div>
                )}

                <div className="p-4 bg-background/40 rounded border border-border space-y-3">
                  <div>
                    <p className="text-xs text-primary font-semibold mb-1 uppercase">Transliteration</p>
                    <p className="text-sm text-foreground italic">{chapter.gitaShloka.transliteration}</p>
                  </div>

                  <div>
                    <p className="text-xs text-primary font-semibold mb-1 uppercase">Meaning</p>
                    <p className="text-sm text-muted-foreground">{chapter.gitaShloka.meaning}</p>
                  </div>

                  <div>
                    <p className="text-xs text-primary font-semibold mb-1 uppercase">Trading Application</p>
                    <p className="text-sm text-muted-foreground">{chapter.gitaShloka.tradingApplication}</p>
                  </div>
                </div>
              </div>

              {/* Key Takeaway - extracted from chapter title */}
              <div className="p-4 rounded-lg border border-accent/30 bg-accent/5 space-y-2">
                <h4 className="font-serif font-bold text-accent text-sm">Chapter Focus</h4>
                <p className="text-sm text-muted-foreground">{chapter.title}</p>
              </div>
            </div>
          </motion.aside>
        </div>
      </main>
    </>
  );
}
