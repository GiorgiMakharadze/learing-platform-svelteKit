<script lang="ts">
	import { page } from '$app/stores';
	import * as Avatar from '$lib/components/ui/avatar';
	import { Home } from 'lucide-svelte';
	import Button from './ui/button/button.svelte';
	$: pathname = $page.url.pathname;
	$: isTeacherPage = pathname?.startsWith('/teacher');
	$: isPlayerPage = pathname?.includes('/chapter');
	$: isSearchPage = pathname === '/search';
	import { enhance } from '$app/forms';
	import SearchInput from './SearchInput.svelte';
</script>

{#if isSearchPage}
	<div class="hidden md:block">
		<SearchInput />
	</div>
{/if}
<div class="flex gap-x-2 ml-auto">
	{#if isTeacherPage || isPlayerPage}
		<Button href="/" size="sm" variant="ghost">
			<Home class="size-4 mr-2" />
			Home
		</Button>
	{:else}
		<Button size="sm" variant="ghost" href="/teacher/courses">Teacher mode</Button>
	{/if}
	<Avatar.Root>
		<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
		<Avatar.Fallback>CN</Avatar.Fallback>
	</Avatar.Root>
	<form use:enhance method="POST" action="/?/logout">
		<Button size="sm" type="submit">Logout</Button>
	</form>
</div>
