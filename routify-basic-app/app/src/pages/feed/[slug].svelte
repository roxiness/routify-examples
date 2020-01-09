<script>
  export let scoped, slug;
  $: ({ posts } = scoped);
  $: post = posts.find(post => post.slug === slug);
</script>


{#if post}
  <h1>{post.title}</h1>
  <p>{post.body}</p>
{/if}
