import createStore from './createStore.js'

const store = createStore({
    state: {
      tasks: []
    },
    getters: {
      tasks(state){
        return state.tasks
      }
    },
    mutations: {
      addTask(state, payload){
        state.tasks.push(payload)
      },
      delTask(state, payload){
        const delIdx = state.tasks
          .map(obj => obj.id)
          .indexOf(payload)
        if (delIdx !== -1) {
          state.tasks
            .splice(delIdx, 1)
        }
      }
    },
})

export default store