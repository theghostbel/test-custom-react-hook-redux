import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import Lib from './Lib'

const useCount = () => {
  const count = useSelector((state) => state.count)
  const text = useSelector((state) => state.text)

  //useEffect(() => {
  //  console.log('useEffect all', count, text)
  //})

  useEffect(() => {
    Lib.sideEffect()
  }, [text])

  return count
}

export default useCount
