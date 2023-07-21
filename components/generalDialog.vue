<template>
  <transition>
    <div tabindex="0" v-if="mailsStore.currentActiveMail" @keyup="handleKeyUp" class="dialog">
      <div
        @click="mailsStore.clearCurrentActiveMail"
        class="dialog__overlay"
      ></div>
      <div class="dialog__content">
        <div class="dialog__content__header">
          <div
            @click="mailsStore.clearCurrentActiveMail"
            class="dialog__content__close"
          >
            <span class="pointer">Close(Esc)</span>
          </div>
          <div class="dialog__actions">
            <general-button
              @click="mailsStore.markMailsAsRead($route.path.substring(1))"
              icon="/inboxIcon.png"
              content="Mark as read(r)"
            />
            <general-button
              v-if="$route.name != 'archive'"
              @click="archiveCurrentMail"
              icon="/archiveIcon.png"
              content="Archive(a)"
            />
          </div>
        </div>
        <div>
          <h3>{{ mailsStore.currentActiveMail?.title }}</h3>
          <p>{{ mailsStore.currentActiveMail?.content }}</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { useMails } from "../stores/useMails";
const mailsStore = useMails();
const archiveCurrentMail = () => {
  mailsStore.archiveActionMails();
  mailsStore.clearCurrentActiveMail();
};
const handleKeyUp = (event) => {
  console.log(event.key);
  if (event.key == "Escape") mailsStore.clearCurrentActiveMail();
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
.dialog {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all .5s;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.dialog__overlay {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  width: 100%;
  height: 100%;
}
.dialog__content {
  width: 60%;
  margin-left: auto;
  min-height: 100vh;
  background: white;
  position: relative;
  z-index: 1001;
  padding: 32px;
}
.dialog__content__header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
}
.dialog__content h3 {
  margin-bottom: 20px;
}
.dialog__actions {
  display: flex;
}
</style>