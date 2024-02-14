import React from 'react';
import SearchBar from '@theme-original/SearchBar';
import { DocSearch } from '@docsearch/react';

import '@docsearch/css';

export default function SearchBarWrapper(props) {
  return (
    <DocSearch
      appId="KLI8CT6349"
      indexName="kitiplexio"
      apiKey="5037344df426897d733d0efebb8b6d12"
    />
  );
}
