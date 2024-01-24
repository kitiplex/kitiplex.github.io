import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/react_logo.svg').default,
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </>
    ),
  },
  {
    title: 'Developer program',
    Svg: require('@site/static/img/microsoft_logo.svg').default,
    description: (
      <>
        Lorem ipsum dolor sit amet, <code>consectetur adipiscing elit</code>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </>
    ),
  },

];

function Feature({ Svg, title, description }) {
  return (

    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>

  );
}
