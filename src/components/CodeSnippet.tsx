export function CodeSnippet({ code }: { code: string }) {
  return (
    <pre className="overflow-x-auto rounded-lg border border-card-border bg-[#0d1117] p-4 text-xs leading-relaxed">
      <code className="font-mono text-slate-300">{code}</code>
    </pre>
  );
}
