<template>
  <div class="div_sty">
    <grid-layout
      :layout.sync="layout"
      :col-num="12"
      :row-height="30"
      :is-draggable="true"
      :is-resizable="true"
      :is-mirrored="false"
      :vertical-compact="true"
      :margin="[10, 10]"
      :use-css-transforms="true">
      <GridItem
        v-for="item in layout"
        :key="item.i"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        class="card">
        {{ item.i }}
      </GridItem>
    </grid-layout>
  </div>
</template>

<script>
import VueGridLayout from 'vue-grid-layout'
export default {
  name: '',
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem
  },

  data() {
    return {
      layout: [
        { 'x': 0, 'y': 1, 'w': 2, 'h': 4, 'i': '测试一', 'maxW': 1, 'maxH': 1 },
        { 'x': 2, 'y': 2, 'w': 2, 'h': 4, 'i': '测试二', 'maxW': 2, 'minH': 2 },
        { 'x': 0, 'y': 3, 'w': 2, 'h': 4, 'i': '测试三', 'minW': 2, 'minH': 2 },
        { 'x': 2, 'y': 4, 'w': 2, 'h': 4, 'i': '测试四', 'minW': 2, 'minH': 2 }
      ]
    }
  },
  methods: {
    movedEvent: function(i, newX, newY, e) {
      localStorage.setItem('pandectDisplace', JSON.stringify(this.layout))
    },
    resizedEvent: function(i, newH, newW, newHPx, newWPx) {
      // console.log("RESIZED i=" + i + ", H=" + newH + ", W=" + newW + ", H(px)=" + newHPx + ", W(px)=" + newWPx);
      localStorage.setItem('pandectDisplace', JSON.stringify(this.layout))
    }
  }
}
</script>

<style>
.card{
  width: 100px;
  height: 100px;
  line-height: 150px;
  background: #898989;
  text-align: center;
  color: black;
  font-size: 25px;
  font-weight: bold;
}
</style>
