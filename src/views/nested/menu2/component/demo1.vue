<template>
  <div>
    <transition name="el-fade-in-linear">
      <div v-if="show1" class="board-columns">
        <div v-if="show1" class="shousty" @click="showand">
          <svg-icon icon-class="shou"/>
        </div>
        <div class="board-column-header">
          {{ headerText }}
        </div>
        <draggable
          :list="list"
          :options="options"
          class="board-column-contents">
          <div v-for="element in list" :key="element.id" class="board-items">
            {{ element.name }} {{ element.id }}
          </div>
        </draggable>
      </div>
    </transition>
    <transition name="el-fade-in-linear">
      <div v-if="!show1" class="shousty1" @click="showand1">
        <svg-icon icon-class="kai"/>
      </div>
    </transition>
  </div>
</template>
<script>
import draggable from 'vuedraggable'

export default {
  name: 'DragKanbanDemo',
  components: {
    draggable
  },
  props: {
    headerText: {
      type: String,
      default: 'Header'
    },
    options: {
      type: Object,
      default() {
        return {}
      }
    },
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      show1: true
    }
  },
  methods: {
    showand() {
      this.show1 = false
    },
    showand1() {
      this.show1 = true
    }
  }
}
</script>
<style lang="scss">
.shousty{
  cursor:pointer;
  display: block;
  height: 50px;
  background:#E0E0E0;
  padding: 1px;
  line-height: 50px;
  position:absolute;
  box-shadow:1px 1px 2px #808080;
  top:calc((100vh - 140px)/2);
  margin-left: -16px;
}
.shousty:hover{
  background:#D0D0D0;
}
.shousty1{
  cursor:pointer;
  display: block;
  height: 50px;
  background:#E0E0E0;
  padding: 1px;
  line-height: 50px;
  position:absolute;
  box-shadow:1px 1px 2px #808080;
  top:calc((100vh - 140px)/2);
  margin-left: -1px;
}
.shousty1:hover{
  background:#D0D0D0;
}
.board-columns {
  width: 290px;
  min-height: 100px;
  height: auto;
  background: #fff;
  -moz-box-shadow:2px 2px 5px #333333;
  -webkit-box-shadow:2px 2px 5px #333333;
  box-shadow:2px 2px 5px #333333;
  border-radius: 3px;
  .board-column-header {
    height: 50px;
    line-height: 50px;
    overflow: hidden;
    padding: 0 20px;
    text-align: left;
    background: #333;
    color: #fff;
    font-weight: bold;
    border-radius: 3px 3px 0 0;
  }
  .board-column-contents {
    height: calc(100vh - 140px);
    border: 10px solid transparent;
    .board-items {
      cursor:pointer;
      float: left;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      margin: 5px;
      background-color: #fff;
      text-align: center;
      line-height: 70px;
      padding: 5px 10px;
      box-sizing: border-box;
      box-shadow: 0px 1px 3px 0 rgba(0,0,0,0.4);
    }
    .board-items:hover{
      font-size: 17px;
      font-weight: bold;
      box-shadow: 0px 1px 3px 0 rgba(0,0,0,0.9);
    }
  }
}
</style>

