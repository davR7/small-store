<template>
  <div class="task-list">
    <div class="task-list__tot centered-text">
      <h2>Total Tasks:</h2>
    </div>
    <ul class="task-list__items">
      <li v-for="task in items" :key="task.id" class="task-list__task">
        <span class="task-list__item">ID:</span>
        <span class="task-list__item">Task:</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TaskList'
}
</script>

<style>
.task-list {
  list-style-type: circle;
  padding: 0;
}

.task-list__task {
  padding: 0;
  margin: 0;
}

.task-list__item {
  display: inline-block;
  padding-right: 0.5rem;
}
</style>