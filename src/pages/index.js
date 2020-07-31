import { Layout, Sections } from "components";
import { getProjectsFrom, processMkd } from "../lib/api";

import Head from "next/head";
import PropTypes from "prop-types";
import { join } from "path";
import schema from "assets/schema";

const { Landing, FeaturedProjects, AllProjects } = Sections;
const { arrayOf, shape, string } = PropTypes;

function Index({ featuredProjects, allProjects, miscData }) {
  return (
    <>
      <Head>
        <title>Anthony Ngo</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Landing data={miscData.landing} />
        <FeaturedProjects id="featured_projects" projects={featuredProjects} />
        <AllProjects id="all_projects" projects={allProjects} />
      </Layout>
    </>
  );
}

Index.propTypes = {
  featuredProjects: arrayOf(
    shape({
      html: string,
      frontMatter: schema,
    })
  ),
  allProjects: arrayOf(
    shape({
      html: string,
      frontMatter: schema,
    })
  ),
};

export default Index;

export async function getStaticProps() {
  const featuredProjectsDir = join(process.cwd(), "src/assets/featured");
  const allProjectsDir = join(process.cwd(), "src/assets/projects");
  let featuredProjects = await getProjectsFrom(featuredProjectsDir);
  let allProjects = await getProjectsFrom(allProjectsDir);

  return {
    props: {
      featuredProjects,
      allProjects,
      miscData: {
        landing: await processMkd("src/assets/landing.md"),
      },
    },
  };
}
