import { type Metadata } from 'next'
import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ContactSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-8">{children}</div>
    </Section>
  )
}

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with me for collaborations or questions.',
}

export default function Contact() {
  return (
    <SimpleLayout
      title="Let's connect"
      intro="I'm always open to discussing new opportunities, collaborations, or just chatting about product management and technology."
    >
      <div className="space-y-12">
        <ContactSection title="Contact Me">
          <div className="prose-slate prose mt-6 dark:prose-invert">
            <p>
              You can reach me directly at{' '}
              <a
                href="mailto:zekinat.akinwande@gmail.com"
                className="text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300"
              >
                zekinat.akinwande@gmail.com
              </a>
              , or use the contact form below.
            </p>
          </div>
        </ContactSection>

        <ContactSection title="Send a Message">
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-zinc-700 dark:text-zinc-200"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="mt-1 block w-full rounded-md border-zinc-300 bg-white px-3 py-2 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm dark:border-zinc-600 dark:bg-zinc-800"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-zinc-700 dark:text-zinc-200"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-1 block w-full rounded-md border-zinc-300 bg-white px-3 py-2 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm dark:border-zinc-600 dark:bg-zinc-800"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-zinc-700 dark:text-zinc-200"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                className="mt-1 block w-full rounded-md border-zinc-300 bg-white px-3 py-2 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm dark:border-zinc-600 dark:bg-zinc-800"
              />
            </div>
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:bg-teal-500 dark:hover:bg-teal-600"
            >
              Submit
            </button>
          </form>
        </ContactSection>
      </div>
    </SimpleLayout>
  )
}
