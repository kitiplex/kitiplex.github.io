import clsx from 'clsx';
import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';

import LogoBlue from '@site/static/img/main/logo-blue.svg';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--dark', styles.heroBanner)}>
      <div className="container">
        <LogoBlue className={clsx(styles.heroBannerLogo, 'margin-vert--sm')}
          title='LogoBlue'
          alt="LogoBlue"
          height={250}
          width={200}
        />

        <Heading as="h1" className="hero__title">
          <span className={styles.heroTitleTextHtml}>
            <b>Build</b>
            <br />
            Innovate
            <br />
            <b>Inspire</b>
          </span>
        </Heading>
        <Heading as="p" className="hero__subtitle">
          <span className={styles.heroSubTitleTextHtml}>
            {"Open source projects and samples from Kitimi"}
          </span>
        </Heading>

        <div className={styles.indexCtas}>
          <Link className="button button--outline button--primary button--lg px-4" to="/docs">
            Learn more<span className="pl-1 animate-pulse"></span>
          </Link>
        </div>
      </div>
    </header>
  );
}

function Home() {
  return (
    <Layout title="" description="">
      <HomepageHeader />
      <main>
        {/* <p className="text-2xl py-6 text-center font-semi-bold text--kiti-white">{"Features"}</p> */}
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

export default Home;
