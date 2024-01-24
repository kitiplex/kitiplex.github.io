import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

import backgroundImage from '/img/banner_devops.png';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--light', styles.heroBanner)}>
      <div className="container">
      <img
          className={clsx(styles.heroBannerLogo, 'margin-vert--sm')}
          src={'/img/kitiplex-dark.png'}
          alt="kitiplex-dark"
        />
        

        <Heading as="h1" className="hero__title hero--brand">
          {/* {siteConfig.title} */}
          Code · Inonnovate · Inspire
        </Heading>
        
        <p className="hero__subtitle">
          {/* {siteConfig.tagline} */}
          
          </p>
          
        <div className={(styles.buttons, 'margin-vert--lg')}>
          <Link
            className="button button--secondary button--lg"
            to="docs/dev">
            Learn more
          </Link>
        </div>
      

      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={""}
      description="Kitiplex website. <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
