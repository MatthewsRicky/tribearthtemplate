type ProductShowcaseBlockProps = {
  eyebrow?: string | null
  heading: string
  description?: string | null
}

export function ProductShowcaseBlock({ eyebrow, heading, description }: ProductShowcaseBlockProps) {
  return (
    <section className="tribearth-section bg-tribearth-offwhite">
      <div className="tribearth-container">
        {eyebrow && <p className="tribearth-eyebrow">{eyebrow}</p>}

        <h2 className="mt-4 text-4xl text-tribearth-green-deep md:text-5xl">{heading}</h2>

        {description && (
          <p className="mt-5 max-w-2xl text-lg text-tribearth-muted">{description}</p>
        )}

        <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index}>
              <div className="aspect-[4/5] bg-tribearth-sage/20" />

              <div className="mt-4 h-4 w-2/3 bg-tribearth-green-deep/10" />
              <div className="mt-2 h-3 w-1/3 bg-tribearth-gold/30" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
