<template>
  <div class="footer_wrap">
    <footer>
      <div class="copyright">
        <ul class="rights">
          <li><span>© {{ year }} mirumi</span></li>
          <li><a href="https://github.com/mirumirumi?tab=repositories&q=twicode">Contribute on GitHub</a></li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<style scoped lang="scss">
.footer_wrap {
  footer {
    padding: 8px 0 9px;
    .copyright {
      ul.rights {
        display: flex;
        justify-content: center;
        margin: auto 37%;
        padding: 0.3rem 0 0;
        // border-top: solid 1px #5e5e5e;
        li {
          margin: auto 0.7em;
          list-style: none;
          font-size: 0.88rem;
          span {
            color: #7F7F7F;
            font-weight: 400;
            text-decoration: none;
          }
          a {
            color: #7F7F7F;
            font-weight: 400;
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>
