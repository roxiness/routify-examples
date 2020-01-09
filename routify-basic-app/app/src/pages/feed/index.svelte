<script>
  import { url } from "@sveltech/routify";
  export let scoped;
  $: ({ posts } = scoped);
</script>

<style>
  .post {
    padding-bottom: 64px;
  }
  h3 {
    text-align: center;
  }
</style>

<div class="posts">
  {#each posts as { title, slug, body }}
    <div class="post">
      <a href={$url('../:slug', { slug })}>
        <h3>{title}</h3>
      </a>
      <hr />
      <p>{body}</p>
    </div>
  {/each}
</div>
