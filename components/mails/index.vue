<template>
  <div>
    <mailsItem v-for="mail in mails" :key="mail.id" :mail="mail"/>
    <p v-if="mails.length === 0">No email here</p>
  </div>
</template>

<script setup lang="ts">
defineProps(['mails'])
</script>

<style scoped>
p{
  text-align: center;
  margin-top: 12px;
}
</style>