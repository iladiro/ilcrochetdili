<script>
	import Header from './layout/Header.svelte';
	import './styles.css';
	import "../app.css";
	import Nav from './layout/Nav.svelte';
	import Footer from './layout/Footer.svelte';
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
