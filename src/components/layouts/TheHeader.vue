<template>
  <div class="header_wrap">
    <header>
      <div class="logos">
        <div class="logo_img">
          <img src="/maru.png" alt="TwiCode-Logo">
        </div>
        <div class="logo_txt">
          <span>TwiCode</span>
        </div>
      </div>
      <div class="links">
        <ul class="page_menu">
          <li><router-link to="/privacy">Privacy</router-link></li>
          <li><router-link to="/terms">Terms</router-link></li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.header_wrap{
  height: $header_height;
  padding: 0 40px;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    .logos {
      display: flex;
      align-items: center;
      .logo_img {
        margin-right: 9px;
        img {
          width: 2em;
        }
      }
      .logo_txt {
        font-size: 1.13em;
        font-weight: bold;
      }
    }
    .links {
      ul.page_menu {
        display: flex;
        margin: 0;
        padding: 0;
        li {
          margin: auto 0.7em;
          list-style: none;
          a {
            text-decoration: none;
          }
        }
      }
    }
  }
}
</style>
