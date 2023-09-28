<script>
	import cover from '../lib/images/cover.jpeg';
</script>

<svelte:head>
	<title>Il Crochet Di Ili</title>
	<meta name="description" content="Uncinetto, lana, cotone e passione...Cuciti a mano con amore" />
</svelte:head>

<!-- <section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>

	<Counter />
</section> -->
<section class="cover relative">
    <h1 class="cover__title text-white text-4xl absolute top-[50%] left-[50%] z-20 translate-x-[-50%] translate-y-[-50%]">Welcome to my lovely world</h1>
    <div class="relative z-10 w-full h-[400px] bg-cover bg-no-repeat bg-center" style="background-image: url({cover})"></div>
</section>

<section id="aboutme" class="bg-white p-10">
    <h1 class="text-[#454545] mb-5 font-normal text-center">Mi chiamo Ilaria</h1>
    <p class="text-center font-light text-lg text-[#454545]">
        Amo il lavoro artigianale di qualsiasi genere, dalla lavorazione del legno, alla lavorazione con 
        l'uncinetto.<br>Nella vita mi occupo di sviluppo web, ma il mio sogno sarebbe una baita in montagna, in mezzo alla natura, dove poter dare vita alle mie creazioni!</p>
</section>

<style>
	.cover__title {
        font-family: 'Dancing Script', cursive;
    }
</style>