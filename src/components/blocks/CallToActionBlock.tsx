type CallToActionBlockProps = {
  eyebrow?: string | null
  heading: string
  description?: string | null
  button?: {
    label?: string | null
    url?: string | null
  }
  style?: 'green' | 'gold' | 'cream' | null
}

export function CallToActionBlock({
  eyebrow,
  heading,
  description,
  button,
  style = 'green',
}: CallToActionBlockProps) {
  const styles = {
    green: 'bg-tribearth-green-deep text-tribearth-cream',
    gold: 'bg-tribearth-gold text-tribearth-green-deep',
    cream: 'bg-tribearth-cream text-tribearth-green-deep',
  }

  return (
    <section className={`px-6 py-24 ${styles[style]}`}>
      <div className="mx-auto max-w-4xl text-center">
        {eyebrow && (
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-tribearth-gold">
            {eyebrow}
          </p>
        )}

        <h2 className="text-4xl leading-tight md:text-6xl">{heading}</h2>

        {description && (
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 opacity-75">{description}</p>
        )}

        {button?.label && button.url && (
          <a
            href={button.url}
            className="mt-8 inline-block border border-current px-8 py-4 text-sm font-semibold uppercase tracking-wider transition hover:bg-black/5"
          >
            {button.label}
          </a>
        )}
      </div>
    </section>
  )
}
