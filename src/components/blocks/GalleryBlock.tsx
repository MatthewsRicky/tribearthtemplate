type GalleryBlockProps = {
  eyebrow?: string | null
  heading?: string | null
  description?: string | null
}

export function GalleryBlock({ eyebrow, heading, description }: GalleryBlockProps) {
  return (
    <section className="tribearth-section bg-tribearth-cream">
      <div className="tribearth-container">
        {eyebrow && <p className="tribearth-eyebrow">{eyebrow}</p>}

        {heading && (
          <h2 className="mt-4 text-4xl text-tribearth-green-deep md:text-5xl">{heading}</h2>
        )}

        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-8 text-tribearth-muted">{description}</p>
        )}

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className={`bg-tribearth-sage/20 ${index === 0 ? 'aspect-[4/5]' : 'aspect-square'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
