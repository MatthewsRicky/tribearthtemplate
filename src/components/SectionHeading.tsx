type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
}

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-black/50">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-medium tracking-tight md:text-5xl">{title}</h2>

      {description && (
        <p className="mt-6 text-base leading-8 text-black/60 md:text-lg">{description}</p>
      )}
    </div>
  )
}
