<template>
  <header>
    <nav class="navbar">
      <div class="navbar-brand">
        <!-- <router-link class="navbar-item"
                     :to="{ name: 'Home'}">
          <img src="/static/assets/logo.png">&nbsp;&nbsp;某个币
        </router-link> -->

        <router-link
       class="navbar-item"
                     :to="{ name: 'HomePage' }">
          主页
        </router-link>

        <router-link
       class="navbar-item"
                     :to="{ name: 'Square' }">
          广场
        </router-link>

        <router-link
       class="navbar-item"
                     :to="{ name: 'Community' }">
          社区
        </router-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
        </div>
      </div>

    </nav>
  </header>
</template>

<script>

export default {
  name: 'Header',
  // data() {
  //   return {

  //   }
  // }
}
</script>

<!--<style scoped>
.navbar {
  background-color: #91cbe9;
  color: #fafafa !important;
}
.navbar-item {
  color: #0787c8 !important;
}
</style>-->
<style scoped>
.notification {
  margin-bottom: 0;
  font-size: 0.8rem;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-all;
}
header {
  position: relative;
}
.navbar {
  background-color: #000000;
  /*background: none;
  position: absolute; */
  top: 0;
  left: 0;
  right: 0;
  padding-left: 30px;
}
/* .sig-home-header .navbar {
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
} */

.navbar-item {
  font-weight: 700;
  padding: 0.7rem 2rem;
  /* margin: 0.5rem 2rem; */
  font-size: 1.14rem;
  color: #fff;
}
a.navbar-item:hover {
  color: #fdda46 !important;
  background-color: transparent !important;
}
.avatar {
  border-radius: 100%;
  margin-right: 8px;
  max-height: 2.9rem;
}
</style>
