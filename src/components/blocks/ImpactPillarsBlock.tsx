import Image from 'next/image'
import type { Media } from '@/payload-types'

type Pillar = {
  title: string
  description: string
  image?: Media | number | null
  link?: string | null
  linkLabel?: string | null
}

type ImpactPillarsBlockProps = {
  eyebrow?: string | null
  heading: string
  description?: string | null
  pillars?: Pillar[] | null
  background?: 'cream' | 'offwhite' | 'green' | null
}

export function ImpactPillarsBlock({
  eyebrow,
  heading,
  description,
  pillars,
  background = 'cream',
}: ImpactPillarsBlockProps) {
  const backgroundClass = {
    cream: 'bg-tribearth-cream',
    offwhite: 'bg-tribearth-offwhite',
    green: 'bg-tribearth-green-deep text-white',
  }[background ?? 'cream']

  const validPillars = (pillars ?? []).filter((pillar) => pillar.title && pillar.description)

  return (
    <section className={`tribearth-section ${backgroundClass}`}>
      <div className="tribearth-container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          {eyebrow && <p className="tribearth-eyebrow mb-4">{eyebrow}</p>}

          <h2 className="text-3xl leading-tight text-tribearth-green-deep md:text-5xl">
            {heading}
          </h2>

          {description && (
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-tribearth-muted md:text-lg">
              {description}
            </p>
          )}
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {validPillars.map((pillar, index) => {
            const media = pillar.image && typeof pillar.image === 'object' ? pillar.image : null

            return (
              <article key={`${pillar.title}-${index}`} className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-tribearth-sage/20">
                  {media?.url && (
                    <Image
                      src={media.url}
                      alt={media.alt || pillar.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                </div>

                <div className="pt-5">
                  <h3 className="text-xl font-semibold text-tribearth-green-deep">
                    {pillar.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-tribearth-muted">
                    {pillar.description}
                  </p>

                  {pillar.link && (
                    <a
                      href={pillar.link}
                      className="mt-5 inline-block border-b border-tribearth-gold pb-1 text-sm font-semibold text-tribearth-green-deep"
                    >
                      {pillar.linkLabel || 'Discover more'}
                    </a>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
