<script>
  import { url } from "@sveltech/routify";
</script>

<!--ROUTIFY:option precache-order=1 bundle=true name="admin" -->

<routify:options routify-cache="true" />
<h1>ADMIN LAYOUT</h1>

<a href={$url('./editor')}>Editor</a>
<a href={$url('./settings')}>Settings</a>

<slot>
  <!-- optional fallback -->
</slot>
