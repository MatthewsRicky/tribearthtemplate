type ImpactStatsBlockProps = {
  eyebrow?: string | null
  heading: string
  description?: string | null
  stats?: Array<{
    value?: string | null
    label?: string | null
    description?: string | null
    id?: string | null
  }> | null
}

export function ImpactStatsBlock({ eyebrow, heading, description, stats }: ImpactStatsBlockProps) {
  const safeStats = stats ?? []

  return (
    <section className="tribearth-section bg-tribearth-green-deep text-tribearth-cream">
      <div className="tribearth-container">
        {eyebrow && <p className="tribearth-eyebrow text-tribearth-gold">{eyebrow}</p>}

        <h2 className="mt-4 max-w-3xl text-4xl md:text-5xl">{heading}</h2>

        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-8 text-tribearth-cream/70">{description}</p>
        )}

        {safeStats.length > 0 && (
          <div className="mt-12 grid gap-px overflow-hidden bg-tribearth-gold/20 md:grid-cols-3">
            {safeStats.map((stat, index) => (
              <div key={stat.id ?? index} className="bg-tribearth-green-deep p-8">
                <div className="text-4xl text-tribearth-gold">{stat.value}</div>

                <div className="mt-3 font-semibold">{stat.label}</div>

                {stat.description && (
                  <p className="mt-3 text-sm leading-6 text-tribearth-cream/60">
                    {stat.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
