import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import Image from 'next/image'
import { projectData } from '@/data/projects'
import { ProjectMedia } from '@/data/types'
function ProjectSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function ProjectDetail({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3">{title}</Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

function MediaItem({ media }: { media: ProjectMedia }) {
  return (
    <div className="mt-4">
      {media.type === 'image' && (
        <Image
          src={media.src}
          alt={media.caption || ''}
          width={800}
          height={450}
          className="rounded-lg"
        />
      )}
      {media.type === 'video' && (
        <div className="aspect-video w-full">
          <iframe
            src={media.src}
            className="h-full w-full rounded-lg"
            allowFullScreen
          />
        </div>
      )}
      {media.type === 'figma' && (
        <a href={media.src} className="text-teal-500 hover:text-teal-600">
          View Figma Design
        </a>
      )}
      {media.caption && (
        <p className="mt-2 text-sm text-zinc-500">{media.caption}</p>
      )}
    </div>
  )
}

export default function ProjectPage({
  params,
}: {
  params: { projectName: string }
}) {
  const project = projectData[params.projectName]

  if (!project) {
    return (
      <SimpleLayout
        title="Project not found"
        intro="The project you are looking for does not exist."
      >
        <div>Please check the URL or go back to the projects list.</div>
      </SimpleLayout>
    )
  }

  return (
    <SimpleLayout title={project.title} intro={project.description}>
      {project.heroMedia && (
        <div className="mb-12 mt-8">
          <MediaItem media={project.heroMedia} />
        </div>
      )}

      <div className="space-y-20">
        <ProjectSection title="Project Details">
          <ProjectDetail title="Timeline">{project.timeline}</ProjectDetail>
          <ProjectDetail title="My Role">{project.role}</ProjectDetail>
        </ProjectSection>

        {project.sections.map((section) => (
          <ProjectSection key={section.title} title={section.title}>
            <ProjectDetail title="">{section.content}</ProjectDetail>
          </ProjectSection>
        ))}

        {project.mediaGallery && project.mediaGallery.length > 0 && (
          <ProjectSection title="Media Gallery">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {project.mediaGallery.map((media, index) => (
                <MediaItem key={index} media={media} />
              ))}
            </div>
          </ProjectSection>
        )}

        {project.testimonial && (
          <ProjectSection title="Testimonial">
            <blockquote className="border-l-4 border-teal-500 pl-4 text-lg italic">
              &quot;{project.testimonial.quote}&quot;
              <footer className="mt-2 font-semibold not-italic">
                — {project.testimonial.author}
                {project.testimonial.role && `, ${project.testimonial.role}`}
              </footer>
            </blockquote>
          </ProjectSection>
        )}

        <ProjectSection title="Links">
          {project.links.map((link) => (
            <ProjectDetail key={link.label} title={link.label}>
              <a href={link.href} className="text-teal-500 hover:text-teal-600">
                {link.href}
              </a>
            </ProjectDetail>
          ))}
        </ProjectSection>
      </div>
    </SimpleLayout>
  )
}
