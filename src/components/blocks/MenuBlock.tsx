type MenuBlockProps = {
  eyebrow?: string | null
  heading: string
  description?: string | null
}

export function MenuBlock({ eyebrow, heading, description }: MenuBlockProps) {
  return (
    <section className="tribearth-section bg-tribearth-cream">
      <div className="tribearth-container max-w-5xl">
        {eyebrow && <p className="tribearth-eyebrow">{eyebrow}</p>}

        <h2 className="mt-4 text-4xl text-tribearth-green-deep md:text-5xl">{heading}</h2>

        {description && (
          <p className="mt-5 max-w-2xl text-lg text-tribearth-muted">{description}</p>
        )}

        <div className="mt-10 divide-y divide-tribearth-border">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="flex items-start justify-between gap-8 py-6">
              <div>
                <h3 className="font-medium text-tribearth-green-deep">Menu Item</h3>

                <p className="mt-1 text-sm text-tribearth-muted">Plant-based seasonal selection</p>
              </div>

              <span className="font-medium text-tribearth-gold">KES</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
