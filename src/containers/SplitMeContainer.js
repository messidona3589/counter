import React, {Suspense} from 'react';

const SplitMeTemp = React.lazy(()=>import('../components/SplitMe'));
const SplitMeContainer = ()=> {
  <Suspense fallback={<div>loading...</div>}>
    <SplitMeTemp>
  </Suspense>
};

export default SplitMeContainer;
