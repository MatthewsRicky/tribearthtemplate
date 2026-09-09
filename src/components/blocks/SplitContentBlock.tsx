type SplitContentBlockProps = {
  eyebrow?: string | null
  heading: string
  content: string
  image?: unknown
  imagePosition?: 'left' | 'right' | null
  button?: {
    label?: string | null
    url?: string | null
  }
}

export function SplitContentBlock({
  eyebrow,
  heading,
  content,
  imagePosition = 'right',
  button,
}: SplitContentBlockProps) {
  return (
    <section className="tribearth-section bg-tribearth-offwhite">
      <div
        className={`tribearth-container grid gap-12 lg:grid-cols-2 lg:items-center ${
          imagePosition === 'left' ? 'lg:[&>*:first-child]:order-2' : ''
        }`}
      >
        <div className="aspect-[4/3] bg-tribearth-sage/20" />

        <div>
          {eyebrow && <p className="tribearth-eyebrow mb-5">{eyebrow}</p>}

          <h2 className="text-4xl leading-tight text-tribearth-green-deep md:text-5xl">
            {heading}
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-tribearth-muted">{content}</p>

          {button?.label && button.url && (
            <a
              href={button.url}
              className="mt-8 inline-block border-b border-tribearth-gold pb-2 text-sm font-semibold uppercase tracking-wider text-tribearth-green-deep"
            >
              {button.label}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
