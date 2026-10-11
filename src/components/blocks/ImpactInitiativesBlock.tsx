import Image from 'next/image'
import type { Media } from '@/payload-types'

type Initiative = {
  id?: string | number
  title: string
  slug?: string | null
  category?: string | null
  summary?: string | null
  image?: Media | number | null
}

type ImpactInitiativesBlockProps = {
  eyebrow?: string | null
  heading: string
  description?: string | null
  initiatives?: (number | Initiative)[] | null
  button?: {
    label?: string | null
    url?: string | null
  } | null
}

export function ImpactInitiativesBlock({
  eyebrow,
  heading,
  description,
  initiatives,
  button,
}: ImpactInitiativesBlockProps) {
  const populatedInitiatives = (initiatives ?? []).filter(
    (item): item is Initiative => typeof item === 'object' && item !== null && 'title' in item,
  )

  return (
    <section className="tribearth-section bg-tribearth-offwhite">
      <div className="tribearth-container">
        <div className="mb-12 max-w-3xl">
          {eyebrow && <p className="tribearth-eyebrow mb-4">{eyebrow}</p>}

          <h2 className="text-3xl leading-tight text-tribearth-green-deep md:text-5xl">
            {heading}
          </h2>

          {description && (
            <p className="mt-5 text-base leading-8 text-tribearth-muted md:text-lg">
              {description}
            </p>
          )}
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {populatedInitiatives.map((initiative, index) => {
            const media =
              initiative.image && typeof initiative.image === 'object' ? initiative.image : null

            return (
              <article
                key={initiative.id ?? initiative.slug ?? `${initiative.title}-${index}`}
                className="overflow-hidden border border-tribearth-border bg-white"
              >
                {media?.url && (
                  <div className="relative aspect-[16/9] bg-tribearth-sage/20">
                    <Image
                      src={media.url}
                      alt={media.alt || initiative.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                )}

                <div className="p-6 md:p-8">
                  {initiative.category && (
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-tribearth-green">
                      {initiative.category.replaceAll('-', ' ')}
                    </p>
                  )}

                  <h3 className="text-2xl text-tribearth-green-deep">{initiative.title}</h3>

                  {initiative.summary && (
                    <p className="mt-4 text-sm leading-7 text-tribearth-muted">
                      {initiative.summary}
                    </p>
                  )}

                  {initiative.slug && (
                    <a
                      href={`/impact/${initiative.slug}`}
                      className="mt-5 inline-block border-b border-tribearth-gold pb-1 text-sm font-semibold text-tribearth-green-deep"
                    >
                      Learn about this initiative
                    </a>
                  )}
                </div>
              </article>
            )
          })}
        </div>

        {button?.label && button.url && (
          <div className="mt-10">
            <a
              href={button.url}
              className="inline-block border-b border-tribearth-gold pb-2 text-sm font-semibold uppercase tracking-wider text-tribearth-green-deep"
            >
              {button.label}
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
