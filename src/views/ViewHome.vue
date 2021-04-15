<template>
  <div class="view-home">
    <PageHeader title="SmallStore">
      Example using Vue-Observable as a lightweight 
      state management.
    </PageHeader>
    <div class="task-section centered-text">
      <AddTask bg="#98b99a" />
      <DelTask bg="#ec485f" />
    </div>
    <div class="tasks">
      <TaskList />
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import AddTask from '@/components/AddTask.vue'
import DelTask from '@/components/DelTask.vue'
import TaskList from '@/components/TaskList.vue'

export default {
  name: 'ViewHome',
  components: {
    PageHeader,
    AddTask,
    DelTask,
    TaskList
  },
};
</script>

<style scoped>
.tasks,
.task-section {
  display: flex;
  padding: 0 10px;
}

.tasks {
  justify-content: center;
}

.card {
  color: #fff;
  border: 1px solid #ddd;
  padding-bottom: 1rem;
  flex: 1;
}
</style>