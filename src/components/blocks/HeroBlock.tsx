type HeroBlockProps = {
  eyebrow?: string | null
  heading: string
  subheading?: string | null
  primaryButton?: {
    label?: string | null
    url?: string | null
  }
  secondaryButton?: {
    label?: string | null
    url?: string | null
  }
}

export function HeroBlock({
  eyebrow,
  heading,
  subheading,
  primaryButton,
  secondaryButton,
}: HeroBlockProps) {
  return (
    <section className="bg-tribearth-green-deep px-6 py-32 text-tribearth-cream">
      <div className="mx-auto max-w-6xl">
        {eyebrow && (
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-tribearth-gold">{eyebrow}</p>
        )}

        <h1 className="max-w-4xl text-5xl font-medium leading-tight md:text-7xl">{heading}</h1>

        {subheading && (
          <p className="mt-6 max-w-2xl text-lg leading-8 text-tribearth-cream/80">{subheading}</p>
        )}

        {(primaryButton?.label || secondaryButton?.label) && (
          <div className="mt-10 flex flex-wrap gap-4">
            {primaryButton?.label && primaryButton?.url && (
              <a
                href={primaryButton.url}
                className="bg-tribearth-gold px-7 py-4 text-sm font-semibold uppercase tracking-wider text-tribearth-green-deep transition hover:bg-tribearth-gold-light"
              >
                {primaryButton.label}
              </a>
            )}

            {secondaryButton?.label && secondaryButton?.url && (
              <a
                href={secondaryButton.url}
                className="border border-tribearth-cream/40 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-tribearth-cream transition hover:border-tribearth-gold hover:text-tribearth-gold"
              >
                {secondaryButton.label}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
