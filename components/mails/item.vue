<template>
  <div class="mail__item" :class="{ notRead: !mail.isRead }">
    <div class="mail__item--checkbox">
      <input
        v-model="mailStore.selectedMails"
        :value="mail.id"
        type="checkbox"
      />
      <h5  @click="mailStore.setCurrentActiveMail(mail)"  class="pointer">{{ mail.title }}</h5>
    </div>
    <hr />
  </div>
</template>

<script setup lang="ts">
import { useMails } from "../../stores/useMails";

defineProps(["mail"]);
const mailStore = useMails();
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
.mail__item--checkbox {
  padding: 16px 0 16px 24px;
  color: #121829;
  display: flex;
}
input {
  margin-right: 20px;
}
.notRead {
  background-color: #f3f6fb;
}
.mail__item:hover{
  background-color: #D1E2FF;
}
</style>