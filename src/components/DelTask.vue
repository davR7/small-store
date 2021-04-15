<template>
  <div class="del-task card" :style="{ background: bg }">
    <h1 class="card__tile">Delete a task to your list</h1>
    <input type="text" class="card__input input-wd" placeholder="Task ID">
    <button class="card__btn">DelTask</button>
  </div>
</template>

<script>
export default {
  name: 'DelTask',
  props: {
    bg: {
      type: String,
      required: true
    }
  },
};
</script>

<style>
</style>