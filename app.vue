<template>
  <div>
    <NuxtLayout>
      <NuxtPage></NuxtPage>
      <general-dialog/>
    </NuxtLayout>
  </div>
</template>
<script setup >
import { archive,inbox } from "./data/mails";
import { useMails } from "./stores/useMails";
const mailsStore = useMails();
useHead({
  link: [
    {
      rel: "preconnect",
      type: "text/css",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      type: "text/css",
      href: "https://fonts.gstatic.com",
    },

    {
      rel: "stylesheet",
      type: "text/css",
      href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&display=swap",
    },
    {
      rel: "stylesheet",
      type: "text/css",
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
    },
  ],
});
onMounted(() => {
  mailsStore.setInboxMails(inbox);
  mailsStore.setArchiveMails(archive);
});
</script>
<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
  color: inherit;
}
hr {
  border-top: #e5e7eb;
}
body{
  font-family: 'Plus Jakarta Sans', sans-serif;
}
</style>
