'use client'

import { useState } from 'react'

type ColorName =
  | 'green'
  | 'deep-green'
  | 'gold'
  | 'light-gold'
  | 'sage'
  | 'cream'
  | 'offwhite'
  | 'charcoal'
  | 'white'

type TextItem = {
  id?: string | null
  title: string
  description: string
}

type TextDisclosureProps = {
  eyebrow?: string | null
  heading?: string | null
  intro?: string | null
  displayMode?: 'always' | 'accordion' | null
  allowMultipleOpen?: boolean | null
  items?: TextItem[] | null
  backgroundColor?: ColorName | null
  headingColor?: ColorName | null
  textColor?: ColorName | null
  accentColor?: ColorName | null
  alignment?: 'left' | 'center' | null
  contentWidth?: 'narrow' | 'medium' | 'wide' | 'full' | null
  corners?: 'square' | 'small' | 'medium' | 'large' | null
  shadow?: boolean | null
  entranceAnimation?: 'none' | 'fade-in' | 'fade-up' | null
  hoverEffect?: 'none' | 'lift' | 'accent-border' | null
}

const colorClasses: Record<ColorName, string> = {
  green: 'bg-tribearth-green',
  'deep-green': 'bg-tribearth-green-deep',
  gold: 'bg-tribearth-gold',
  'light-gold': 'bg-tribearth-gold-light',
  sage: 'bg-tribearth-sage',
  cream: 'bg-tribearth-cream',
  offwhite: 'bg-tribearth-offwhite',
  charcoal: 'bg-tribearth-charcoal',
  white: 'bg-white',
}

const textColorClasses: Record<ColorName, string> = {
  green: 'text-tribearth-green',
  'deep-green': 'text-tribearth-green-deep',
  gold: 'text-tribearth-gold',
  'light-gold': 'text-tribearth-gold-light',
  sage: 'text-tribearth-sage',
  cream: 'text-tribearth-cream',
  offwhite: 'text-tribearth-offwhite',
  charcoal: 'text-tribearth-charcoal',
  white: 'text-white',
}

const accentBorderClasses: Record<ColorName, string> = {
  green: 'hover:border-tribearth-green',
  'deep-green': 'hover:border-tribearth-green-deep',
  gold: 'hover:border-tribearth-gold',
  'light-gold': 'hover:border-tribearth-gold-light',
  sage: 'hover:border-tribearth-sage',
  cream: 'hover:border-tribearth-cream',
  offwhite: 'hover:border-tribearth-offwhite',
  charcoal: 'hover:border-tribearth-charcoal',
  white: 'hover:border-white',
}

const widthClasses = {
  narrow: 'max-w-2xl',
  medium: 'max-w-4xl',
  wide: 'max-w-6xl',
  full: 'max-w-none',
}

const cornerClasses = {
  square: 'rounded-none',
  small: 'rounded-md',
  medium: 'rounded-xl',
  large: 'rounded-3xl',
}

const animationClasses = {
  none: '',
  'fade-in': 'td-fade-in',
  'fade-up': 'td-fade-up',
}

export function TextDisclosureBlock({
  eyebrow,
  heading,
  intro,
  displayMode = 'always',
  allowMultipleOpen = true,
  items = [],
  backgroundColor = 'cream',
  headingColor = 'deep-green',
  textColor = 'charcoal',
  accentColor = 'gold',
  alignment = 'left',
  contentWidth = 'wide',
  corners = 'medium',
  shadow = true,
  entranceAnimation = 'fade-up',
  hoverEffect = 'lift',
}: TextDisclosureProps) {
  
  const safeBackground = backgroundColor ?? 'cream'
  const safeHeading = headingColor ?? 'deep-green'
  const safeText = textColor ?? 'charcoal'
  const safeAccent = accentColor ?? 'gold'
  const safeWidth = contentWidth ?? 'wide'
  const safeCorners = corners ?? 'medium'
  const safeAnimation = entranceAnimation ?? 'fade-up'

  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (itemKey: string) => {
    setOpenItems((current) => {
      const isOpen = current.includes(itemKey)

      if (isOpen) {
        return current.filter((key) => key !== itemKey)
      }

      return allowMultipleOpen ? [...current, itemKey] : [itemKey]
    })
  }

  const alignmentClass = alignment === 'center' ? 'text-center' : 'text-left'

 
const hoverClass =
  hoverEffect === 'lift'
    ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'
    : hoverEffect === 'accent-border'
      ? `border border-transparent transition-colors duration-300 ${accentBorderClasses[safeAccent]}`
      : 'transition-colors duration-300'


  return (
    <section
      className={[
        'px-5 py-12 sm:px-8 sm:py-16 lg:px-12',
        colorClasses[safeBackground],
        animationClasses[safeAnimation],
      ].join(' ')}
    >
      <div className={`mx-auto ${widthClasses[safeWidth]}`}>
        {(eyebrow || heading || intro) && (
          <header className={`mb-8 ${alignmentClass}`}>
            {eyebrow && (
              <p
                className={`mb-3 text-xs font-semibold uppercase tracking-[0.2em] ${textColorClasses[safeAccent]}`}
              >
                {eyebrow}
              </p>
            )}

            {heading && (
              <h2
                className={`text-3xl font-semibold tracking-tight sm:text-4xl ${textColorClasses[safeHeading]}`}
              >
                {heading}
              </h2>
            )}

            {intro && (
              <p
                className={`mx-auto mt-4 max-w-3xl whitespace-pre-line leading-7 ${textColorClasses[safeText]}`}
              >
                {intro}
              </p>
            )}
          </header>
        )}

        <div className="space-y-4">
          {items?.map((item, index) => {
            const itemKey = item.id ?? `${item.title}-${index}`
            const isOpen = openItems.includes(itemKey)
            const isAccordion = displayMode === 'accordion'

            return (
              <article
                key={itemKey}
                className={[
                  'overflow-hidden border border-black/5',
                  cornerClasses[safeCorners],
                  shadow ? 'shadow-md' : '',
                  hoverClass,
                ].join(' ')}
              >
                {isAccordion ? (
                  <>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`text-disclosure-${itemKey}`}
                      onClick={() => toggleItem(itemKey)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-7"
                    >
                      <span
                        className={`font-semibold leading-snug ${textColorClasses[safeHeading]}`}
                      >
                        {item.title}
                      </span>

                      <span
                        aria-hidden="true"
                        className={`shrink-0 text-2xl transition-transform duration-300 ${textColorClasses[safeAccent]} ${isOpen ? 'rotate-45' : ''}`}
                      >
                        +
                      </span>
                    </button>

                    <div
                      id={`text-disclosure-${itemKey}`}
                      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                      aria-hidden={!isOpen}
                    >
                      <div className="overflow-hidden">
                        <p
                          className={`whitespace-pre-line px-5 pb-6 leading-7 sm:px-7 ${textColorClasses[safeText]}`}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="px-5 py-6 sm:px-7">
                    <h3 className={`text-lg font-semibold ${textColorClasses[safeHeading]}`}>
                      {item.title}
                    </h3>

                    <p
                      className={`mt-3 whitespace-pre-line leading-7 ${textColorClasses[safeText]}`}
                    >
                      {item.description}
                    </p>
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
