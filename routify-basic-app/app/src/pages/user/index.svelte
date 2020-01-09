<script>
  import { goto } from '@sveltech/routify'
  import { user } from "../../stores";
  import { api } from "../../utils";

  const form = JSON.parse(JSON.stringify($user));

  async function handleSubmit() {
    const result = await api("users/"+$user._id, form);
    
  }

  async function handleSignout(){
    const result = await user.signout();
    $goto('/')
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <input type="text" bind:value={form.username} />
  <input type="text" bind:value={form.pass} />
  <input type="submit" />
</form>


<button on:click="{handleSignout}">Sign out</button>