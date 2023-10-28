<script lang="ts">
	import type { Tutorial } from "./types/tutorial.type";

	export let tutorial: Tutorial;
</script>


<div class="tutorial__card mb-5 h-full relative flex justify-between flex-col">
	<div class="my-3">
		<figure class="text-sm mb-3 font-light border-4 border-[#d0aeb0] bg-white p-2 shadow-sm hover:shadow-md transition-all ease-in-out duration-300">
			<a href="/tutorials/{tutorial.details.pdf}" class="no-underline" target="_blank">
				<img src="/photo/{tutorial.details.imgsrc}" alt={tutorial.details.title}>
			</a>
		</figure>
		<div>
			<a href="/tutorials/{tutorial.details.pdf}" class="no-underline">{tutorial.details.title}</a>
		</div>
	</div>
	<div class="flex items-center justify-between gap-2">
		<div class="flex gap-2">
			<a href="/tutorials/{tutorial.details.pdf}" target="_blank" class="p-2 bg-[#f8e5e6] transition-all ease-in-out hover:shadow-md duration-300 shadow-sm rounded-sm text-[#454545] uppercase no-underline text-sm">
				Scarica
			</a>
		</div>
	</div>
</div>

<style></style>