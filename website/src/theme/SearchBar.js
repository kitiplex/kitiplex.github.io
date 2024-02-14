import React from 'react';
import SearchBar from '@theme-original/SearchBar';
import { DocSearch } from '@docsearch/react';
import Layout from '@theme/Layout';

import '@docsearch/css';

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@docsearch/css@3" />
export default function SearchBarWrapper(props) {
  return (
    <DocSearch
      appId="KLI8CT6349"
      indexName="kitiplexio"
      apiKey="5037344df426897d733d0efebb8b6d12"
      debug="false"
      container='#'
      className='DocSearch'
      placeholder="Search Kitiplex"
      getMissingResultsUrl={({ query }) => {
        return `https://github.com/algolia/docsearch/issues/new?title=${query}`;
      }}
      insights
    />
  );
}
