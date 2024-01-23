import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    Svg: require('@site/static/img/microsoft_logo.svg').default,
  },
  {
    Svg: require('@site/static/img/vscode.svg').default,
  },
  {
    Svg: require('@site/static/img/mkjs.svg').default,
  },
  {
    Svg: require('@site/static/img/react_logo.svg').default,
  },
  {
    Svg: require('@site/static/img/logo.svg').default,
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
