<template>
  <nuxt-link active-class="active" :to="url" class="list__item">
    <div class="list__item--content">
        <img :src="icon" :alt="title">
        <span>{{ title }}</span>
    </div>
    <span v-if="number >= 0" class="list__item--number">{{ number }}</span>
  </nuxt-link>
</template>

<script setup lang="ts">
defineProps(['icon','title','url','number'])
</script>

<style scoped>
.list__item{
    display: flex;
    align-items: center;
    padding: 6px 12px;
    justify-content: space-between;
    margin-bottom: 12px;
}
.list__item:hover{
    padding-left: 14px;
}
.list__item--content{
    display: flex;
    align-items: center;
}
.list__item--content img{
    width: 24px;
    height: 24px;
    margin-right: 8px;
    color: red;
}
.active{
    background: #D6E2FB;
    border-radius: 54px;
}
</style>