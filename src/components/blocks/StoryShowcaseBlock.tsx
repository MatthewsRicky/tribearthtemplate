type StoryShowcaseBlockProps = {
  eyebrow?: string | null
  heading: string
  description?: string | null
}

export function StoryShowcaseBlock({ eyebrow, heading, description }: StoryShowcaseBlockProps) {
  return (
    <section className="tribearth-section bg-tribearth-cream">
      <div className="tribearth-container">
        {eyebrow && <p className="tribearth-eyebrow">{eyebrow}</p>}

        <h2 className="mt-4 text-4xl text-tribearth-green-deep md:text-5xl">{heading}</h2>

        {description && (
          <p className="mt-5 max-w-2xl text-lg text-tribearth-muted">{description}</p>
        )}

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <article key={index}>
              <div className="aspect-[4/3] bg-tribearth-sage/20" />

              <p className="mt-5 text-xs uppercase tracking-widest text-tribearth-gold">Journal</p>

              <div className="mt-2 h-6 w-4/5 bg-tribearth-green-deep/10" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
