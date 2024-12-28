import { SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import UseLayoutEffect from './UseLayoutEffect'
import MemoEffect from './MemoEffect'
import ForwardRef from './ForwardRef'

const Hooks = () => {

    // useLayoutEffect
    // useRef
    // useMemo
    // useCallback

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <UseLayoutEffect /> */}
      {/* <MemoEffect /> */}
      <ForwardRef />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    
})
export default Hooks;