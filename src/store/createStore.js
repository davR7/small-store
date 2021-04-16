import Vue from 'vue'

const err01 = 'does not exist'
const err02 = 'is not function'
const err03 = 'function returning undefined'

function showErr(msg){
  const err = new Error(msg)
  console.error(err.message)
}

function createStore({ state, getters, mutations }){
  const myGetters = {}

  if(getters){
    Object.entries(getters).forEach(([key, value])=> {
      Object.defineProperty(myGetters, key, {
        get: () => {
          return typeof value !== 'function' ? 
          showErr(`${key} ${err02} (getters)`) :
          value(state) === undefined ? 
          showErr(`${key} ${err03} (getters)`) : 
          value(state)
        }
      })
    })
  }

  return {
    state: Vue.observable(state),
    getters: myGetters,
    commit(key, ...args){
      const cb = key => key == key
      !Object.keys(mutations).some(cb) ? 
      showErr(`function ${key} ${err01} (mutations)`) :
      typeof mutations[key] !== 'function' ? 
      showErr(`${key} ${err02} (mutations)`) :
      mutations[key](state, ...args)
    }
  }
}

export default createStore