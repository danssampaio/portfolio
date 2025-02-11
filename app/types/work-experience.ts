
import type { RichTextContent } from '@graphcms/rich-text-types'
import { KnownTech } from './projects'

export type WorkExperience = {
    companyName: string,
    companyUrl: string,
    companyLogo: {
        url: string
    },
    role: string,
    description: {
        raw: RichTextContent
    },
    technologies: KnownTech[]
    startDate: string
    endDate: string
}