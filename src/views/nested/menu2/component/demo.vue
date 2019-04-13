<template>
  <div class="board-column">
    <div class="board-column-header">
      {{ headerText }}
    </div>
    <draggable
      :list="list"
      :options="options"
      class="board-column-content">
      <div v-for="element in list" :key="element.id" class="board-item" @dblclick="clcdw(element)">
        {{ element.name }} {{ element.id }}
      </div>
    </draggable>
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
  methods: {
    clcdw(elem) {
      alert(elem.name + '  ' + elem.id)
    }
  }
}
</script>
<style lang="scss">
.board-column {
  min-width: 300px;
  height: 300px;
  height: auto;
  overflow: hidden;
  background: #fff;
  border-radius: 3px;
  margin-bottom: 20px;
  -moz-box-shadow:2px 2px 5px #333333;
  -webkit-box-shadow:2px 2px 5px #333333;
  box-shadow:2px 2px 5px #333333;

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

  .board-column-content {
    height: auto;
    overflow: hidden;
    border: 10px solid transparent;
    height: 243px;

    .board-item {
      cursor:pointer;
      float: left;
      width: 100px;
      height: 64px;
      margin: 5px;
      background-color: #fff;
      text-align: center;
      line-height: 54px;
      padding: 5px 10px;
      box-sizing: border-box;
      box-shadow: 0px 1px 3px 0 rgba(0,0,0,0.4);
    }
    .board-item:hover{
      font-size: 17px;
      font-weight: bold;
      box-shadow: 0px 1px 3px 0 rgba(0,0,0,0.9);
    }
  }
}
</style>

