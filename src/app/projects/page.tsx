import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
// import logoVoxclips from '@/images/logos/voxclips.svg'
// import logoBlomgram from '@/images/logos/blomgram.svg'
// import logoIPayFast from '@/images/logos/ipayfast.svg'
// import logoAgfricMark from '@/images/logos/agfricmark.svg'
// import logoJimpaul from '@/images/logos/jimpaul.svg'
// import logoQuantumica from '@/images/logos/quantumica.svg'
// import logoTerrawatt from '@/images/logos/terrawatt.svg'

const projects = [
  {
    name: 'Voxclips',
    description:
      'AI-powered short-form video platform that transforms long-form content into engaging clips. Launched on Product Hunt with 126 upvotes and 500+ initial users.',
    link: { href: '/projects/voxclips', label: 'Product Hunt' },
    // logo: logoVoxclips,
  },
  {
    name: 'Blomgram',
    description:
      'Cross-border payment solution for Africa, integrating multiple fintech APIs to provide secure, low-cost currency exchange with real-time transactions.',
    link: { href: '/projects/blomgram', label: 'blomgram.com' },
    // logo: logoBlomgram,
  },
  {
    name: 'iPayFast',
    description:
      'Cryptocurrency platform for Africa featuring secure transactions, biometric login, and dynamic rate engine. Reached 1,000+ users in first 3 months.',
    link: { href: '/projects/ipayfast', label: 'Figma Design' },
    // logo: logoIPayFast,
  },
  {
    name: 'AgfricMark',
    description:
      'Agricultural marketplace connecting farmers with verified buyers, featuring escrow payments and logistics integration. Onboarded 500+ users at launch.',
    link: { href: '/projects/agfricmark', label: 'Figma Gallery' },
    // logo: logoAgfricMark,
  },
  {
    name: 'Jimpaul.ng',
    description:
      'Real estate platform with HubSpot CRM integration, capturing 150+ property inquiries in first month and improving SEO rankings.',
    link: { href: '/projects/jimpaul', label: 'jimpaul.ng' },
    // logo: logoJimpaul,
  },
  {
    name: 'Quantumica.io',
    description:
      'Renewable energy company website with case studies, lead generation forms, and SEO optimization for partnership inquiries.',
    link: { href: '/projects/quantumica', label: 'quantumica.io' },
    // logo: logoQuantumica,
  },
  {
    name: 'Terrawatt.io',
    description:
      'Modern redesign for energy solutions provider featuring dark/light modes, animations, and integrated inquiry management.',
    link: { href: '/projects/terrawatt', label: 'terrawatt.io' },
    // logo: logoTerrawatt,
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description:
    "Products and platforms I've built to solve real-world problems.",
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Solving problems through product development."
      intro="I've led the creation of diverse digital products - from fintech platforms to agricultural marketplaces. Each project addresses specific challenges with thoughtful solutions, combining technical execution with user-centric design."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              {/* <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              /> */}
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
