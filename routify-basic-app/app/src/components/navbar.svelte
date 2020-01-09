<script>
  import { url } from "@sveltech/routify";
  export let user;

  const links = [
    ["Home", "./index"],
    ["Feed", "./feed"],
    ["About", "./about"],
    ["Editor", "./editor", true, "edit"],
    ["User", "./user", true, "user"]
  ];

  $: isAdmin = user._id && user.roles.find(role => role === "admin");
</script>

<style>
  .navbar {
    height: 64px;
    background: white;
    display: grid;
    grid-template-columns: 196px auto 196px;
    align-items: center;
    padding: 0 32px;
  }
  .left {
  }
  .center {
    text-align: center;
  }
  .right {
    text-align: right;
  }
  .center a {
    padding: 4px 0px;
    margin: 0 48px;
  }

  .center a:hover {
    color: var(--color2);
    border-bottom: 1px solid var(--color2);
  }

  .inline-svg-icon {
    display: inline-block;
    fill: currentColor;
    width: 24px;
    height: 24px;
    vertical-align: middle;
  }

  a.icon {
    display: inline-block;
  }

  a.subtle {
    font-size: 0.9rem;
    color: var(--color4);
  }
  a.subtle:hover {
    color: var(--color3);
  }
</style>

<div class="navbar">
  <div class="left">
    <a href={$url('./index')}>My App</a>
  </div>
  <div class="center">
    {#each links as [name, path, right]}
      {#if !right}
        <a href={$url(path)}>{name}</a>
      {/if}
    {/each}
  </div>
  <div class="right">

    {#if user._id}
      <span style="color: var(--color4)">
        <a href={$url('./user')}>
          {user.username}
          <svg class="inline-svg-icon">
            <use xlink:href="build/bundle.svg#user" />
          </svg>
        </a>
      </span>
    {:else}
      <a href={$url('./signin')} class="subtle">Sign in</a>
    {/if}

    {#if isAdmin}
      <a href={$url('./admin')} class="icon" style="padding-left: 32px">
        <svg class="inline-svg-icon" style="color: var(--color4)">
          <use xlink:href="build/bundle.svg#edit" />
        </svg>
      </a>
    {/if}
  </div>
</div>
