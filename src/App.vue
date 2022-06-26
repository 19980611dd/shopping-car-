<template>
  <div id="app">
    <MyHeader title="购物车案例" color="black" background="skyblue"></MyHeader>
    <MyGoods v-for="obj in list" :key="obj.id" :gObj="obj"></MyGoods>
    <MyFooter :arr="list" @changeAll="allFn"></MyFooter>
  </div>
</template>
<script>
import MyHeader from '@/components/MyHeader.vue'
import MyGoods from '@/components/MyGoods.vue'
import MyFooter from '@/components/MyFooter.vue'
import axios from 'axios'
export default {
  name: 'App',
  components: {
    MyHeader,
    MyGoods,
    MyFooter
  },
  data() {
    return {
      list: [] // 商品所有数据
    }
  },
  created() {
    this.getGoods()
  },
  methods: {
    async getGoods() {
      const res = await axios({
        url: '/api/cart'
      })
      this.list = res.data.list
      console.log(res)
    },
    allFn(val) {
      this.list.forEach((obj) => (obj.goods_state = val))
      // 把MyFooter内的全选状态true/false同步给所有小选框的关联属性上
    }
  }
}
</script>
<style scoped>
#app {
  box-sizing: border-box;
  padding: 50px 0;
  max-height: 100vh;
  overflow: auto;
}
</style>
