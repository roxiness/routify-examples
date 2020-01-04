import { Router } from "@sveltech/routify";
import { routes } from "@sveltech/routify/tmp/routes";
import App from './App.svelte';

const app = new Router({
	target: document.body,
	props: { routes }
});

export default app;