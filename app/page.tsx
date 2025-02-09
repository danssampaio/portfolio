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
      knownTechs(first: 100) {
        iconSvg
        name
        startDate
      }
    }
      
  }
`;

  return fetchHygraphQuery(query, 60 * 60 * 24);
};

export default async function Home() {
  const { page: pageData } = await getPageData();

  return (
    <>
      <div className="bg-hero-image bg-cover bg-fixed bg-no-repeat">
        <HeroSection homeInfo={pageData} />
        <KnowTechs techs={pageData.knownTechs}/>
        <HighlightedProjects />
        <WorkExperience />
      </div>
    </>
  );
}
