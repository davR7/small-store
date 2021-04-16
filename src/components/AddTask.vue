<template>
  <div 
    class="add-task card" 
    :style="{ background: bg }"
    >
    <h1 
      class="card__tile"
    >Add a task to your list</h1>
    <input 
      type="text" 
      class="card__input"
      v-model="task.name" 
      placeholder="Task Name"
    >
    <button 
      class="card__btn"
      @click="addTask()"
    >AddTask</button>
  </div>
</template>

<script>
import store from '@/store'

export default {
  name: 'AddTask',
  props: {
    bg: {
      type: String,
      required: true
    }
  },
  data(){
    return {
      task: {
        id: 0,
        name: ''
      }
    }
  },
  methods: {
    addTask(){
      store.commit('addTask', { 
        id: this.task.id += 1, 
        name: this.task.name
      })
      this.task.name = ''
    }
  }
};
</script>

<style>
</style>