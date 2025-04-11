<script>
    export let drugName, culture, description, origin, image;
    export let index = 0; // Ensure default value
    let expanded = false;
    let isHovered = false;
  
    // Add gradient ID for unique references
    $: gradientId = `gradient-${Math.random().toString(36).substr(2, 9)}`;
  </script>
  
  <style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&family=Abril+Fatface&family=Playfair+Display:wght@400;700&display=swap');
  
    @keyframes cardEntrance {
      from {
        opacity: 0;
        transform: translateY(50px) rotateX(30deg);
      }
      to {
        opacity: 1;
        transform: translateY(0) rotateX(0);
      }
    }
  
    $bold: 'Oswald', sans-serif;
    $abril: 'Abril Fatface', serif;
    $serif: 'Playfair Display', serif;
    $white: #ffffff;
    $main: #92BFB1;
    $dark: #333333;
    $accent: #FF6B6B;
  
    .cultural-card {
      background: linear-gradient(145deg, $white 85%, rgba($main, 0.1));
      border-radius: 16px;
      padding: 2rem;
      box-shadow: 0 8px 30px -10px rgba($dark, 0.12);
      transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
      transform-style: preserve-3d;
      animation: cardEntrance 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
      animation-delay: calc(var(--index) * 0.1s);
      position: relative;
      margin-bottom: 2rem;
      overflow: hidden;
  
      &::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 16px;
        background: linear-gradient(120deg, rgba($main, 0) 0%, rgba($main, 0.03) 100%);
        z-index: 0;
      }
  
      &:hover {
        transform: translateY(-8px) rotateZ(1deg) scale(1.02);
        box-shadow: 0 15px 40px -12px rgba($dark, 0.2);
  
        .card-image img {
          transform: scale(1.08);
        }
  
        .culture-badge {
          transform: translateY(-50%) scale(1.1);
        }
      }
  
      h2 {
        font-family: $abril;
        margin-bottom: 1.5rem;
        font-size: 2.4rem;
        position: relative;
        line-height: 1.1;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-image: linear-gradient(120deg, $main, darken($main, 15%));
  
        &::after {
          content: '';
          position: absolute;
          bottom: -0.8rem;
          left: 0;
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, $main, rgba($main, 0.3));
          border-radius: 2px;
        }
      }
  
      .culture-badge {
        position: absolute;
        top: -20px;
        right: -20px;
        background: $accent;
        color: $white;
        padding: 0.8rem 1.5rem;
        border-radius: 25px;
        font-family: $bold;
        font-size: 0.9rem;
        box-shadow: 0 4px 15px rgba($accent, 0.3);
        transition: all 0.3s ease;
        z-index: 2;
      }
  
      .card-image {
        width: 100%;
        height: 360px;
        border-radius: 12px;
        margin: 2rem 0;
        overflow: hidden;
        position: relative;
  
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }
  
        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 60%, rgba($dark, 0.6));
          display: flex;
          align-items: flex-end;
          padding: 1.5rem;
  
          .origin-tag {
            background: rgba($white, 0.9);
            color: $dark;
            padding: 0.5rem 1rem;
            border-radius: 20px;
            font-family: $bold;
            backdrop-filter: blur(4px);
          }
        }
      }
  
      .basic-info {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
        margin: 2rem 0;
  
        .info-item {
          padding: 1.2rem;
          background: rgba($main, 0.05);
          border-radius: 8px;
          transition: all 0.3s ease;
  
          &:hover {
            transform: translateY(-3px);
            background: rgba($main, 0.1);
          }
  
          strong {
            display: block;
            font-family: $bold;
            color: $main;
            margin-bottom: 0.5rem;
            font-size: 0.95rem;
          }
  
          span {
            font-family: $serif;
            color: lighten($dark, 10%);
            line-height: 1.4;
          }
        }
      }
  
      .description {
        --max-height: 120px;
        font-family: $serif;
        line-height: 1.8;
        color: lighten($dark, 15%);
        position: relative;
        max-height: var(--max-height);
        overflow: hidden;
        transition: max-height 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  
        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 60px;
          background: linear-gradient(transparent, $white 90%);
          opacity: 1;
          transition: opacity 0.4s ease;
        }
  
        &.expanded {
          --max-height: 1000px;
          
          &::after {
            opacity: 0;
          }
        }
      }
  
      button.show-more {
        width: 100%;
        background: linear-gradient(135deg, $main, darken($main, 10%));
        color: $white;
        padding: 1rem;
        border: none;
        border-radius: 12px;
        font-family: $bold;
        font-size: 1rem;
        margin-top: 2rem;
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
  
        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 20px rgba($main, 0.3);
        }
  
        &:active {
          transform: translateY(0);
        }
      }
    }
  
    @media (max-width: 768px) {
      .cultural-card {
        padding: 1.5rem;
        margin-bottom: 1.5rem;
  
        h2 {
          font-size: 1.8rem;
        }
  
        .card-image {
          height: 250px;
          margin: 1.5rem 0;
        }
  
        .culture-badge {
          top: -15px;
          right: -15px;
          font-size: 0.8rem;
          padding: 0.6rem 1.2rem;
        }
  
        .basic-info {
          grid-template-columns: 1fr;
        }
      }
    }
  </style>
  
  <div class="cultural-card" style="--index: {index}" on:mouseenter={() => isHovered = true} on:mouseleave={() => isHovered = false}>
    <div class="culture-badge">{culture}</div>
    
    <h2>{drugName}</h2>
    
    {#if image}
      <div class="card-image">
        <img src={image} alt="{drugName} cultural reference" />
        <div class="image-overlay">
          <div class="origin-tag">{origin}</div>
        </div>
      </div>
    {/if}
    
    <div class="basic-info">
      <div class="info-item">
        <strong>Cultural Impact</strong>
        <span>Historical significance in {culture} traditions</span>
      </div>
      <div class="info-item">
        <strong>Active Period</strong>
        <span>18th - 20th Century</span>
      </div>
    </div>
    
    <div class="description" class:expanded>
      <p>{description}</p>
    </div>
    
    <button class="show-more" on:click={() => expanded = !expanded}>
      {expanded ? 'Collapse Insights' : 'Expand Insights'} ↓
    </button>
  </div>