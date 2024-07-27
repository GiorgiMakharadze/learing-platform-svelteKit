<script lang="ts">
	import * as Sheet from '$lib/components/ui/sheet';
	import { Menu } from 'lucide-svelte';
</script>

<Sheet.Root>
	<Sheet.Trigger class="md:hidden pr-4 hover:opacity-75 transition"><Menu /></Sheet.Trigger>
	<Sheet.Content class="md:hidden p-0 bg-background" side="left"></Sheet.Content>
</Sheet.Root>
