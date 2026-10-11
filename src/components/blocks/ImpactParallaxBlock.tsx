import type { Media } from '@/payload-types'

type ImpactParallaxBlockProps = {
  eyebrow?: string | null
  heading: string
  content?: string | null
  backgroundImage?: Media | number | null
  overlayOpacity?: number | null
  button?: {
    label?: string | null
    url?: string | null
  } | null
  alignment?: 'left' | 'center' | null
  height?: 'medium' | 'large' | null
}

export function ImpactParallaxBlock({
  eyebrow,
  heading,
  content,
  backgroundImage,
  overlayOpacity = 55,
  button,
  alignment = 'center',
  height = 'large',
}: ImpactParallaxBlockProps) {
  const media = backgroundImage && typeof backgroundImage === 'object' ? backgroundImage : null

  const opacity = Math.min(100, Math.max(0, overlayOpacity ?? 55)) / 100

  return (
    <section
      className={`relative isolate flex items-center overflow-hidden ${
        height === 'large' ? 'min-h-[560px]' : 'min-h-[400px]'
      }`}
    >
      {media?.url && (
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed"
          style={{
            backgroundImage: `url("${media.url}")`,
          }}
        />
      )}

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-tribearth-green-deep"
        style={{ opacity }}
      />

      <div
        className={`tribearth-container w-full py-24 ${
          alignment === 'left' ? 'text-left' : 'text-center'
        }`}
      >
        <div className={alignment === 'center' ? 'mx-auto max-w-4xl' : 'max-w-3xl'}>
          {eyebrow && (
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-tribearth-gold-light">
              {eyebrow}
            </p>
          )}

          <h2 className="text-4xl leading-tight text-white md:text-6xl">{heading}</h2>

          {content && (
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/90 md:text-lg">
              {content}
            </p>
          )}

          {button?.label && button.url && (
            <a
              href={button.url}
              className="mt-9 inline-flex border border-tribearth-gold bg-tribearth-gold px-7 py-4 text-sm font-semibold uppercase tracking-wider text-tribearth-green-deep transition-colors hover:bg-tribearth-gold-light"
            >
              {button.label}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
