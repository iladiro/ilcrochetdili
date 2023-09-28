<script>
    import { page } from '$app/stores';
</script>

<nav>
    <ul class="bg-[#f8e5e6] p-3 col-12 lg:col-auto flex justify-center md:my-0 gap-4">
        <li><a href="#whoIAm" data-te-smooth-scroll-init class="text-[#454545] uppercase">chi sono</a></li>
        <li><a href="#myProducts" data-te-smooth-scroll-init class="text-[#454545] uppercase">i miei lavori</a></li>
        <li><a href="#contacts" data-te-smooth-scroll-init class="text-[#454545] uppercase">contatti</a></li>
        <!-- <li aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
            <a href="/sverdle">contatti</a>
        </li> -->
    </ul>
</nav>