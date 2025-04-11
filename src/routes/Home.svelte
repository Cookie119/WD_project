<script>
    import Navbar from '../components/Navbar.svelte';
    import Footer from '../components/Footer.svelte';
    import HeroSection from '../components/hero-section-index.svelte';
    import DrugMap from '../components/DrugMap.svelte';
    import Timeline from '../components/Timeline.svelte';
    import DrugGrid from '../components/DrugGrid.svelte';
    import DrugSearch from '../components/DrugSearch.svelte';

    import drugs from '../data/durg.json';
</script>
<main class="container mt-4">
    <HeroSection />
    <DrugSearch {drugs} />
    <DrugMap {drugs} />
    <DrugGrid {drugs} />
    <Timeline/>
</main>