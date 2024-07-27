<script>
	import '@fontsource-variable/noto-sans';
	import '../app.pcss';

	import { ModeWatcher } from 'mode-watcher';
	import { Toaster } from '$lib/components/ui/sonner';
</script>

<Toaster richColors closeButton theme="light" />
<ModeWatcher defaultMode={'light'} />

<main class="h-screen">
	<slot />
</main>
