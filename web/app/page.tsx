export default function Home() {
  return (
    <main className="min-h-dvh p-6">
      {/* This MUST appear bottom-right in red if Tailwind works */}
      <div className="fixed bottom-6 right-6 h-10 w-10 rounded bg-red-500" />
      <h1 className="text-3xl font-bold">Tailwind check</h1>
      <p className="text-sm text-gray-500">
        You should see a red circle at the bottom-right.
      </p>
    </main>
  );
}
