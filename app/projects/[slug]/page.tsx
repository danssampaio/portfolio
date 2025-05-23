import { ProjectDetails } from "@/app/components/pages/project/project-details";
import { ProjectSections } from "@/app/components/pages/project/project-sections";
import {
  ProjectPageData,
  ProjectsPageStaticData,
} from "@/app/types/pages-info";
import { fetchHygraphQuery } from "@/app/utils/fetch-hygraph-query";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type ProjectProps = {
  params: Promise<{
    slug: string;
  }>;
};

const getProjectDetails = async (slug: string): Promise<ProjectPageData> => {
  const query = `
    query ProjectQuery {
      project(where: {slug: "${slug}"}) {
        pageThumbnail {
          url
        }
        thumbnail {
          url
        }
        sections {
          title
          description
          image {
            url
          }
        }
        title
        shortDescription
        description {
          raw
          text
        }
        technologies {
          name
        }
        liveProjectUrl
        githubUrl
      }
    }
    `;

  return fetchHygraphQuery<ProjectPageData>(query, 1000 * 60 * 60 * 24);
};

export async function generateStaticParams() {
  const query = `
    query ProjectsSlugsQuery {
      projects(first: 100){
        slug
      }
    }
  `;

  const { projects } = await fetchHygraphQuery<ProjectsPageStaticData>(
    query,
    1000 * 60 * 60 * 24
  );

  return projects;
}

export async function generateMetadata({
  params,
}: ProjectProps): Promise<Metadata> {
  const param = await params;
  const data = await getProjectDetails(param.slug);
  const project = data.project;

  return {
    title: project.title,
    description: project.description.text,
    openGraph: {
      images: [
        {
          url: project.thumbnail.url,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function Project({ params }: ProjectProps) {
  const param = await params;
  const { project } = await getProjectDetails(param.slug);

  if (!project?.title) return notFound();

  return (
    <>
      <ProjectDetails project={project} />
      <ProjectSections projectSections={project.sections} />
    </>
  );
}
