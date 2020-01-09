<script>
  import { goto } from '@sveltech/routify'
  import { user } from "../stores";
  import { api } from "../utils.js";
  const url = "http://localhost:3000/login";

  let username = "admin";
  let password = "pass";

  async function handleSubmit() {
    const result = await user.signin({ username, password });
    if(result) $goto('../')
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <span>Username</span>
  <input type="text" bind:value={username} />
  <span>Password</span>
  <input type="text" bind:value={password} />
  <input type="submit" />
</form>
