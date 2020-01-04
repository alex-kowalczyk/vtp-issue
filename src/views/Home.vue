<template>
  <div class="hello">
    <h1>{{ page }}</h1>
    <router-link :to="{'name': 'page2', 'params': {'page': 'Page-2'}}">Page 2</router-link>
    <br/>
    <router-link :to="{'name': 'page1', 'params': {'page': 'Page-1'}}">Page 1</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: ['page'],
  title() { console.log('title called: ', this.page); return (this && this.page) || 'No page prop'; }
}
</script>

<style>
</style>
