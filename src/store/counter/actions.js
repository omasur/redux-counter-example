export function increment(incrementBy) {
  return {
    type: "INCREMENT",
    incrementBy: incrementBy || 1
  }
}

export function fetching() {
  return {
    type: "FETCHING"
  }
}

export function decrement(decrementBy) {
  return {
    type: "DECREMENT",
    decrementBy: decrementBy || 1
  }
}

export function reset() {
  return {
    type: "RESET"
  }
}
