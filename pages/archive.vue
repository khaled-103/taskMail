<template>
  <div tabindex="0" @keyup="handleKeyUp">
    <h2 class="title">Archive</h2>
    <div class="header">
      <div class="header__checkbox">
        <input @keyup="handleKeyUp" v-model="selectAll" type="checkbox" />
        <span> Email Selected({{ mailsStore.emailSelectedCount }}) </span>
      </div>
      <div v-if="mailsStore.emailSelectedCount > 0" class="header__actions">
        <general-button
          @click="mailsStore.markMailsAsRead('archive')"
          icon="/inboxIcon.png"
          content="Mark as read(r)"
        />
      </div>
    </div>
    <hr />
    <mails :mails="mailsStore.getArchiveMails" />
  </div>
</template>

<script setup>
import { useMails } from "../stores/useMails";

const mailsStore = useMails();
const selectAll = ref(false);
useHead({
  title: "mail / archive",
});
watch(selectAll, () => {
  if (selectAll.value) mailsStore.slectAllMail("archive");
  else mailsStore.resetSelected();
});

const handleKeyUp = (event) => {
  console.log("r");
  if (event.key == "r") mailsStore.markMailsAsRead("archive");
};
onMounted(() => {
  mailsStore.resetSelected();
});
</script>

<style scoped>
.title {
  padding-top: 24px;
  padding-left: 24px;
  margin-bottom: 32px;
}
.header {
  margin-bottom: 24px;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__checkbox input {
  margin-right: 12px;
}
.header__actions {
  display: flex;
}
</style>