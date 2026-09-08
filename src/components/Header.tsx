import Link from 'next/link'

const navigation = [
  {
    label: 'Jewellery',
    href: '/jewellery',
  },
  {
    label: 'Café',
    href: '/cafe',
  },
  {
    label: 'Impact',
    href: '/impact',
  },
  {
    label: 'Art & Culture',
    href: '/art',
  },
  {
    label: 'Wellness',
    href: '/wellness',
  },
  {
    label: 'Journal',
    href: '/journal',
  },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="text-xl font-semibold tracking-[0.2em]">
          TRIBEARTH
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm transition-opacity hover:opacity-60"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-full border border-black px-5 py-2.5 text-sm transition-colors hover:bg-black hover:text-white"
        >
          Visit Us
        </Link>
      </div>
    </header>
  )
}
