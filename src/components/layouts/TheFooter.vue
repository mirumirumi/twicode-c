<template>
  <div class="footer_wrap">
    <footer>
      <div class="copyright">
        <ul class="rights">
          <li><span>©mirumi</span></li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.footer_wrap {
  footer {
    padding: 13px 0 0;
    .copyright {
      ul.rights {
        display: flex;
        justify-content: center;
        margin: auto 37%;
        padding: 0.3rem 0 5px;
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
        }
      }
    }
  }
}
</style>
