<script lang="ts">
    import { onMount, tick } from 'svelte';
    import timelineData from '../data/drug_timeline.json';
  
    let visibleCount = 4;
    let allDrugs = [];
  
    function showMore() {
      visibleCount += 4;
    }
  
    onMount(async () => {
      allDrugs = timelineData.sort((a, b) => b.start - a.start);
      await tick();
    });
  </script>
  
  <section class="timeline-section">
    <h1 class="timeline-title">Drug History Timeline</h1>
    <div class="timeline">
      {#each allDrugs.slice(0, visibleCount) as drug, i}
        <div class="timeline-card">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <h2>{drug.name}</h2>
            <p class="date-range">
              {drug.end ? `${drug.start} - ${drug.end}` : `Since ${drug.start}`}
            </p>
          </div>
        </div>
      {/each}
    </div>
  
    {#if visibleCount < allDrugs.length}
      <div class="show-more-container">
        <button class="show-more-button" on:click={showMore}>Show More</button>
      </div>
    {/if}
  </section>
  
  <style lang="scss">
    $bold: 'Oswald', sans-serif;
    $abril: 'Abril Fatface', serif;
    $serif: 'Playfair Display', serif;
    $white: #ffffff;
    $main: #92BFB1;
    $dark: #333333;
    $line: #6cbba8;
  
    .timeline-section {
      padding: 2rem;
      background: #f9f9f9;
    }
  
    .timeline-title {
  text-align: center;
  font-family: $bold; 
  color: $main;
  margin-bottom: 3rem;
  font-size: 2rem;
  letter-spacing: 1px;
  text-transform: uppercase;
}

    .timeline {
      position: relative;
      margin: 0 auto;
      max-width: 800px;
      border-left: 4px solid $line;
      padding-left: 2rem;
    }
  
    .timeline-card {
      position: relative;
      margin-bottom: 2rem;
      padding-left: 1rem;
  
      .timeline-dot {
        width: 14px;
        height: 14px;
        background: $main;
        border-radius: 50%;
        position: absolute;
        left: -11px;
        top: 0.5rem;
        box-shadow: 0 0 0 4px lighten($main, 25%);
      }
  
      .timeline-content {
        background: $white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba($dark, 0.1);
        transition: transform 0.2s;
        font-family: $serif;
  
        h2 {
          font-family: $abril;
          color: $main;
          margin: 0;
          font-size: 1.3rem;
        }
  
        .date-range {
          margin-top: 0.5rem;
          font-size: 0.95rem;
          color: $dark;
          font-style: italic;
        }
  
        &:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 12px rgba($dark, 0.15);
        }
      }
    }
  
    .show-more-container {
      text-align: center;
      margin-top: 2rem;
  
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
    }
  
    @media (max-width: 768px) {
      .timeline {
        border-left: 3px solid $line;
        padding-left: 1rem;
      }
  
      .timeline-card {
        .timeline-dot {
          width: 12px;
          height: 12px;
          left: -9px;
        }
  
        .timeline-content {
          padding: 1rem;
        }
      }
    }
  </style>
  