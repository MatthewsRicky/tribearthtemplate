type EventsBlockProps = {
  eyebrow?: string | null
  heading: string
  description?: string | null
}

export function EventsBlock({ eyebrow, heading, description }: EventsBlockProps) {
  return (
    <section className="tribearth-section bg-tribearth-offwhite">
      <div className="tribearth-container">
        {eyebrow && <p className="tribearth-eyebrow">{eyebrow}</p>}

        <h2 className="mt-4 text-4xl text-tribearth-green-deep md:text-5xl">{heading}</h2>

        {description && (
          <p className="mt-5 max-w-2xl text-lg text-tribearth-muted">{description}</p>
        )}

        <div className="mt-10 space-y-px bg-tribearth-border">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="grid gap-4 bg-tribearth-offwhite p-6 md:grid-cols-[120px_1fr_auto] md:items-center"
            >
              <div className="text-sm uppercase tracking-widest text-tribearth-gold">Event</div>

              <div>
                <div className="h-5 w-2/3 bg-tribearth-green-deep/10" />
                <div className="mt-2 h-3 w-1/3 bg-tribearth-charcoal/10" />
              </div>

              <div className="text-sm text-tribearth-green">Explore →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
