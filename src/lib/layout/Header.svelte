<script>
	import logo from '../../assets/images/logo.png';
    import SocialChannels from '../shared/SocialChannels.svelte';
</script>

<header class="w-full p-4">
    <div class="flex justify-center relative">
        <a href="https://kit.svelte.dev">
            <img src={logo} alt="IlCrochetDiIli" width="200" />
        </a>
        <div class="absolute top-[50%] right-0 translate-y-[-50%]">
            <SocialChannels></SocialChannels>
        </div>
    </div>
</header>
