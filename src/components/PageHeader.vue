<template>
  <div class="page-header centered-text ">
    <h1>{{ title }}</h1>
    <p>
      <slot />
    </p>
    <hr class="page-header__row" />
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    title: {
      type: String,
      Required: true,
    },
  },
};
</script>

<style>
.page-header__row {
  margin: 20px 10px;
}
</style>