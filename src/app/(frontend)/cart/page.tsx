import Link from 'next/link'

export default function CartPage() {
  return (
    <main className="mx-auto min-h-[60vh] max-w-5xl px-5 py-16 sm:px-8 lg:py-24">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-tribearth-gold">
        Your selection
      </p>

      <h1 className="text-3xl font-semibold text-tribearth-green-deep sm:text-4xl">Your Cart</h1>

      <p className="mt-4 max-w-xl leading-relaxed text-tribearth-charcoal">
        Your selected pieces will appear here. Explore the collection to find something meaningful.
      </p>

      <Link
        href="/shop"
        className="mt-8 inline-flex items-center justify-center bg-tribearth-green-deep px-6 py-3 text-sm font-medium text-white transition hover:bg-tribearth-green"
      >
        Explore Jewellery
      </Link>
    </main>
  )
}
