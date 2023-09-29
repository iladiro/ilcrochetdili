<script>
	import Header from '../lib/layout/Header.svelte';
	import '../styles.css';
	import Nav from '../lib/layout/Nav.svelte';
	import Footer from '../lib/layout/Footer.svelte';
</script>

<div class="app">
	<Header />
	<Nav></Nav>
	<main>
		<slot />
	</main>
	<Footer></Footer>
</div>

<style></style>
