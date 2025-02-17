import { HeroSection } from "./components/pages/home/hero-section";
import { HighlightedProjects } from "./components/pages/home/highlighted-projects";
import { KnowTechs } from "./components/pages/home/know-techs";
import { WorkExperience } from "./components/pages/home/work-experience";
import { HomePageData } from "./types/pages-info";
import { fetchHygraphQuery } from "./utils/fetch-hygraph-query";

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

export default async function Home() {
  const { page: pageData, workExperiences } = await getPageData();
  return (
    <>
      <HeroSection homeInfo={pageData} />
      <KnowTechs techs={pageData.knownTechs} />
      <HighlightedProjects projects={pageData.highlightProjects} />
      <WorkExperience experiences={workExperiences} />
    </>
  );
}
