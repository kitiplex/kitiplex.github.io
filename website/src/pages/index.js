import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

// Import your new background image
import backgroundImage from '/img/kitiplex-social-card.png';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx('hero hero--dark', styles.heroBanner)}

      // style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* <img class="hero--image" src="/img/kitiplex_banner.png" width="400" alt="hero home"></img> */}
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="docs/dev"
          >
            Learn more
          </Link>
        </div>
        <br />
        {/* <Link
          className="button button--secondary button--lg"
          to="/team" 
        >
          📦Team Kitimi📦
        </Link> */}
        
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title=""
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
