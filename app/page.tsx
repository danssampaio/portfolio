import { HomePageData } from "./types/pages-info";
import { fetchHygraphQuery } from "./utils/fetch-hygraph-query";
import { lazy, Suspense } from "react";

const getPageData = async (): Promise<HomePageData> => {
  const query = `
  query PageInfoQuery {
    page(where: {slug: "home"}) {
      introduction {
        raw
      }
      technologies {
        name
      }
      profilePicture {
        url
      }
      socials {
        url
        iconSvg
      }
      knownTechs (first: 30) {
        iconSvg
        name
        experienceTime
        techUrl
      }
      highlightProjects {
        slug
        thumbnail {
          url
        }
        title
        shortDescription
        technologies {
          name
        }
      }
    }
    workExperiences(orderBy: startDate_DESC){
      companyName
      companyUrl
      companyLogo{
        url
      }
      role
      description{
        raw
      }
      technologies{
        name
      }
      startDate
      endDate
    }
  }
`;

  return fetchHygraphQuery(query, 60 * 60 * 24);
};

const HeroSection = lazy(() => import("./components/pages/home/hero-section"));
const KnowTechs = lazy(() => import("./components/pages/home/know-techs"));
const HighlightedProjects = lazy(
  () => import("./components/pages/home/highlighted-projects")
);
const WorkExperience = lazy(
  () => import("./components/pages/home/work-experience")
);

export default async function Home() {
  const { page: pageData, workExperiences } = await getPageData();
  return (
    <>
      <section className="flex flex-col gap-11">
        <Suspense fallback={<p>Carregando página...</p>}>
          <HeroSection homeInfo={pageData} />
        </Suspense>
        <Suspense fallback={<p>Carregando página...</p>}>
          <KnowTechs techs={pageData.knownTechs} />
        </Suspense>
        <Suspense fallback={<p>Carregando página...</p>}>
          <HighlightedProjects projects={pageData.highlightProjects} />
        </Suspense>
        <Suspense fallback={<p>Carregando página...</p>}>
          <WorkExperience experiences={workExperiences} />
        </Suspense>
      </section>
    </>
  );
}
