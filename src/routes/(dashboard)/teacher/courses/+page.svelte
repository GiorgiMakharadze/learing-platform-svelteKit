<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { PlusCircle } from 'lucide-svelte';

	export let data;
</script>

<div class="p-6">
	<div class="flex items-center py-4">
		<Button href="/teacher/create" class="ml-auto">
			<PlusCircle class="size-4 mr-2" />
			New Course
		</Button>
	</div>
</div>
