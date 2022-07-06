import React , {useDebugValue,useEffect} from 'react'

const useCustom = () => {

    useDebugValue('Custom Hook Runs Once')
  
    useEffect(()=>{

        console.log('Hii');
        },[])
}

export default useCustom