import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-dvh grid place-items-center p-8">
      <div className="space-y-6 text-center">
        {/* Tailwind quick check: this should be a RED square */}
        <div className="mx-auto h-10 w-10 bg-red-500 rounded" />

        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
          <span className="text-primary">Narayani</span> Thoughts
        </h1>

        <p className="text-base text-muted-foreground max-w-prose mx-auto">
          Next.js + Tailwind v4 + shadcn/ui
        </p>

        <div className="inline-flex gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Delete</Button>
          <Button variant="outline">Outline</Button>
        </div>
      </div>
    </main>
  );
}
