import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--dark', styles.heroBanner)}>
      <div className="container">
        <img
          className={clsx(styles.heroBannerLogo, 'margin-vert--sm')}
          src={require('@site/static/img/main/logo-dark.png').default}
          alt="logo-dark"
          height={200}
          width={200}
        />

        <Heading as="h1" className="hero__title">
          <span
            className={styles.heroTitleTextHtml}
            dangerouslySetInnerHTML={{
              __html: "<b>Build</b><br>Innovate<br><b>Inspire</b>",
            }}
          />
        </Heading>

        <p className="hero__subtitle">
          {"Open source projects and samples from Kitimi."}
        </p>

        <div className={styles.indexCtas}>
          <Link className="button button--primary button--lg" to="/docs">
            Learn more
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
        {/* <Heading as='h3' className="hero__subtitle text-center mt-1 mb-1">
            {"Features"}
          </Heading> */}
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

export default Home;
