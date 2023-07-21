<template>
  <div tabindex="0" @keypress="handleKeyPress">
    <h2 class="title">Inbox</h2>
    <div class="header">
      <div class="header__checkbox">
        <input @keypress="handleKeyPress" v-model="selectAll" type="checkbox" />
        <span> Email Selected({{ mailsStore.emailSelectedCount }}) </span>
      </div>
      <div v-if="mailsStore.emailSelectedCount > 0" class="header__actions">
        <general-button
          @click="mailsStore.markMailsAsRead('inbox')"
          icon="/inboxIcon.png"
          content="Mark as read(r)"
        />
        <general-button
          @click="mailsStore.archiveActionMails"
          icon="/archiveIcon.png"
          content="Archive(a)"
        />
      </div>
    </div>
    <hr />
    <mails :mails="mailsStore.getInboxMails" />
  </div>
</template>

<script setup>
import { useMails } from "../stores/useMails";
useHead({
  title: "mail / inbox",
});
const mailsStore = useMails();
const selectAll = ref(false);
watch(selectAll, () => {
  if (selectAll.value) mailsStore.slectAllMail("inbox");
  else mailsStore.resetSelected();
});


const handleKeyPress = (event) => {
  console.log('r');
  if (event.key == "r") mailsStore.markMailsAsRead("inbox");
  if (event.key == "a") mailsStore.archiveActionMails();
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