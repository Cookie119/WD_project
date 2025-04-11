<script>
  import Router from 'svelte-spa-router';
  import Home from './routes/Home.svelte';
  import CulturalInfluence from './routes/CulturalInfluence.svelte';
  import Navbar from './components/Navbar.svelte';
  import Footer from './components/Footer.svelte';
  import Recovery from './routes/Recovery.svelte'; // 
  import WarsImpact from './routes/WarsImpact.svelte';
  import Contact from './routes/Contact.svelte';
  const routes = {
    '/': Home,
    '/cultural-influence': CulturalInfluence,
    '/recovery': Recovery,
    '/wars-impact': WarsImpact,
    '/contact': Contact
    
  };
</script>

<Navbar />

<main class="container py-4">
  <Router {routes} />
</main>

<Footer />
