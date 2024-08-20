import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';

import clsx from 'clsx';

import styles from './styles.module.css';

const features = [
  {
    title: 'Less to Learn',
    content:
      "You don't need to learn and configure many build tools. Instant reloads help you focus on development. When it's time to deploy, your bundles are optimized automatically.",
  },
  {
    title: 'Only One Dependency',
    content:
      'Your app only needs one build dependency. We test Create React App to make sure that all of its underlying pieces work together seamlessly – no complicated version mismatches.',
  },
  {
    title: 'No Lock-In',
    content:
      'Under the hood, we use webpack, Babel, ESLint, and other amazing projects to power your app. If you ever want an advanced configuration, you can ”eject” from Create React App and edit their config files directly.',
  },
];
const components = [
  {
    title: 'Create AI📚',
    content: "🔥Bringing AI to the world.",
    url: 'https://ai.543x.com/',
  },
  {
    title: 'Swap📝',
    content: '🔥THE MONETARY FUTURE:AT THE INTERSECTION OF FREE BANKING, CRYPTOGRAPHY, AND DIGITAL CURRENCY ',
    url: 'https://s.543x.com/',
  },
  {
    title: 'What is Bitcoin🐱',
    content: '🔥Bitcoin: A Peer-to-Peer Electronic Cash System',
    url: 'https://www.543x.com/',
  },
  {
    title: 'Create React App🧠',
    content: '🔥Set up a modern web app by running one command.',
    url: 'https://e.543x.com/',
  },
  {
    title: 'Create React App 💻',
    content: '🔥The library for web and native user interfaces.',
    url: 'https://r.543x.com/',
  },
  {
    title: 'Create Solana🚀',
    content: '🔥Bringing Blockchain to the World.',
    url: 'https://b.543x.com/',
  },
];
function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      permalink={'/'}
      description={'Set up a modern web app by running one command.'}
    >
      <div className={clsx('hero hero--dark', styles.heroBanner)}>
        <div className="container">
          <img
            className={clsx(styles.heroBannerLogo, 'margin-vert--md')}
            alt="Create React App logo"
            src={useBaseUrl('img/logo.svg')}
          />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.getStarted}>
            <Link
              className="button button--outline button--primary button--lg"
              to={useBaseUrl('docs/create-reacts%20docs/getting-started')}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
      {features && features.length && (
        <div className={styles.features}>
          <div className="container">
            <div className="row">
              {features.map(({ title, content }, idx) => (
                <div key={idx} className={clsx('col col--4', styles.feature)}>
                  <h2>{title}</h2>
                  <p>{content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
     
     {components.length > 0 && (
        <div className={styles.features}>
          <div className="container">
            <div className="row">
              {components.map(({ title, url, content }, idx) => (
                <div key={idx} className={clsx('col col--4', styles.feature)}>
                  <div className={styles.card}>
                    <h3>{title}</h3>
                    <p>{content}</p>
                    <Link className="button button--primary" to={url}>
                    Visit website
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default Home;
