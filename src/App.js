import React from 'react'
import './styles.css'
import { createStore } from 'redux'
import { Provider, useSelector, useDispatch } from 'react-redux'
import reducer, { increment, changeText } from './reducer'
import useCount from './useCount'

const store = createStore(reducer)

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Changer />
        <ReaderDirect />
        <ReaderHook />
        <ReaderHookTwo />
      </Provider>
    </div>
  )
}

function Changer() {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.text)

  return (
    <div>
      <button onClick={() => dispatch(increment(2))}>increment</button>
      <button onClick={() => dispatch(changeText())}>{count}</button>
      <AllState />
    </div>
  )
}

function ReaderDirect() {
  const count = useSelector((state) => state.count)

  return <div>ReaderDirect: {count}</div>
}

function ReaderHook() {
  const count = useCount()

  return <div>ReaderHook {count}</div>
}

function ReaderHookTwo() {
  const count = useCount()

  return <div>ReaderHookTwo: {count}</div>
}

function AllState() {
  const state = useSelector((state) => state)

  return <pre>{JSON.stringify(state, null, 2)}</pre>
}
