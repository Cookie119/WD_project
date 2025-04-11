<header class="hero">
    <h1>Substances That Shaped Civilizations</h1>
  
    <nav>
      <ul role="list">
        <li><a href="#absinthe"><img src="/images/absinthe-bohemian.jpg" aria-hidden="true"><span>Absinthe Bohemian Culture</span></a></li>
        <li><a href="#ayahuasca"><img src="/images/ayahuasca-shamanism.jpg" aria-hidden="true"><span>Ayahuasca Shamanism</span></a></li>
        <li><a href="#betel"><img src="/images/betel-nut-asia.jpg" aria-hidden="true"><span>Betel Nut in Asia</span></a></li>
        <li><a href="#cannabis"><img src="/images/cannabis-ayurveda.jpg" aria-hidden="true"><span>Cannabis in Ayurveda</span></a></li>
        <li><a href="#coca"><img src="/images/coca-andean.jpg" aria-hidden="true"><span>Coca in Andean Culture</span></a></li>
        <li><a href="#iboga"><img src="/images/iboga-africa.jpg" aria-hidden="true"><span>Iboga in Africa</span></a></li>
        <li><a href="#kava"><img src="/images/kava-pacific.jpg" aria-hidden="true"><span>Kava in Pacific</span></a></li>
        <li><a href="#khat"><img src="/images/khat-africa.jpg" aria-hidden="true"><span>Khat in Africa</span></a></li>
        <li><a href="#mescaline"><img src="/images/mescaline-mesoamerican.jpg" aria-hidden="true"><span>Mescaline in Mesoamerica</span></a></li>
        <li><a href="#opium"><img src="/images/opium-chinese.jpg" aria-hidden="true"><span>Opium in China</span></a></li>
        <li><a href="#peyote"><img src="/images/peyote-native-american.jpg" aria-hidden="true"><span>Peyote in Native America</span></a></li>
        <li><a href="#salvia"><img src="images/salvia-mazatec.jpg" aria-hidden="true"><span>Salvia Mazatec</span></a></li>
        <li><a href="#tobacco"><img src="/images/tobacco-native-american.jpg" aria-hidden="true"><span>Tobacco in Native America</span></a></li>
      </ul>
    </nav>
  
</header>

<main>
  <h2>The Role of Drugs in Shaping Warfare</h2>
  <p>This archive explores the significant influence of psychoactive substances on warfare throughout history — from stimulants used to enhance soldier endurance, to narcotics administered for pain relief on battlefields, and even how access to certain drugs shaped military strategy, morale, and global conflict outcomes.</p>
  <a class="button" href="#full-archive" target="_blank">Explore the Archive</a>
</main>


<style lang="scss">
    $color: #2a1a1f; // Dark burgundy color scheme

* {
  box-sizing: border-box;
}

body {
  font-family: "Lato", sans-serif;
  color: scale-color($color, $lightness: 10%);
}

h1,
h2 {
  margin: 0;
  font-family: "Playfair Display", serif;
  font-style: italic;
}

h1 {
  font-size: calc(1rem + 5vw);
  padding-left: 1rem;
  margin-bottom: -0.25em;
  z-index: 2;
  position: relative;
}

p {
  font-size: 1.25rem;
  line-height: 1.5;
}

.button {
  display: inline-flex;
  padding: 0.5em 1em;
  border-radius: 4px;
  background-color: $color;
  color: #fff;
  text-align: center;
  text-decoration: none;
  transition: background 180ms;

  &:hover {
    background-color: scale-color($color, $lightness: 30%, $saturation: 80%);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px scale-color($color, $lightness: 60%, $saturation: 80%);
  }
}

.hero {
  background-color: $color;
  padding: 2rem 1rem 0.25rem;
  color: #fff;

  nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-gap: 2vmin;
    grid-template-columns: repeat(auto-fill, minmax(25vmin, auto));

    li {
      &:nth-child(1) {
        grid-column-start: 2;
      }

      img {
        display: block;
        object-fit: cover;
        width: 100%;
        max-height: 20vh;
        filter: blur(2px) grayscale(20%);
        transition: all 200ms;
      }

      a {
        overflow: hidden;
        display: grid;
        grid-template-areas: cell;
        place-items: end;
        position: relative;
        transition: box-shadow 180ms;
        text-decoration: none;

        img,
        span {
          grid-area: cell;
        }

        span {
          z-index: 1;
          padding: 0.25em;
          background-color: #fff;
          color: $color;
          font-size: 0.9rem;
          border-left: 2px solid #8b5e3c;
          opacity: 0;
          transform: translateX(100%);
          transition: all 400ms ease-in;
        }

        &,
        &:before {
          border-radius: 4px;
        }

        &:before {
          content: "";
          position: absolute;
          top: -3px;
          right: -3px;
          bottom: -3px;
          left: -3px;
          z-index: 1;
          box-shadow: inset 0 0 200px $color;
          transition: box-shadow 200ms ease-in;
        }

        &:hover,
        &:focus {
          img {
            filter: none;
          }

          span {
            opacity: 1;
            transform: translateX(0);
          }

          &:before {
            box-shadow: inset 0 0 30px $color;
          }
        }

        &:focus {
          outline: none;
          box-shadow: 0 0 0 3px #fff;
        }
      }
    }
  }
}

main {
  max-width: 80ch;
  margin: 2rem auto;
  padding: 0 1rem;
}
</style>