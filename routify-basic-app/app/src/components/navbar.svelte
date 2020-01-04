<script>
  import { url } from "@sveltech/routify";
  export let user;

  const links = [
    ["Feed", "./feed"],
    ["About", "./about"],
    ["Editor", "./editor", true, "/icons/edit.svg"],
    ["User", "./user", true, "/icons/user.svg"]
  ];
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
    color: var(--color1);
    padding: 8px 48px;
  }

  .inline-svg-icon{
  display: inline-block;
  fill: currentColor;
  width: 24px;
  height: 24px;
  vertical-align: middle;
}
</style>

<div class="navbar">
  <div class="left">
    <a href={$url('./index')}>Home</a>
  </div>
  <div class="center">
    {#each links as [name, path, right]}
      {#if !right}
        <a href={$url(path)}>{name}</a>
      {/if}
    {/each}
  </div>
  <div class="right">
    {#each links as [name, path, right, icon]}
      {#if right}
        <a href={$url(path)} style="padding-left:12px; ">
          <object
            data={icon}
            type="image/svg+xml"
            style="width:24px; stroke: red; color: red; fill: red" />
          <!-- <img src={icon} alt="" style="width:24px; color: red; fill: currentColor" /> -->
        </a>
      {/if}
    {/each}
  </div>
</div>
asd
<svg class="inline-svg-icon" style="color: var(--color4)">
  <use xlink:href="build/bundle.svg#edit"></use>
</svg>