import React from 'react';
import { DocSearch } from '@docsearch/react';

import '@docsearch/css';


export default function SearchBarWrapper(props) {
  return (
    <div>
      <DocSearch
        appId="KLI8CT6349"
        indexName="kitiplexio.tmp"
        apiKey="cdf06a43d64035e0552f501bc01ce7e6"
        // placeholder="Search kitiplex..."

        resultsFooterComponent={({ state }) => {
          return <h3>{state.context.nbHits} match found</h3>;
        }}

        maxResultsPerGroup="7"
        insights
      />
    </div>
  );
}
