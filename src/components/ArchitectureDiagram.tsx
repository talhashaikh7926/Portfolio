type DiagramType = "search" | "booking" | "erp";

const diagrams: Record<DiagramType, { nodes: string[]; flow: string }> = {
  search: {
    nodes: ["User Query", "Next.js API", "OpenAI Embeddings", "Product Index", "Ranked Results"],
    flow: "Query → Embed → Similarity Search → Filter → Response",
  },
  booking: {
    nodes: ["React UI", "Next.js API", "MongoDB", "Stripe", "Email Notify"],
    flow: "Select Slot → Reserve → Pay → Confirm",
  },
  erp: {
    nodes: ["React Dashboard", "Express API", "MySQL SPs", "Eclipse BI", "AWS EC2"],
    flow: "Request → Stored Proc → Aggregate → Chart Render",
  },
};

export function ArchitectureDiagram({ type }: { type: DiagramType }) {
  const { nodes, flow } = diagrams[type];

  return (
    <div className="rounded-lg border border-card-border bg-background/60 p-4">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {nodes.map((node, i) => (
          <div key={node} className="flex items-center gap-2">
            <div className="rounded-md border border-accent/30 bg-accent/10 px-3 py-2 text-center text-xs font-medium">
              {node}
            </div>
            {i < nodes.length - 1 && (
              <span className="text-muted hidden sm:inline">→</span>
            )}
          </div>
        ))}
      </div>
      <p className="mt-4 text-center text-xs font-mono text-muted">{flow}</p>
    </div>
  );
}
