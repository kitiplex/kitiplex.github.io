import React from 'react';
import { DocSearch } from '@docsearch/react';

import '@docsearch/css';

<link rel="preconnect" href="https://KLI8CT6349-dsn.algolia.net" crossorigin />

export default function SearchBarWrapper(props) {
  return (
    <DocSearch
      appId="KLI8CT6349"
      indexName="kitiplexio"
      apiKey="5037344df426897d733d0efebb8b6d12"
      placeholder="Search Kitiplex..."
      getMissingResultsUrl={({ query }) => {
        return `https://github.com/algolia/docsearch/issues/new?title=${query}`;
      }}

      insights      
    />
  );
}
