<template>
  <div>
    <sideBarItem icon="/inboxIcon.png" title="Inbox" url="/inbox" :number="mailStore.inboxMailsCount"/>
    <sideBarItem icon="/archiveIcon.png" title="Archive" url="/archive" :number="mailStore.archiveMailsCount"/>

  </div>
</template>

<script setup lang="ts">
import { useMails } from "../../stores/useMails";
const mailStore = useMails();
</script>

<style>
</style>