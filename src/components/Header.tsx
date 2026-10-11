
'use client'

import { useState } from 'react'
import Link from 'next/link'

const navigation = [
  { label: 'Jewelry', href: '/jewelry' },
  { label: 'Café', href: '/cafe' },
  { label: 'Impact', href: '/impact' },
  { label: 'Art & Culture', href: '/art' },
  { label: 'Wellness', href: '/wellness' },
  { label: 'Journal', href: '/journal' },
  ]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-tribearth-border bg-tribearth-cream/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Brand */}
        <Link
          href="/"
          onClick={closeMenu}
          className="text-xl font-semibold tracking-[0.2em] text-tribearth-green-deep"
        >
          TRIBEARTH
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-6 lg:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm transition-colors hover:text-tribearth-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/admin"
            className="rounded-full border border-tribearth-green-deep/30 px-4 py-2.5 text-sm text-tribearth-green-deep transition-colors hover:border-tribearth-green-deep hover:bg-tribearth-green-deep/5"
          >
            CMS Admin
          </Link>

          <Link
            href="/contact"
            className="rounded-full border border-tribearth-green-deep px-5 py-2.5 text-sm transition-colors hover:bg-tribearth-green-deep hover:text-tribearth-cream"
          >
            Visit Us
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-full text-tribearth-green-deep transition-colors hover:bg-tribearth-green-deep/10 md:hidden"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute left-0 top-full w-full border-b border-tribearth-border bg-tribearth-cream px-6 pb-7 pt-4 shadow-lg md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="border-b border-tribearth-border/70 py-4 text-base text-tribearth-green-deep transition-colors hover:text-tribearth-gold"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/admin"
              onClick={closeMenu}
              className="mt-5 self-start rounded-full border border-tribearth-green-deep/30 px-6 py-3 text-sm text-tribearth-green-deep transition-colors hover:bg-tribearth-green-deep/5"
            >
              CMS Admin
            </Link>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-3 self-start rounded-full bg-tribearth-green-deep px-6 py-3 text-sm text-tribearth-cream transition-colors hover:bg-tribearth-green"
            >
              Visit Us
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}

