<template>
  <div class="sideBar">
    <div>
      <img class="sideBar__logo" src="/logo.png" alt="" />
      <sideBarList />
    </div>
    <sideBarItem icon="/logoutIcon.png" title="logout" number="-1" url="" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.sideBar {
  padding: 12px;
  width: 260px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f8fafc;
  border-right: 1px solid #e5e7eb;
}
.sideBar__logout img {
  width: 24px;
  height: 24px;
  margin-right: 4px;
  color: red;
}
.sideBar__logo {
  width: 40px;
  height: 20px;
  margin-left: 8px;
  margin-bottom: 32px;
}
</style>