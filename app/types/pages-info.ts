import type { RichTextContent } from '@graphcms/rich-text-types'
import { KnownTech, Project } from './projects'
import { WorkExperience } from './work-experience'

export type Social = {
  url: string
  ariaLabel: string
  iconSvg: string
}

export type Curriculum = {
  name: string
  ariaLabel: string
  url: string
}

export type HomePageInfo = {
  introduction: {
    raw: RichTextContent
  }
  technologies: KnownTech[]
  profilePicture: {
    url: string
  }
  socials: Social[]
  curriculums: Curriculum[]
  knownTechs: KnownTech[]
  highlightProjects: Project[]
}

export type ProjectPageData = {
  project: Project
}

export type ProjectsPageData = {
  projects: Project[]
}

export type ProjectsPageStaticData = {
  projects: {
    slug: string
  }[]
}

export type HomePageData = {
  page: HomePageInfo
  workExperiences: WorkExperience[]
}