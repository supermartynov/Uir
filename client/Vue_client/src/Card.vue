<template>
  <div>
    <div class="style" v-for="car in cars">{{ car.name }} </div>
  </div>
</template>

<script>
export default {
name: "Card.vue",
  data() {
    return {
      cars: [
        {name: 'mersedes', velocity: 5 },
        {name: 'fer', velocity: 5 },
        {name: 'volvo', velocity: 5 },
        {name: 'fastcat', velocity: 5 },
        {name: 'slowcar', velocity: 5 },
        {name: 'realcar', velocity: 5 },
      ]
    }
  }
}
</script>

<style scoped>
  .style {
    margin: 50px;
  }
</style>
