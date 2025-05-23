import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/avatar.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Zekinat Akinwande, a Product Manager passionate about building digital solutions that solve real problems.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt="Portrait of Zekinat Akinwande"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I&apos;m Zekinat Akinwande, a Product Manager passionate about
            building solutions that matter.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              My journey in product management began with a fascination for how
              technology can transform lives. I&apos;ve always been drawn to
              understanding user needs and translating them into products that
              deliver real value.
            </p>
            <p>
              With experience across fintech, agritech, and media platforms, I
              specialize in taking products from concept to launch while
              balancing business goals, technical feasibility, and user
              experience. My approach combines analytical thinking with creative
              problem-solving to build solutions that users love.
            </p>
            <p>
              What excites me most is the intersection of technology and human
              behavior. I thrive on identifying pain points through user
              research, validating solutions through rapid prototyping, and
              delivering products that make a measurable impact.
            </p>
            <p>
              When I&apos;m not immersed in product roadmaps or user stories,
              you can find me exploring new technologies, mentoring aspiring
              product managers, or contributing to open source projects that
              make product management tools more accessible.
            </p>
            <p>
              I believe great products are built through collaboration, empathy,
              and continuous learning - principles that guide my work every day.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            {/* <SocialLink href="#" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink href="#" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink> */}
            <SocialLink
              href="https://www.instagram.com/its_zaiy?igsh=MWdsNXhzZ3l1YmJ2Nw%3D%3D&utm_source=qr"
              icon={InstagramIcon}
            >
              Follow on Instagram
            </SocialLink>
            <SocialLink
              href="mailto:zekinat.akinwande@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              zekinat.akinwande@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
