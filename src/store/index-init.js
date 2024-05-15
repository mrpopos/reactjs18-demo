import { legacy_createStore as createStore } from 'redux';

const myState = {
  value: 0
}

function counterReducer(state = myState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 }
    case 'DECREMENT':
      return { value: state.value - 1 }
    default:
      return state
  }
}

const store = createStore(counterReducer)

store.subscribe(() => {
  console.log('store updated:', store.getState().value)
})

store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
