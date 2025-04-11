<script>
  import HeroSectionIndex from '../components/hero-section-culture.svelte';
  import CulturalMap from '../components/CulturalMap.svelte';
  import data from '../data/culturalInfluence.json';
  import CulturalCard from '../components/CulturalCard.svelte'; // adjust path as needed
  let visibleCards = 4;

  const loadMore = () => {
    visibleCards += 4;
  };
  </script>
  
  <HeroSectionIndex/>
  
  <CulturalMap influences={data} />

  
  <div class="cultural-grid">
    {#each data.slice(0, visibleCards) as influence, i}
      <CulturalCard 
        index={i}
        drugName={influence.drugName}
        culture={influence.culture}
        description={influence.description}
        origin={influence.origin}
        image={influence.image}
      />
    {/each}
  </div>
  
  {#if visibleCards < data.length}
    <div class="load-more-container">
      <button class="load-more-btn" on:click={loadMore}>
        Show More Cultural Archives ({data.length - visibleCards} remaining)
      </button>
    </div>
  {/if}
  
  <style>
  .cultural-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
    padding: 2rem;
    max-width: 1440px;
    margin: 0 auto;
  }

  .load-more-container {
    text-align: center;
    margin: 3rem 0;
  }

  .load-more-btn {
    background: linear-gradient(135deg, #92BFB1, #7aa899);
    color: white;
    border: none;
    padding: 1.2rem 2.5rem;
    border-radius: 30px;
    font-family: 'Oswald', sans-serif;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    
    &:hover {
      transform: scale(1.05);
      box-shadow: 0 6px 20px rgba(0,0,0,0.15);
    }
  }
</style>