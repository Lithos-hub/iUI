<template>
	<div class="bg-black/20 rounded-lg w-full">
		<div class="p-2.5 bg-slate-500/20 border-b border-b-slate-500/50 font-bold text-xl">
			<slot name="header" />
		</div>
		<div class="p-5 flex flex-col justify-center items-center min-h-[300px] backdrop-blur-sm">
			<slot name="body" />
		</div>
	</div>
</template>