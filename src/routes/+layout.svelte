<script>
	import '@fontsource-variable/noto-sans';
	import '../app.pcss';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<div class="h-full">
	<div class="h-[80px] md:pl-56 fixed insert-y-0 w-full z-50">
		<Navbar />
	</div>
	<div class="hidden md:flex h-full w-56 flex-col fixed insert-y-0 z-50"></div>
	<main class="md:pl-56 pt-[80px] h-full">
		<slot />
	</main>
</div>
