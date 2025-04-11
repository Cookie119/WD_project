
<script>
  export let drugs = [];
  let visibleCount = 4;
  $: uniqueDrugs = [...new Map(drugs.map(drug => [drug.name, drug])).values()];
  $: visibleDrugs = uniqueDrugs.slice(0, visibleCount);
  
  function fetch2DStructureUrl(drugName) {
    // Using PubChem's 2D structure API
    const encodedName = encodeURIComponent(drugName);
    return `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${encodedName}/PNG`;
  }

  function showMore() {
    visibleCount += 4; // Increase visible cards by 4
  }

</script>
<div class="drug-grid">
  {#each visibleDrugs as drug}
    <div class="drug-card">
      <h2>{drug.name}</h2>
      <div class="structure-image">
        <img src={fetch2DStructureUrl(drug.name)} alt="{drug.name} structure" loading="lazy" />
      </div>
      {#if drug.otherNames && drug.otherNames.length > 0}
        <p class="other-names">Also known as: {drug.otherNames.join(', ')}</p>
      {/if}
      <div class="drug-info">
        {#if drug.effects && drug.effects.length > 0}
          <p><strong>Effects:</strong> {drug.effects.join(', ')}</p>
        {/if}
        {#if drug.originCountry}
          <p><strong>Origin:</strong> {drug.originCountry}</p>
        {/if}
        {#if drug.foundBy}
          <p><strong>Found By:</strong> {drug.foundBy}</p>
        {/if}
        {#if drug.description}
          <p class="description">{drug.description}</p>
        {/if}
      </div>
    </div>
  {/each}
</div>
{#if visibleCount < uniqueDrugs.length}
  <div class="show-more-container">
    <button class="show-more-button" on:click={showMore}>
      Show More
    </button>
  </div>
{/if}
<style lang="scss">

  $bold: 'Oswald', sans-serif;
  $abril: 'Abril Fatface', serif;
  $serif: 'Playfair Display', serif;
  $white: #ffffff;
  $main: #92BFB1;
  $dark: #333333;
  .drug-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    padding: 2rem;
  }
  .drug-card {
    background: $white;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 2px 8px rgba($dark, 0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 12px rgba($dark, 0.15);
    }
    h2 {
      font-family: $abril;
      color: $main;
      margin: 0 0 1rem 0;
      font-size: 1.5rem;
    }
    .other-names {
      font-family: $serif;
      font-style: italic;
      color: lighten($dark, 20%);
      margin-bottom: 1rem;
      font-size: 0.9rem;
    }
    .drug-info {
      p {
        font-family: $serif;
        margin: 0.5rem 0;
        line-height: 1.4;
        strong {
          font-family: $bold;
          color: $main;
        }
        &.description {
          margin-top: 1rem;
          font-style: italic;
          color: $dark;
        }
      }
    }
  }
  @media (max-width: 768px) {
    .drug-grid {
      grid-template-columns: 1fr;
      padding: 1rem;
    }
  }

  .structure-image {
      width: 100%;
      max-width: 200px;
      margin: 0.5rem auto;
      background: rgba($dark, 0.05);
      border-radius: 4px;
      overflow: hidden;
      
      img {
        width: 100%;
        height: auto;
        display: block;
      }
    }

    .show-more-container {
    text-align: center;
    margin: 2rem 0;
  }

    .show-more-button {
    background: $main;
    color: $white;
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