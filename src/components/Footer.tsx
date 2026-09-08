import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-3 lg:px-8">
        <div>
          <p className="text-xl font-semibold tracking-[0.2em]">TRIBEARTH</p>

          <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">
            Holistic and regenerative experiences and solutions intersecting eco design, wellness
            and social justice.
          </p>
        </div>

        <div>
          <p className="mb-5 text-sm font-medium uppercase tracking-widest">Explore</p>

          <div className="flex flex-col gap-3 text-sm text-white/60">
            <Link href="/jewellery">Jewellery</Link>
            <Link href="/cafe">Café</Link>
            <Link href="/impact">Impact</Link>
            <Link href="/art">Art & Culture</Link>
            <Link href="/wellness">Wellness</Link>
            <Link href="/journal">Journal</Link>
          </div>
        </div>

        <div>
          <p className="mb-5 text-sm font-medium uppercase tracking-widest">Visit</p>

          <p className="text-sm leading-7 text-white/60">
            Diani Beach
            <br />
            Kwale County
            <br />
            Kenya
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl justify-between px-6 py-6 text-xs text-white/40 lg:px-8">
          <span>© {new Date().getFullYear()} Tribearth</span>
          <span>Conscious living. Regenerative futures.</span>
        </div>
      </div>
    </footer>
  )
}
