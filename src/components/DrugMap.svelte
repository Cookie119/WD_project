 <script>
  import { onMount } from 'svelte';
  import L from 'leaflet';
  import 'leaflet/dist/leaflet.css';


  

  export let drugs = [];

  let mapDiv;
  let selectedCountry = null;
  let countryDrugs = [];

  const showCountryDrugs = (country) => {
    selectedCountry = country;
    countryDrugs = drugs.filter(drug => drug.originCountry === country);
  };

  const closePanel = () => {
    selectedCountry = null;
    countryDrugs = [];
  };

  onMount(() => {
    if (!mapDiv) return;

    const map = L.map(mapDiv, {
      zoomControl: true
    }).setView([20, 0], 2);

    mapDiv.style.zIndex = '0';

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Create custom icon from your SVG
    const customIcon = L.divIcon({
      html: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 794 613" width="40" height="40">
          <g transform="translate(0,613) scale(0.1,-0.1)" fill="#333333" stroke="none">
            <path d="M4916 5138 c-10 -217 -39 -456 -97 -803 -25 -151 -40 -209 -91 -365
            -65 -200 -80 -222 -227 -350 -34 -30 -74 -74 -88 -97 -28 -48 -28 -48 -74 -29
            -60 25 -115 72 -190 163 -40 48 -114 131 -164 183 -123 130 -164 196 -314 500
            -135 273 -161 344 -161 457 -1 32 -11 107 -23 166 l-23 108 -21 -23 c-11 -13
            -37 -55 -57 -95 -20 -40 -67 -107 -104 -150 -124 -140 -123 -151 7 -317 35
            -45 45 -67 49 -106 l4 -48 -36 8 c-19 4 -50 17 -68 28 -18 10 -60 36 -92 56
            -46 28 -70 36 -105 36 -88 0 -146 -47 -426 -341 -95 -100 -124 -124 -216 -177
            -59 -34 -116 -73 -128 -88 l-21 -27 128 -33 c218 -55 367 -114 910 -357 117
            -53 238 -112 270 -131 73 -44 258 -183 341 -254 l63 -56 -38 -30 c-21 -17
            -124 -100 -228 -185 -226 -184 -281 -223 -406 -289 -228 -120 -463 -178 -804
            -197 l-119 -7 34 -26 c84 -64 338 -328 386 -401 1 -2 33 20 70 48 67 50 288
            171 313 171 21 0 5 -78 -35 -174 -19 -46 -35 -87 -35 -89 0 -3 17 4 37 14 73
            37 73 37 73 -129 l0 -149 45 -32 c24 -17 81 -73 127 -123 46 -50 127 -139 182
            -197 54 -58 131 -149 170 -201 l71 -96 -3 131 c-3 96 1 148 12 192 9 34 19 97
            22 140 9 126 51 381 79 478 30 103 77 189 118 213 16 10 27 25 27 37 0 104
            127 334 223 405 48 35 46 37 128 -72 264 -346 440 -741 629 -1410 l53 -187 26
            18 c52 38 329 330 357 376 43 74 39 118 -24 240 -29 56 -55 120 -58 145 l-6
            45 39 -41 c21 -23 62 -71 90 -107 29 -37 64 -69 77 -73 33 -8 91 22 215 113 9
            6 -53 115 -101 178 -28 38 -45 66 -37 63 8 -3 63 -35 123 -72 60 -36 113 -66
            118 -66 27 0 73 39 139 117 197 236 281 323 355 369 118 74 158 134 88 134
            -55 0 -138 24 -287 85 -75 30 -206 73 -290 95 -232 60 -327 105 -576 269 -65
            43 -183 110 -262 149 -79 39 -164 89 -189 111 l-45 39 25 27 c58 62 125 111
            645 463 195 132 368 220 500 253 74 19 119 23 250 23 150 1 165 -1 238 -26 73
            -27 147 -37 147 -20 0 4 -37 30 -83 59 -178 111 -386 265 -466 343 -106 103
            -152 134 -186 126 -14 -4 -56 -33 -94 -66 -39 -33 -72 -60 -75 -60 -2 0 10 37
            29 83 18 45 36 97 40 116 l7 35 -38 -30 c-22 -17 -51 -37 -65 -46 -36 -23
            -150 -70 -156 -65 -2 3 12 30 32 62 56 86 75 135 75 191 0 89 -35 129 -316
            359 -141 116 -343 313 -390 381 -21 30 -38 54 -39 54 -1 0 -5 -64 -9 -142z"/>
          </g>
        </svg>`,
      className: 'custom-svg-icon',
      iconSize: [30, 30],  // size of the icon
      iconAnchor: [15, 30] // point of the icon which will correspond to marker's location
    });

    drugs.forEach(drug => {
      if (
        Array.isArray(drug.coordinates) &&
        drug.coordinates.length === 2 &&
        typeof drug.coordinates[0] === 'number' &&
        typeof drug.coordinates[1] === 'number'
      ) {
        L.marker(drug.coordinates, { icon: customIcon })
          .addTo(map)
          .on('click', () => showCountryDrugs(drug.originCountry));
      }
    });
  });
</script>


<div class="map-header">
  <h2>Global Drug Origins</h2>
  <p>Explore the geographical origins and distribution of various substances throughout history</p>
</div>

<div class="map-container">
  <div bind:this={mapDiv} id="map"></div>

  {#if selectedCountry}
    <div class="info-panel">
      <button class="close-btn" on:click={closePanel}>&times;</button>
      <h2>{selectedCountry} - {countryDrugs.length} drug(s)</h2>
      {#each countryDrugs as drug}
        <div class="drug-entry">
          <h3>{drug.name}</h3>
          <p><strong>Also Known As:</strong> {drug.otherNames?.join(', ') || 'N/A'}</p>
          <p><strong>Effects:</strong> {drug.effects?.join(', ') || 'N/A'}</p>
          <p><strong>Found By:</strong> {drug.foundBy || 'Unknown'}</p>
          <p class="desc">{drug.description}</p>
        </div>
      {/each}
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

  .map-container {
    display: flex;
    flex-direction: row;
    height: calc(100vh - 4.5rem);
    margin-top: 4.5rem;
    position: relative;
    z-index: 0;
  }

  .custom-svg-icon {
    background: transparent;
    border: none;
  }
  
  .leaflet-div-icon {
    background: transparent;
    border: none;
  }

  #map {
    flex: 1;
    z-index: 0;
  }

  .info-panel {
    width: 350px;
    background-color: $white;
    color: $dark;
    border-left: 1px solid #ccc;
    padding: 1.5rem 1.5rem 1rem 1.5rem;
    overflow-y: auto;
    font-family: $serif;
    z-index: 1;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
    position: relative;

    h2 {
      font-family: $bold;
      color: $main;
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    .close-btn {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: none;
      border: none;
      font-size: 1.5rem;
      color: $dark;
      cursor: pointer;
      font-weight: bold;
      line-height: 1;

      &:hover {
        color: $main;
      }
    }

    .drug-entry {
      margin-bottom: 1.2rem;
      border-bottom: 1px solid #ddd;
      padding-bottom: 0.8rem;

      h3 {
        font-family: $abril;
        margin-bottom: 0.4rem;
        color: $dark;
      }

      p {
        font-size: 0.9rem;
        margin: 0.2rem 0;

        &.desc {
          font-style: italic;
          color: #666;
          font-size: 0.85rem;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .map-container {
      flex-direction: column;
    }

    .info-panel {
      width: 100%;
      height: auto;
      border-left: none;
      border-top: 1px solid #ccc;
      box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
    }
  }

  .map-header {
    background: $white;
    padding: 1.5rem;
    text-align: center;
    border-bottom: 1px solid #eee;
    margin-bottom: 1rem;
    
    h2 {
      font-family: $abril;
      color: $main;
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }
    
    p {
      font-family: $serif;
      color: $dark;
      font-size: 1.1rem;
      max-width: 600px;
      margin: 0 auto;
      opacity: 0.8;
    }
  }
</style>
