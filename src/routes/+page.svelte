<script>
	import cover from '$images/cover.jpeg';
    import arrowDown from '$icons/arrow.png';
	import ProductList from '../lib/product/ProductList.svelte';
	import TutorialList from '$lib/tutorials/TutorialList.svelte';
    import SocialChannels from '$lib/shared/SocialChannels.svelte';
    import products from '../assets/data/products.json';
</script>

<svelte:head>
	<title>Il Crochet Di Ily</title>
</svelte:head>
<section class="cover relative">
    <h1 class="cover__title text-white text-4xl absolute top-[50%] left-[50%] z-20 translate-x-[-50%] translate-y-[-50%]">Welcome to my lovely world</h1>
    <div class="relative z-10 w-full h-[400px] bg-cover bg-no-repeat bg-center" style="background-image: url({cover})"></div>
</section>

<section id="aboutme" class="bg-white p-10">
    <h2 class="text-[#ce8b8b] mb-5 text-6xl italic text-center prova">Chi sono</h2>
    <p class="text-center font-light text-xl text-[#454545]">
        Piacere di conoscerti, mi chiamo Ilaria! Amo il lavoro artigianale di qualsiasi genere, dalla lavorazione del legno, alla lavorazione con 
        l'uncinetto.<br>Nella vita mi occupo di sviluppo web, ma il mio sogno sarebbe una baita in montagna, in mezzo alla natura, dove poter dare vita alle mie creazioni!<br><br>		
	</p>
</section>

<section class="px-5 py-8" id="myProducts">
    <h2 class="text-[#ce8b8b] mb-5 text-6xl italic text-center">I miei lavori</h2>
    <p class="text-center text-[#454545] text-xl">
        Qui sotto puoi trovare tutti i miei lavori. Contattami sui miei canali socials.
        <!-- Li troverai disponibili e acquistabili sul portale Etsy -->        
    </p>
    <div class="flex justify-center mt-5">
        <SocialChannels></SocialChannels>
    </div>
    <div class="flex justify-center p-5">
        <img src={arrowDown} alt="" width="100">
    </div>
    <ProductList productList={products.shoes}></ProductList>
</section>
<section id="contacts"></section>

<section class="px-5 py-8 bg-white" id="myTutorials">
    <h2 class="text-[#ce8b8b] mb-5 text-6xl italic text-center">Resina acrilica</h2>
    <div class="flex justify-center p-5">
        <img src={arrowDown} alt="" width="100">
    </div>
    <ProductList productList={products.resin}></ProductList>
</section>

<section class="px-5 py-8" id="myTutorials">
    <h2 class="text-[#ce8b8b] mb-5 text-6xl italic text-center">Bouquet di cera</h2>
    <div class="flex justify-center p-5">
        <img src={arrowDown} alt="" width="100">
    </div>
    <ProductList productList={products.bouquets}></ProductList>
</section>

<section class="px-5 py-8 bg-white" id="myTutorials">
    <h2 class="text-[#ce8b8b] mb-5 text-6xl italic text-center">Cestini uncinetto</h2>
    <div class="flex justify-center p-5">
        <img src={arrowDown} alt="" width="100">
    </div>
    <ProductList productList={products.baskets}></ProductList>
</section>

<section class="px-5 py-8" id="myTutorials">
    <h2 class="text-[#ce8b8b] mb-5 text-6xl italic text-center">Tutorials</h2>
    <div class="flex justify-center p-5">
        <img src={arrowDown} alt="" width="100">
    </div>
    <TutorialList></TutorialList>
</section>

<style>
	.cover__title {
        font-family: 'Dancing Script', cursive;
    }
</style>