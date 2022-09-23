<template>
<div>{{ src }}
  <div v-on:click="clicked()" v-bind:class="{addBorder:drawBorder}">
    <img :src="src" :alt="alt">
  </div>
</div>
</template>


<script>
import mixin from './../mixins/mixin'

export default {
  data() {
    return {
      drawBorder: false
    }
  },
  props: {
    alt: String,
    title: String,
    src: String
  },
  mixins: [mixin]
}
</script>

<style>
.addBorder {
  border: 1vw solid red;
}
</style>
