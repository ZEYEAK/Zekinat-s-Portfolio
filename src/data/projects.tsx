import { ProjectData } from '@/data/types'
import voxclipsHero from '@/images/voxclips-hero.jpg'
import blomgramHero from '@/images/blomgram-hero.jpg'
import ipayfastHero from '@/images/ipayfast-hero.jpg'
import agfricmarkHero from '@/images/agfricmark-hero.jpg'
import jimpaulHero from '@/images/jimpaul-hero.jpg'
// import quantumicaHero from '@/images/quantumica-hero.jpg'
// import terrawattHero from '@/images/terrawatt-hero.jpg'
import blomgramScreenshot1 from '@/images/blomgram-screenshot1.jpg'
import agfricmarkScreenshot1 from '@/images/agfricmark-screenshot1.jpg'
import ipayfastScreenshot1 from '@/images/ipayfast-screenshot1.jpg'
import jimpaulScreenshot1 from '@/images/jimpaul-screenshot1.jpg'

export const projectData: Record<string, ProjectData> = {
  voxclips: {
    title: 'Voxclips',
    description:
      'AI-powered short-form video platform for transforming long-form content into engaging clips',
    timeline: '2022 – 2024',
    role: 'Product Manager',
    tools: ['Linear', 'Figma', 'Google Suite', 'Loom', 'Notion', 'Slack'],
    heroMedia: {
      type: 'image',
      src: voxclipsHero.src,
      caption: 'Voxclips dashboard interface',
    },
    sections: [
      {
        title: 'Background',
        content:
          'Voxclips was an AI-powered short-form video platform that allowed users to generate, share, and consume topic-based clips from long-form content. The platform made it easy for creators, educators, and marketers to turn lengthy podcasts or videos into impactful, digestible video nuggets.',
      },
      {
        title: 'The Problem',
        content:
          'Content creators and podcast hosts often had highly valuable content locked in long-form formats. This content needed to be discoverable and engaging, especially for social platforms where short-form video thrives.',
      },
      {
        title: 'My Role & Responsibilities',
        content: (
          <ul className="list-disc space-y-2 pl-5">
            <li>Defined product vision and MVP scope with the founders</li>
            <li>Led product planning and execution using Linear</li>
            <li>Created the PRD, feature documentation, and roadmap</li>
            <li>Collaborated with engineers, designers, and marketing team</li>
            <li>Oversaw QA and iterative feature testing</li>
            <li>Designed go-to-market strategy and Product Hunt launch</li>
          </ul>
        ),
      },
      {
        title: 'Process',
        content: (
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold">Discovery & Research</h4>
              <p>
                Ran competitor analysis, user interviews, and mapped out key use
                cases.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Design & Prototyping</h4>
              <p>
                Worked closely with our designer to develop wireframes and
                clickable prototypes.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Development</h4>
              <p>
                Coordinated daily check-ins and weekly sprint reviews using
                Linear and Loom.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Product Management</h4>
              <p>
                Created comprehensive PRDs, managed QA processes, and
                coordinated cross-functional team activities.
              </p>
            </div>
          </div>
        ),
      },
      {
        title: 'The Solution',
        content:
          'A seamless, AI-enhanced web app where users could upload long videos and automatically generate short clips with subtitles, titles, and shareable formats optimized for social media platforms.',
      },
      {
        title: 'Outcome & Impact',
        content: (
          <ul className="list-disc space-y-2 pl-5">
            <li>Launched MVP within 3 months</li>
            <li>126 Product Hunt upvotes and over 500 initial users</li>
            <li>Positive feedback from educators and social media creators</li>
            <li>Built brand credibility and investor interest</li>
          </ul>
        ),
      },
    ],
    links: [
      { label: 'Product Hunt', href: 'http://producthunt.com/voxclips' },
      { label: 'Demo Video', href: '#' },
    ],
    mediaGallery: [
      {
        type: 'image',
        src: '/images/voxclips-screenshot1.jpg',
        caption: 'Video clip generation interface',
      },
      {
        type: 'figma',
        src: 'https://figma.com/voxclips',
        caption: 'Figma prototype designs',
      },
    ],
    testimonial: {
      quote:
        "Zekinat's leadership during the Voxclips beta helped us scale fast. Her PRD and user feedback loops were spot on.",
      author: 'Team Lead Engineering',
      role: 'Voxclips',
    },
  },
  blomgram: {
    title: 'Blomgram',
    description:
      'Cross-border payment solution for Africa with secure, low-cost currency exchange',
    timeline: 'March 2024 – Present',
    role: 'Product Manager',
    tools: [
      'Jira',
      'Figma',
      'Kora',
      'Fincra',
      'Redbiller',
      'Juicyway',
      'GitHub',
    ],
    heroMedia: {
      type: 'image',
      src: blomgramHero.src,
      caption: 'Blomgram payment interface',
    },
    sections: [
      {
        title: 'Background',
        content:
          'Global remittance and cross-border payments are riddled with high fees, slow transaction times, and limited transparency. For African users in particular, accessing reliable and fast global currency exchange remains difficult.',
      },
      {
        title: 'The Problem',
        content:
          'Existing solutions were either too expensive, unreliable, or lacked transparency in their exchange rates and fees, making cross-border transactions challenging for African users.',
      },
      {
        title: 'My Role & Contributions',
        content: (
          <ul className="list-disc space-y-2 pl-5">
            <li>Managed a distributed team of 9 engineers and designers</li>
            <li>
              Led development across mobile app, landing page, and admin
              dashboard
            </li>
            <li>
              Oversaw integration of fintech APIs (Kora, Fincra, Redbiller,
              Juicyway)
            </li>
            <li>Created PRDs and managed release cycles via Jira</li>
            <li>Collaborated with compliance teams and legal consultants</li>
          </ul>
        ),
      },
      {
        title: 'Key Challenges & Solutions',
        content: (
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Complex Regulations</h4>
              <p>
                Partnered with legal experts early and incorporated compliance
                checks in the development lifecycle.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Payment Integrations</h4>
              <p>
                Created modular API integration documentation for seamless
                testing and rollout.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Team Communication</h4>
              <p>
                Used Loom to create walkthroughs for onboarding engineers and
                stakeholders.
              </p>
            </div>
          </div>
        ),
      },
      {
        title: 'Outcome & Impact',
        content: (
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Successful beta launch with internal users testing real
              transactions
            </li>
            <li>All major payment gateways integrated in sandbox/staging</li>
            <li>Landing page launched and driving early interest</li>
            <li>Admin dashboard with compliance monitoring tools completed</li>
          </ul>
        ),
      },
    ],
    links: [{ label: 'Live Website', href: 'http://blomgram.com' }],
    mediaGallery: [
      {
        type: 'image',
        src: blomgramScreenshot1.src,
        caption: 'Mobile app interface',
      },
    ],
    testimonial: {
      quote:
        'Zekinat has been instrumental in helping us navigate complex integrations while maintaining a clear product vision. Her leadership brought focus to our team and clarity to our roadmap.',
      author: 'Lead Engineer',
      role: 'Blomgram',
    },
  },
  ipayfast: {
    title: 'iPayFast',
    description:
      'Secure cryptocurrency platform for buying, selling and managing digital assets in Africa',
    timeline: 'June 2024 – Present',
    role: 'Product Manager',
    tools: ['Figma', 'Jira', 'HubSpot', 'Twilio Auth', 'Firebase'],
    heroMedia: {
      type: 'image',
      src: ipayfastHero.src,
      caption: 'iPayFast cryptocurrency dashboard',
    },
    sections: [
      {
        title: 'Background',
        content:
          'As Africa adopts digital currencies, most platforms are either too complex or lack infrastructure for secure, real-time transactions at scale, leaving users with unreliable services and security concerns.',
      },
      {
        title: 'The Problem',
        content:
          'Users needed a simple, secure way to manage cryptocurrencies without technical complexity or concerns about transaction safety.',
      },
      {
        title: 'My Role',
        content: (
          <ul className="list-disc space-y-2 pl-5">
            <li>Wrote PRD and managed FRD for technical alignment</li>
            <li>
              Managed communication across founders, engineers, and legal teams
            </li>
            <li>
              Oversaw design and development of web and mobile experiences
            </li>
            <li>Implemented admin dashboard for transactions and KYC</li>
            <li>Ensured platform met security protocols and regulations</li>
          </ul>
        ),
      },
      {
        title: 'Key Challenges & Solutions',
        content: (
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Security vs Usability</h4>
              <p>
                Integrated biometric login, two-factor authentication, and
                layered onboarding.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Regional Liquidity</h4>
              <p>
                Worked with crypto liquidity providers and implemented dynamic
                rate engine.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Building Trust</h4>
              <p>
                Used localized marketing and third-party transaction audits to
                reinforce credibility.
              </p>
            </div>
          </div>
        ),
      },
      {
        title: 'Outcome & Impact',
        content: (
          <ul className="list-disc space-y-2 pl-5">
            <li>Launched December 2024</li>
            <li>1,000+ customers in first 3 months</li>
            <li>3 major UX iterations based on feedback</li>
            <li>High trust ratings from users</li>
          </ul>
        ),
      },
    ],
    links: [
      {
        label: 'Figma Design',
        href: 'https://www.figma.com/design/1qVp87il2mxYPTDw0PtloV/ipayfast',
      },
    ],
    mediaGallery: [
      {
        type: 'image',
        src: ipayfastScreenshot1.src,
        caption: 'Figma design of iPayFast dashboard',
      },
    ],
    testimonial: {
      quote:
        "Zekinat's leadership in launching iPayFast has been a game changer. She seamlessly managed every moving part and helped us go live faster than we imagined.",
      author: 'Co-founder',
      role: 'iPayFast',
    },
  },
  agfricmark: {
    title: 'AgfricMark',
    description:
      'Agricultural marketplace connecting farmers with verified buyers across Nigeria',
    timeline: '2024 – Present',
    role: 'Product Manager',
    tools: ['Figma', 'Jira', 'Paystack', 'HubSpot', 'Miro'],
    heroMedia: {
      type: 'image',
      src: agfricmarkHero.src,
      caption: 'AgfricMark farmer dashboard',
    },
    sections: [
      {
        title: 'Background',
        content:
          'Farmers across Nigeria face difficulties reaching buyers directly due to poorly optimized digital platforms that lack understanding of agri-commerce needs and logistics support.',
      },
      {
        title: 'The Problem',
        content:
          'Agricultural producers needed a trusted platform to connect with buyers, with integrated payments and logistics, accessible even to users with basic digital literacy.',
      },
      {
        title: 'My Role',
        content: (
          <ul className="list-disc space-y-2 pl-5">
            <li>Drove product from ideation to execution</li>
            <li>Created PRD, FRD, business model canvas, and user flows</li>
            <li>Designed mobile-first accessible interfaces</li>
            <li>Managed cross-functional stakeholders</li>
            <li>Oversaw sprint cycles and platform performance</li>
            <li>Built admin portal for vendor and transaction monitoring</li>
          </ul>
        ),
      },
      {
        title: 'Key Challenges & Solutions',
        content: (
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Last-Mile Delivery</h4>
              <p>
                Partnered with local logistics providers and integrated their
                APIs.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Building Trust</h4>
              <p>Introduced escrow payments and vendor review system.</p>
            </div>
            <div>
              <h4 className="font-semibold">Digital Literacy</h4>
              <p>
                Designed simple UX with icon-based navigation and local language
                support.
              </p>
            </div>
          </div>
        ),
      },
      {
        title: 'Outcome & Impact',
        content: (
          <ul className="list-disc space-y-2 pl-5">
            <li>Launched MVP in Jan 2025</li>
            <li>500+ users including 100 verified farmers</li>
            <li>250+ successful deliveries in first three months</li>
            <li>Interest from 2 regional agri-cooperatives</li>
          </ul>
        ),
      },
    ],
    links: [
      {
        label: 'Figma Design',
        href: 'https://www.figma.com/design/SD9sLhbQxvY5hOHS5EbLuV/AgfricMARK',
      },
    ],
    mediaGallery: [
      {
        type: 'image',
        src: agfricmarkScreenshot1.src,
        caption: 'Marketplace interface',
      },
    ],
    testimonial: {
      quote:
        'Zekinat is a rare kind of Product Manager — visionary and tactical at the same time. She carried this product from a single whiteboard sketch to a functioning platform.',
      author: 'Head of Growth',
      role: 'AgriLif',
    },
  },
  jimpaul: {
    title: 'Jimpaul.ng',
    description:
      'Real estate platform showcasing premium property offerings in Lagos',
    timeline: '2024',
    role: 'Product Manager & Consultant',
    tools: ['WordPress', 'HubSpot', 'Jira', 'Figma'],
    heroMedia: {
      type: 'image',
      src: jimpaulHero.src,
      caption: 'Jimpaul.ng property listings',
    },
    sections: [
      {
        title: 'Background',
        content:
          "Jimpaul.ng is a growing real estate firm whose digital presence was outdated and didn't reflect their premium property offerings, needing a site to showcase listings and generate leads.",
      },
      {
        title: 'The Problem',
        content:
          'The company lacked an effective online platform to build credibility, showcase properties, and capture quality leads from potential buyers.',
      },
      {
        title: 'My Role',
        content: (
          <ul className="list-disc space-y-2 pl-5">
            <li>Defined Scope of Work and project timeline</li>
            <li>Managed communication between design and development teams</li>
            <li>Optimized property listing user journeys</li>
            <li>Led HubSpot CRM integration for lead capture</li>
            <li>Coordinated feature delivery and QA testing</li>
            <li>Built out web content reflecting brand positioning</li>
          </ul>
        ),
      },
      {
        title: 'Key Challenges & Solutions',
        content: (
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Lead Capture</h4>
              <p>Integrated HubSpot forms with smart routing and CTAs.</p>
            </div>
            <div>
              <h4 className="font-semibold">Content Structure</h4>
              <p>
                Rewrote and restructured web content to align with customer
                journey.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Performance</h4>
              <p>Optimized image delivery and reduced plugin overload.</p>
            </div>
          </div>
        ),
      },
      {
        title: 'Outcome & Impact',
        content: (
          <ul className="list-disc space-y-2 pl-5">
            <li>Launched Q1 2024</li>
            <li>150+ property inquiries in first month</li>
            <li>Improved SEO and search rankings</li>
            <li>Enhanced brand credibility</li>
          </ul>
        ),
      },
    ],
    links: [{ label: 'Live Website', href: 'https://jimpaul.ng' }],
    mediaGallery: [
      {
        type: 'image',
        src: jimpaulScreenshot1.src,
        caption: 'Property listing page',
      },
    ],
  },
  quantumica: {
    title: 'Quantumica.io',
    description:
      'Renewable energy company website showcasing services and partnerships',
    timeline: '2024',
    role: 'Product Manager',
    tools: ['Figma', 'Google Analytics', 'HubSpot', 'Jira'],
    heroMedia: {
      type: 'image',
      src: '',
      caption: 'Quantumica.io homepage',
    },
    sections: [
      {
        title: 'Background',
        content:
          'Quantumica needed a dynamic website to reflect their renewable energy service offerings and industry credibility while generating leads for energy partnerships.',
      },
      {
        title: 'The Problem',
        content:
          "The existing digital presence didn't effectively communicate their expertise or convert visitors into qualified leads for energy solutions.",
      },
      {
        title: 'My Contribution',
        content: (
          <ul className="list-disc space-y-2 pl-5">
            <li>Led website development using industry references</li>
            <li>Created case studies and coordinated design reviews</li>
            <li>Managed implementation across dev and SEO teams</li>
            <li>Integrated Google Analytics and SEO best practices</li>
            <li>Optimized contact forms for lead generation</li>
          </ul>
        ),
      },
      {
        title: 'Outcome & Impact',
        content: (
          <ul className="list-disc space-y-2 pl-5">
            <li>Modern, professional website reflecting company expertise</li>
            <li>Improved lead generation through optimized forms</li>
            <li>Better analytics for tracking conversions</li>
            <li>Enhanced SEO performance</li>
          </ul>
        ),
      },
    ],
    links: [{ label: 'Live Website', href: 'https://quantumica.io' }],
  },
  terrawatt: {
    title: 'Terrawatt.io',
    description: 'Modern redesign for renewable energy solutions provider',
    timeline: '2024',
    role: 'Product Manager',
    tools: ['Figma', 'HubSpot', 'Jira'],
    heroMedia: {
      type: 'image',
      src: '',
      caption: 'Terrawatt.io homepage',
    },
    sections: [
      {
        title: 'Background',
        content:
          'Terrawatt needed a fresh redesign to better align with its modern renewable energy offerings and strengthen its position in the Nigerian energy market.',
      },
      {
        title: 'The Problem',
        content:
          "The existing website didn't effectively communicate their value proposition or showcase their renewable energy solutions in a compelling way.",
      },
      {
        title: 'My Contribution',
        content: (
          <ul className="list-disc space-y-2 pl-5">
            <li>Defined user flows and design specifications</li>
            <li>Coordinated content creation and animations</li>
            <li>Implemented dark/light mode designs</li>
            <li>Integrated HubSpot CRM</li>
            <li>Built admin portal for inquiry management</li>
          </ul>
        ),
      },
      {
        title: 'Outcome & Impact',
        content: (
          <ul className="list-disc space-y-2 pl-5">
            <li>Modern, responsive design reflecting brand values</li>
            <li>Improved user experience with dark/light modes</li>
            <li>Streamlined lead capture and management</li>
            <li>Enhanced visual storytelling of renewable solutions</li>
          </ul>
        ),
      },
    ],
    links: [{ label: 'Live Website', href: 'https://terrawatt.io' }],
  },
}
