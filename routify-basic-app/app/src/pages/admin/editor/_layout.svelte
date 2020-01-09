<script>
  import { url, goto } from "@sveltech/routify";

  const models = [
      ['./posts','Posts'],
      ['./comments','Comments'],
      ['./users','Users'],
  ]
</script>


{#each models as [path, name]}
     <!-- content here -->
<a href={$url(path)}>{name}</a>
{/each}