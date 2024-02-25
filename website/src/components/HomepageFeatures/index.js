import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    scale: 1.0,
    title: 'Developers',
    Svg: require('@site/static/img/vendor/microsoft_logo.svg').default,
    description: (
      <>
        Encompasses professionals who specialize in creating software applications and solutions specifically tailored for Microsoft's Windows operating system.
      </>
    ),
  },

  {
    scale: 1.0,
    title: 'Kali WSL',
    Svg: require('@site/static/img/vendor/kali-logo-blue.svg').default,
    description: (
      <>
        A Linux distribution designed for Windows, offering security professionals an integrated platform for penetration testing and ethical hacking within Windows environments.
      </>
    ),
  },

  {
    scale: 1.0,
    title: 'Docusaurus',
    Svg: require('@site/static/img/vendor/docusaurus_logo.svg').default,
    description: (
      <>
        An open-source documentation framework that simplifies the process of building and maintaining websites for software projects.
      </>
    ),
  },
];

const Feature = ({ scale, Svg, title, description }) => (
  <div className={clsx('col col--4')}>
    <div className="text--center">
      <Svg style={{ transform: `scale(${scale})` }} className={styles.featureSvg} role="img" />
    </div>
    <div className="text--center padding-horiz--md">
      <Heading as="h3">{title}</Heading>
      <p>{description}</p>
    </div>
  </div>
);

const HomepageFeatures = () => (
  <section className={styles.features}>
    <div className="container">
      <div className="row">
        {FeatureList.map(({ Svg, ...props }, idx) => (
          <Feature key={idx} Svg={Svg} {...props} />
        ))}
      </div>
    </div>
  </section>
);

export default HomepageFeatures;
