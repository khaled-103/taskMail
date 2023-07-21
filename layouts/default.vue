<template>
  <div class="layout">
    <sideBar />
    <main>
      <slot />
    </main>
  </div>
</template>
  
<style scoped>
.layout{
  display: flex;
}
main{
  flex-grow: 1;
}

</style>
  
  