<script lang="ts">
	import { LogOut } from 'lucide-svelte';
	import Button from './ui/button/button.svelte';
	import * as Avatar from '$lib/components/ui/avatar';
</script>

<div class="flex gap-x-2 ml-auto">
	<Button href="/" size="sm" variant="ghost">
		<LogOut />
		Exit
	</Button>

	<Avatar.Root>
		<Avatar.Image src="https://avatars.githubusercontent.com/u/7221389?v=4" alt="Avatar" />
		<Avatar.Fallback>LA</Avatar.Fallback>
	</Avatar.Root>
	<form method="POST" action="/?/logout">
		<Button size="sm" type="submit">Logout</Button>
	</form>
</div>
