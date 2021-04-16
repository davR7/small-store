<template>
  <div 
    class="del-task card" 
    :style="{ background: bg }"
    >
    <h1 
      class="card__tile"
    >Delete a task to your list</h1>
    <input 
      type="text" 
      class="card__input input-wd" 
      v-model.number="taskId"
      placeholder="Task ID"
    >
    <button 
      class="card__btn"
      @click="delTask()"
    >DelTask</button>
  </div>
</template>

<script>
import store from '@/store'

export default {
  name: 'DelTask',
  props: {
    bg: {
      type: String,
      required: true
    }
  },
  data(){
    return {
      taskId: null
    }
  },
  methods: {
    delTask(){
      store.commit('delTask', this.taskId)
      this.taskId = null
    }
  }
};
</script>

<style>
</style>