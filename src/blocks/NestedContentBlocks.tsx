import { Hero } from '@/blocks/Hero/config'
import { SplitContent } from '@/blocks/SplitContent/config'
import { Gallery } from '@/blocks/Gallery/config'
import { ProductShowcase } from '@/blocks/ProductShowcase/config'
import { StoryShowcase } from '@/blocks/StoryShowcase/config'
import { ImpactStats } from '@/blocks/ImpactStats/config'
import { Events } from '@/blocks/Events/config'
import { Menu } from '@/blocks/Menu/config'
import { CallToAction } from '@/blocks/CallToAction/config'
import { TextDisclosure } from '@/blocks/TextDisclosure/config'
import { ImpactPillars } from './ImpactPillars/config'
import { ImpactParallax } from './ImpactParallax/config'
import { ImpactInitiativesBlock } from './ImpactInitiatives/config'
import { ImageText } from '@/blocks/ImageText/config'
import { SingleImage } from '@/blocks/SingleImage/config'
import { EmphasizedText } from '@/blocks/EmphasizedText/config'
import { Heading } from '@/blocks/Heading/config'
import { ProductCatalogue } from '@/blocks/ProductCatalogue/config'


// Only content blocks belong here.
// Do not add Container, ResponsiveGrid, or ResponsiveSplit.
export const nestedContentBlocks = [
  Hero,
  SplitContent,
  Gallery,
  ProductShowcase,
  StoryShowcase,
  ImpactStats,
  Events,
  Menu,
  CallToAction,
  TextDisclosure,
  ImpactPillars,
  ImpactParallax,
  ImpactInitiativesBlock,
  ImageText,
  SingleImage,
  EmphasizedText,
  Heading,
  ProductCatalogue,
]
