<template>
  <div class="board">
    <div class="div_sty1">
      <Kanban :key="1" :list="list1" :options="options" class="kanban todo" header-text="资讯"/>
      <Kanban :key="2" :list="list2" :options="options" class="kanban working" header-text="商机"/>
      <Kanban :key="3" :list="list3" :options="options" class="kanban done" header-text="知识"/>
    </div>
    <div class="div_sty2">
      <kanban1 :key="4" :list="list4" :options="options" header-text="主体"/>
    </div>
  </div>
</template>
<script>
import Kanban from './component/demo'
import kanban1 from './component/demo1'

export default {
  name: 'DragKanbanDemo',
  components: {
    Kanban,
    kanban1
  },
  data() {
    return {
      options: {
        group: 'mission'
      },
      list1: [
        { name: 'Test', id: 1 },
        { name: 'Test', id: 2 },
        { name: 'Test', id: 3 },
        { name: 'Test', id: 4 }
      ],
      list2: [
        { name: 'Test', id: 5 },
        { name: 'Test', id: 6 },
        { name: 'Test', id: 7 }
      ],
      list3: [
        { name: 'Test', id: 8 },
        { name: 'Test', id: 9 },
        { name: 'Test', id: 10 }
      ],
      list4: [
        { name: 'Test', id: 11 },
        { name: 'Test', id: 12 },
        { name: 'Test', id: 13 },
        { name: 'Test', id: 14 },
        { name: 'Test', id: 15 },
        { name: 'Test', id: 16 },
        { name: 'Test', id: 17 },
        { name: 'Test', id: 18 }
      ]
    }
  },
  watch: {
    list1() {
      this.addLocal()
    },
    list2() {
      this.addLocal()
    },
    list3() {
      this.addLocal()
    },
    list4() {
      this.addLocal()
    }
  },
  created() {
    this.fundList()
  },
  methods: {
    addLocal() {
      localStorage.setItem('list1', JSON.stringify(this.list1))
      localStorage.setItem('list2', JSON.stringify(this.list2))
      localStorage.setItem('list3', JSON.stringify(this.list3))
      localStorage.setItem('list4', JSON.stringify(this.list4))
    },
    fundList() {
      const list1 = JSON.parse(localStorage.list1)
      const list2 = JSON.parse(localStorage.list2)
      const list3 = JSON.parse(localStorage.list3)
      const list4 = JSON.parse(localStorage.list4)
      if (list1 || list2 || list3 || list4) {
        this.list1 = list1
        this.list2 = list2
        this.list3 = list3
        this.list4 = list4
      }
    }
  }
}
</script>
<style>
    .div_sty1{
        width: 800px;
        float: left;
    }
    .div_sty2{
      float: right;
    }

</style>

<style lang="scss">
.board {
  margin: 20px;
}
.kanban {
  &.todo {
    .board-column-header {
      background: #4A9FF9;
    }
  }
  &.working {
    .board-column-header {
      background: #f9944a;
    }
  }
  &.done {
    .board-column-header {
      background: #2ac06d;
    }
  }
}
</style>

