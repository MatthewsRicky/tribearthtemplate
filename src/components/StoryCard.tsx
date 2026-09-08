import Image from 'next/image'
import Link from 'next/link'

type StoryCardProps = {
  story: {
    title: string
    slug: string
    excerpt?: string | null
    coverImage?: {
      url?: string | null
      alt?: string | null
    } | null
  }
}

export default function StoryCard({ story }: StoryCardProps) {
  return (
    <Link href={`/journal/${story.slug}`} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
        {story.coverImage?.url && (
          <Image
            src={story.coverImage.url}
            alt={story.coverImage.alt || story.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        )}
      </div>

      <div className="mt-5">
        <h3 className="text-xl font-medium">{story.title}</h3>

        {story.excerpt && <p className="mt-3 text-sm leading-7 text-black/60">{story.excerpt}</p>}
      </div>
    </Link>
  )
}
