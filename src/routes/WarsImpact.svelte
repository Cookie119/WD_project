<script>
  import HeroSectionIndex from '../components/hero-section-war.svelte';
  import warData from '../data/war.json';
  let visibleCount = 3;
  $: visibleWars = warData.slice(0, visibleCount);

  function showMoreWars() {
    visibleCount += 3; // show 3 more on each click
  }

</script>
<main class="wars-impact">
  <HeroSectionIndex />
  
  <section class="content-section">
    <h1>The Impact of Drugs in Warfare</h1>
  
    <div class="war-grid">
      {#each visibleWars as war}
        <div class="war-card">
          <h2>{war.name}</h2>
          {#if war.image}
            <div class="war-image">
              <img src={war.image} alt="{war.name} image" loading="lazy" />
            </div>
          {/if}
          <div class="card-content">
            <p class="period">{war.period}</p>
            <p class="description">{war.description}</p>
            <div class="drugs-used">
              <h3>Drugs Involved:</h3>
              <ul>
                {#each war.drugs as drug}
                  <li>{drug}</li>
                {/each}
              </ul>
            </div>
            <p class="impact">{war.impact}</p>
          </div>
        </div>
      {/each}
    </div>
  
    {#if visibleCount < warData.length}
      <div class="show-more-container">
        <button class="show-more-button" on:click={showMoreWars}>
          Show More
        </button>
      </div>
    {/if}
  </section>
  
</main>
<style lang="scss">
 $bold: 'Oswald', sans-serif;
  $abril: 'Abril Fatface', serif;
  $serif: 'Playfair Display', serif;
  $main: #92BFB1;
  $dark: #333333;
  
  .wars-impact {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    background: #f9f9f9;
  }
  
  .content-section {
    margin-top: 2rem;
    h1 {
      font-family: $abril;
      color: $dark;
      font-size: 2.5rem;
      text-align: center;
      margin-bottom: 2rem;
      position: relative;
      &:after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 100px;
        height: 3px;
        background: $main;
      }
    }
  }
  
  .war-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    padding: 1rem;
  }
  
  .war-card {
    background: white;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 4px 15px rgba($dark, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 20px rgba($dark, 0.15);
    }
    
    h2 {
      font-family: $bold;
      color: $main;
      margin: 0 0 1rem 0;
      font-size: 1.8rem;
      border-bottom: 2px solid rgba($main, 0.2);
      padding-bottom: 0.5rem;
    }
    
    .card-content {
      .period {
        font-family: $serif;
        font-style: italic;
        color: lighten($dark, 20%);
        margin-bottom: 1.5rem;
        font-size: 1.1rem;
      }
      
      .description {
        font-family: $serif;
        line-height: 1.6;
        color: $dark;
        margin-bottom: 1.5rem;
        font-size: 1.05rem;
      }
      
      .drugs-used {
        margin: 1.5rem 0;
        padding: 1rem;
        background: rgba($main, 0.05);
        border-radius: 8px;
        
        h3 {
          font-family: $bold;
          font-size: 1.2rem;
          color: $main;
          margin-bottom: 1rem;
        }
        
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 0.5rem;
          
          li {
            font-family: $serif;
            color: $dark;
            font-size: 1rem;
            margin-bottom: 0.5rem;
            display: flex;
            align-items: center;
            
            &:before {
              content: "•";
              color: $main;
              margin-right: 0.5rem;
              font-size: 1.2rem;
            }
          }
        }
      }
      
      .impact {
        font-family: $serif;
        font-style: italic;
        color: $dark;
        line-height: 1.6;
        margin-top: 1.5rem;
        padding-top: 1.5rem;
        border-top: 1px solid rgba($dark, 0.1);
        font-size: 1.05rem;
      }
    }
  }
  @media (max-width: 768px) {
    .war-grid {
      grid-template-columns: 1fr;
    }
    
    .war-card {
      padding: 1.5rem;
    }
  }

  .war-image {
  width: 100%;
  max-height: 200px;
  margin-bottom: 1rem;
  border-radius: 8px;
  overflow: hidden;
  background: rgba($dark, 0.03);
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    display: block;
    border-radius: 8px;
  }
}

.show-more-container {
  text-align: center;
  margin-top: 2rem;
}

.show-more-button {
  background: $main;
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 4px;
  font-family: $bold;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: darken($main, 10%);
  }
}


</style>
