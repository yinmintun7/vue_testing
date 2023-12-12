<template>
  <div>
    <h1>I am testion{{ name }}</h1>
  <slot>Empty slot</slot>
  </div>
  
</template>

<script>
export default {
  props: ["name"],
  name: "TestPage",
};
</script>

<style></style>
