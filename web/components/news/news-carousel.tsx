"use client";

import { useEffect, useRef, useState } from "react";
import news from "@/data/news.json";

type NewsItem = {
  id: string;
  title: string;
  summary: string;
  image: string;
  url: string;
  publishedAt?: string;
};

export default function NewsCarousel() {
  const items = news as NewsItem[];
  const [idx, setIdx] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const next = () => setIdx((i) => (i + 1) % items.length);
  const prev = () => setIdx((i) => (i - 1 + items.length) % items.length);
  const go = (n: number) => setIdx(n);

  // auto-advance every 6s, pause on hover
  const start = () => {
    stop();
    timerRef.current = setInterval(next, 6000);
  };
  const stop = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = null;
  };

  useEffect(() => {
    start();
    return stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const active = items[idx];

  return (
    <section
      aria-label="News"
      className="mx-auto mt-10 max-w-6xl px-4"
      onMouseEnter={stop}
      onMouseLeave={start}
    >
      <div className="relative overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-lg transition-shadow hover:shadow-xl">
        <a href={active.url} target="_blank" rel="noreferrer" className="block">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Image */}
            <div className="aspect-video w-full overflow-hidden md:rounded-l-2xl">
              <img
                src={active.image}
                alt={active.title}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-6">
              <span className="text-xs text-muted-foreground">
                {active.publishedAt
                  ? new Date(active.publishedAt).toLocaleDateString()
                  : ""}
              </span>
              <h3 className="mt-2 text-2xl font-semibold leading-tight">
                {active.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {active.summary}
              </p>
              <div className="mt-5">
                <span className="inline-flex items-center rounded-md border border-primary/40 bg-primary/5 px-3 py-1 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                  Read more →
                </span>
              </div>
            </div>
          </div>
        </a>

        {/* Controls */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-background/70 p-2 shadow-md backdrop-blur transition hover:bg-background/90"
          aria-label="Previous"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-background/70 p-2 shadow-md backdrop-blur transition hover:bg-background/90"
          aria-label="Next"
        >
          ›
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Go to ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                i === idx ? "bg-primary scale-110" : "bg-muted hover:bg-primary/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
