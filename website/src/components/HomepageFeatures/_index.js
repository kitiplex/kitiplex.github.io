import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    Svg: require('@site/static/img/microsoft_logo.svg').default,
  },
  {
    Svg: require('@site/static/img/header-blue.svg').default,
  },
  {
    Svg: require('@site/static/img/openai_logo.svg').default,
  },
  {
    Svg: require('@site/static/img/logo.svg').default,
  },
  {
    Svg: require('@site/static/img/openai-logomark.svg').default,
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/openai_logo.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--lg">
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
