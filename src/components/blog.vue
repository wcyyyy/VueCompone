<template>
  <div>
    <h1>博客列表</h1>
    <ul>
      <li v-for="(blog,key) in blogs" :key='id' :blog='title'></li>
    </ul>
  </div>
  
</template>
<script>
export default {
  data:{
    blogs:[
      {id: 1, title: 'Blog1111'},
      {id: 3, title: 'Blog3333'},
      {id: 5, title: 'Blog5555'},
    ]
  },
  components:{
    Blog
  }
}
</script>
<style lang="stylus" scoped>

</style>