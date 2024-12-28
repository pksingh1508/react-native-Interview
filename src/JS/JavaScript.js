import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import LetVarConst from './LetVarConst';
import Reconciliation from './Reconciliation';
import DeepShallowCopy from './DeepShallowCopy';
import SpreadRestOperator from './SpreadRestOperator';
import CurryingAndHoisting from './CurryingAndHoisting';
import GeneratorsAndIterators from './GeneratorsAndIterators';
import DebounceThrottleExample from './DebouncingAndThrottling';
import PrototypalInheritance from './PrototypalInheritance';
import Callbacks from './Callbacks';
import PromiseAsyncFetchTryCatch from './PromiseAsyncFetchTryCatch';
import LazyLoadingAndCodeSplitting from './LazyLoadingAndCodeSplitting';
import Interceptors from './Interceptors';

const JavaScript = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
        {/* <Callbacks /> */}
        {/* <LetVarConst /> */}
        {/* <Reconciliation /> */}
        {/* <DeepShallowCopy /> */}
        {/* <SpreadRestOperator /> */}
        {/* <CurryingAndHoisting /> */}
        {/* <PrototypalInheritance /> */}
        {/* <GeneratorsAndIterators /> */}
        {/* <DebounceThrottleExample /> */}
        {/* <PromiseAsyncFetchTryCatch /> */}
        {/* <LazyLoadingAndCodeSplitting /> */}
        <Interceptors />
    </SafeAreaView>
  )
}

export default JavaScript;