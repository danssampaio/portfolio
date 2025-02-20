import type { RichTextContent } from '@graphcms/rich-text-types'

export type KnownTech = {
  iconSvg: string
  name: string
  experienceTime: string
  techUrl: string
}

export type ProjectSection = {
  title: string,
  description: string,
  image: {
    url: string
  }
}

export type Project = {
  slug: string,
  thumbnail: {
    url: string
  },
  shortDescription: string,
  title: string,
  technologies: KnownTech[],
  pageThumbnail: {
    url: string
  },
  sections: ProjectSection[],
  description: {
    raw: RichTextContent,
    text: string
  }
  liveProjectUrl?: string,
  githubUrl?: string
}