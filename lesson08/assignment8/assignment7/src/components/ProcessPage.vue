<template>

<div id="app">
  <!--  <img  v-bind:key="item" :src="require('../assets/' + item + '.jpg')" width="500">-->
  <ImageMarkup :title="item.title" :alt="item.alt" :src="item_src" v-for="(item,id) in images" :key="id" />
</div>
</template>
<!--The image component should have props for at least the image src, alt, & title attributes, use prop validation.-->
<!--Refactored into component props and validation-->
<script>
import ImageMarkup from './ImageMarkup.vue';

export default {
  components: {
    ImageMarkup
  },
  data() {
    return {
      images: [{
          title: 'processOne',
          alt: 'two women blowing glass with furnace',
          src: './processOne.jpg'
        },
        {
          title: 'processTwo',
          alt: 'woman blowing glass',
          src: './processTwo.jpg'
        },
        {
          title: 'processThree',
          alt: 'two woman blowing glass at bench',
          src: './processThree.jpg'
        }
      ]
    }
  }
}
</script>
