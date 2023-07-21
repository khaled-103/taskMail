<template>
  <button>
    <img :src="icon" :alt="content">
    <span>{{ content }}</span>
  </button>
</template>

<script setup>
defineProps(["icon", "content"]);
</script>

<style scoped>
button{
    display: flex;
    align-items: center;
    background: none;
    border: none;
    margin-right: 40px;
    cursor: pointer;
    color: #4B5563;
}

img{
    margin-right: 12px;
    width: 19px;
    height: 19px;
}
</style>