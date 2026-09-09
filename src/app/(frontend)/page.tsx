import Link from 'next/link'
import ProductCard from '@/components/ProductCard'
import StoryCard from '@/components/StoryCard'
import SectionHeading from '@/components/SectionHeading'
import { getPayloadClient } from '@/lib/payload'

export default async function HomePage() {
  const payload = await getPayloadClient()

  const [products, stories, impact] = await Promise.all([
    payload.find({
      collection: 'products',
      where: {
        and: [
          {
            featured: {
              equals: true,
            },
          },
          {
            status: {
              equals: 'active',
            },
          },
        ],
      },
      limit: 4,
    }),

    payload.find({
      collection: 'stories',
      where: {
        and: [
          {
            featured: {
              equals: true,
            },
          },
          {
            status: {
              equals: 'published',
            },
          },
        ],
      },
      limit: 3,
    }),

    payload.find({
      collection: 'impact-initiatives',
      where: {
        featured: {
          equals: true,
        },
      },
      limit: 3,
    }),
  ])

  return (
    <div>
      {/* Hero */}
      <section className="flex min-h-[80vh] items-end bg-neutral-100">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-black/50">Diani · Kenya</p>

          <h1 className="max-w-5xl text-5xl font-medium leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
            Conscious living.
            <br />
            Regenerative futures.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-black/60">
            Holistic and regenerative experiences and solutions intersecting eco design, wellness
            and social justice.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/jewellery" className="rounded-full bg-black px-6 py-3 text-sm text-white">
              Explore Jewellery
            </Link>

            <Link href="/impact" className="rounded-full border border-black px-6 py-3 text-sm">
              Our Impact
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
        <SectionHeading
          eyebrow="Tribearth"
          title="A multi-industry social enterprise rooted in conscious creation."
          description="From ecological jewellery and plant-based food to art, wellness and community initiatives, Tribearth creates spaces and experiences designed around people and planet."
        />
      </section>

      {/* Jewellery */}
      <section className="border-t border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <SectionHeading
            eyebrow="Eco Design"
            title="Jewellery made with intention."
            description="Discover consciously designed pieces created through ecological practices and artisan craftsmanship."
          />

          <div className="mt-14 grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-4">
            {products.docs.map((product) => (
              <ProductCard
                key={product.id}
                product={{
                  id: product.id,
                  name: product.name,
                  slug: product.slug,
                  price: product.price,
                  currency: product.currency,
                  images: Array.isArray(product.images)
                    ? product.images.map((image) => ({
                        url: typeof image === 'object' ? image.url : undefined,
                        alt: typeof image === 'object' ? image.alt : undefined,
                      }))
                    : null,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="bg-neutral-100">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <SectionHeading
            eyebrow="Impact"
            title="Business as a force for positive change."
            description="Our work connects ethical production, environmental responsibility and community empowerment."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {impact.docs.map((initiative) => (
              <article key={initiative.id} className="border border-black/10 bg-white p-8">
                <p className="text-xs uppercase tracking-widest text-black/40">
                  {initiative.category}
                </p>

                <h3 className="mt-4 text-2xl font-medium">{initiative.title}</h3>

                {initiative.summary && (
                  <p className="mt-4 text-sm leading-7 text-black/60">{initiative.summary}</p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Journal */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <SectionHeading eyebrow="Journal" title="Stories from the tribe." />

          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {stories.docs.map((story) => (
              <StoryCard
                key={story.id}
                story={{
                  title: story.title,
                  slug: story.slug,
                  excerpt: story.excerpt,
                  coverImage:
                    typeof story.coverImage === 'object'
                      ? {
                          url: story.coverImage?.url,
                          alt: story.coverImage?.alt,
                        }
                      : null,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">Diani, Kenya</p>

          <h2 className="mt-6 max-w-3xl text-4xl font-medium tracking-tight md:text-6xl">
            Come experience Tribearth.
          </h2>

          <Link
            href="/contact"
            className="mt-10 inline-block rounded-full bg-white px-7 py-3 text-sm text-black"
          >
            Plan Your Visit
          </Link>
        </div>
      </section>
    </div>
  )
}
