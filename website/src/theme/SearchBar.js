import React from 'react';
import { DocSearch } from '@docsearch/react';

import '@docsearch/css';
export default function SearchBarWrapper(props) {
  return (
    <div>
      <DocSearch
        appId="KLI8CT6349"
        indexName="kitiplexio.tmp"
        apiKey="5037344df426897d733d0efebb8b6d12"
        // placeholder="Search kitiplex..."

        resultsFooterComponent={({ state }) => {
          return <h3>{state.context.nbHits} match found</h3>;
        }}
        maxResultsPerGroup="7"
        // insights
      />
    </div>
  );
}
