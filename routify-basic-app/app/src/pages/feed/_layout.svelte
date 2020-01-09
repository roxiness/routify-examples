<script>
  import { posts } from "../../stores";
  posts.hydrate();
</script>

<style>
  .container {
    width: 512px;
    margin: auto;
    padding-top: 96px;
  }
</style>

<div class="container">
  <slot scoped={{ posts: $posts }}>
    <!-- optional fallback -->
  </slot>
</div>
