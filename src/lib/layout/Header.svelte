<script>
	import logo from '$images/logo.png';
    import SocialChannels from '../shared/SocialChannels.svelte';
</script>

<header class="w-full p-4">
    <div class="flex items-center justify-center relative flex-col md:flex-row">
        <a href="https://kit.svelte.dev" class="mb-5 md:mb-0">
            <img src={logo} alt="IlCrochetDiIli" width="250" />
        </a>
        <div class="md:absolute md:top-[50%] md:right-0 md:translate-y-[-50%]">
            <SocialChannels></SocialChannels>
        </div>
    </div>
</header>
