<template>
<div id="app">
  <h1>{{ message }}</h1>
  <!-- A v-if and v-else is used to change content of UI -->
  <div v-if="seen">
    <img src="./../assets/shop-piece.jpeg" width="300" alt="yellow and jade green vase">
    <img src="./../assets/shop-piece-2.png" width="300" alt="black and yellow vase">
    <img src="./../assets/shop-piece-3.jpeg" width="300" alt="magenta, amber and jade green vase">
    <img src="./../assets/shop-sandwich.jpeg" width="300" alt="glass cheeseburger sculpture">
  </div>
  <h1 v-else>Shop page under construction.</h1>

</div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {

      seen: false,
      message: 'Shop'
    }
  }
}
</script>
