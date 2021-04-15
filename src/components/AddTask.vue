<template>
  <div class="add-task card" :style="{ background: bg }">
    <h1 class="card__tile">Add a task to your list</h1>
    <input type="text" class="card__input" placeholder="Task Name">
    <button class="card__btn">AddTask</button>
  </div>
</template>

<script>
export default {
  name: 'AddTask',
  props: {
    bg: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
</style>