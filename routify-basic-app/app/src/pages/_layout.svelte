<script>
  import { user } from "../stores";
  import Navbar from "../components/navbar.svelte";
  user.authenticate();
</script>

{#if !$user.isUnauthenticated}
  
  <Navbar {user} />
  <slot />
{/if}
