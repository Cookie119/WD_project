<script>
  import { onMount } from 'svelte';
  export let drugs = [];
  
  let searchTerm = '';
  let selectedDrug = null;
  let filteredDrugs = [];
  
  $: {
    if (searchTerm) {
      filteredDrugs = drugs.filter(drug => 
        drug.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (drug.otherNames && drug.otherNames.some(name => 
          name.toLowerCase().includes(searchTerm.toLowerCase())
        ))
      );
    } else {
      filteredDrugs = [];
    }
  }

  function selectDrug(drug) {
    selectedDrug = drug;
    searchTerm = '';
    filteredDrugs = [];
  }

  function clearSelectedDrug() {
    selectedDrug = null;
  }

  function fetch2DStructureUrl(drugName) {
    const encodedName = encodeURIComponent(drugName);
    return `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${encodedName}/PNG`;
  }
</script>

<div class="search-container">
  <div class="search-input-wrapper">
    <input
      type="text"
      bind:value={searchTerm}
      placeholder="Search for drugs..."
      class="search-input"
    />
    {#if filteredDrugs.length > 0}
      <div class="search-results">
        {#each filteredDrugs as drug}
          <div class="search-result-item" on:click={() => selectDrug(drug)}>
            {drug.name}
            {#if drug.otherNames && drug.otherNames.length > 0}
              <span class="other-names">({drug.otherNames.join(', ')})</span>
            {/if}
          </div>
        {/each}
      </div>
    {/if}
  </div>
  {#if selectedDrug}
  <div class="drug-details">
    <button class="close-btn" on:click={clearSelectedDrug}>&times;</button>
    <h2>{selectedDrug.name}</h2>
    <div class="details-grid">
      <div class="structure-image">
        <img src={fetch2DStructureUrl(selectedDrug.name)} alt="{selectedDrug.name} structure" />
      </div>
      <div class="info-panel">
        {#if selectedDrug.otherNames && selectedDrug.otherNames.length > 0}
          <p><strong>Also Known As:</strong> {selectedDrug.otherNames.join(', ')}</p>
        {/if}
        {#if selectedDrug.effects && selectedDrug.effects.length > 0}
          <p><strong>Effects:</strong> {selectedDrug.effects.join(', ')}</p>
        {/if}
        {#if selectedDrug.originCountry}
          <p><strong>Origin:</strong> {selectedDrug.originCountry}</p>
        {/if}
        {#if selectedDrug.foundBy}
          <p><strong>Found By:</strong> {selectedDrug.foundBy}</p>
        {/if}
        {#if selectedDrug.description}
          <p class="description">{selectedDrug.description}</p>
        {/if}
      </div>
    </div>
  </div>
{/if}
</div>
<style lang="scss">
  $bold: 'Oswald', sans-serif;
  $abril: 'Abril Fatface', serif;
  $serif: 'Playfair Display', serif;
  $white: #ffffff;
  $main: #92BFB1;
  $dark: #333333;
  .search-container {
    width: 100%;
    max-width: 1200px;
    margin: 2rem auto;
    padding: 0 1rem;
    transition: all 0.3s ease;
    @media (max-width: 768px) {
      margin: 1rem auto;
      padding: 0 0.5rem;
    }
  }
  .search-input-wrapper {
    position: relative;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
  }
  .search-input {
    width: 100%;
    padding: 1.2rem;
    font-size: 1.2rem;
    border: 2px solid $main;
    border-radius: 12px;
    font-family: $serif;
    transition: all 0.3s ease;
    background: rgba($white, 0.95);
    
    &:focus {
      outline: none;
      border-color: darken($main, 10%);
      box-shadow: 0 0 15px rgba($main, 0.2);
      transform: translateY(-2px);
    }
    @media (max-width: 768px) {
      padding: 1rem;
      font-size: 1rem;
    }
  }
  .search-results {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: $white;
    border: 1px solid #ddd;
    border-radius: 0 0 12px 12px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    z-index: 1000;
    max-height: 60vh;
    overflow-y: auto;
    margin-top: 0.5rem;
    transition: all 0.3s ease;
  }
  .search-result-item {
    padding: 1rem;
    cursor: pointer;
    font-family: $serif;
    border-bottom: 1px solid rgba($dark, 0.1);
    transition: all 0.2s ease;
    
    &:last-child {
      border-bottom: none;
    }
    
    &:hover {
      background: lighten($main, 35%);
      padding-left: 1.5rem;
    }
    .other-names {
      font-size: 0.9em;
      color: lighten($dark, 20%);
      font-style: italic;
      margin-top: 0.3rem;
      display: block;
    }
  }
  .drug-details {
  position: relative;
  margin-top: 2rem;
  padding: 2rem;
  background: $white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba($dark, 0.1);
  transition: all 0.3s ease;
  animation: fadeIn 0.5s ease;

  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    font-size: 1.8rem;
    color: $dark;
    cursor: pointer;
    transition: color 0.2s ease;

    &:hover {
      color: $main;
    }
  }
  
  h2 {
    font-family: $abril;
    color: $main;
    margin-bottom: 1.5rem;
    font-size: 2.2rem;
    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
  }
}

  .details-grid {
    display: grid;
    grid-template-columns: minmax(200px, 300px) 1fr;
    gap: 2rem;
    align-items: start;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }
  .structure-image {
    width: 100%;
    background: rgba($dark, 0.05);
    border-radius: 8px;
    overflow: hidden;
    transition: all 0.3s ease;
    
    img {
      width: 100%;
      height: auto;
      display: block;
      transition: transform 0.3s ease;
      &:hover {
        transform: scale(1.05);
      }
    }
  }
  .info-panel {
    font-family: $serif;
    
    p {
      margin: 0.8rem 0;
      line-height: 1.6;
      
      strong {
        font-family: $bold;
        color: $main;
      }
      
      &.description {
        margin-top: 1.5rem;
        font-style: italic;
        color: lighten($dark, 10%);
        line-height: 1.8;
      }
    }
  }
</style>