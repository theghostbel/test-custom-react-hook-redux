export const defaultState = {
  count: 0,
  text: 'change text'
}
export const INCREMENT = 'INCREMENT'
export const CHANGE_TEXT = 'CHANGE_TEXT'

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + action.payload
      }
    case CHANGE_TEXT:
      return {
        ...state,
        text:
          defaultState.text +
          ' ' +
          String.fromCharCode(28 + Math.floor(Math.random() * 100))
      }
    default:
      return state
  }
}

export function increment(payload) {
  return {
    type: INCREMENT,
    payload
  }
}

export function changeText() {
  return {
    type: CHANGE_TEXT
  }
}
