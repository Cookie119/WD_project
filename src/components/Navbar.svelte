<script>
    let isOpen = false;
  </script>
  

  <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
    />
    
  <!-- Navbar Icon -->
  <div class="navbar--container sticky">
    <div class="navbar--title"><h4>navigation</h4></div>
    <div class="navbar--icon" on:click={() => isOpen = true}>
      <i class="fas fa-bars"></i>
    </div>
  </div>
  
  

  <!-- Slide-out Menu -->
  <div class="nav--open sticky" class:close={!isOpen}>
    <div class="nav--open-icon" on:click={() => isOpen = false}>
      <i class="fas fa-times"></i>
    </div>
    <div class="nav--open-title">explore</div>
    <div class="nav--open-menu">
      <a href="#/">Home</a>
      <a href="#/cultural-influence">Cultural Influence</a>
      <a href="#/wars-impact">Wars Impact</a>
      <a href="#/recovery">Recover Way</a>
      <a href="#/contact">Contact</a>
    </div>
  </div>
  
  <style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Abril+Fatface|Oswald:200,400|Playfair+Display:400,400i');
  
    $bold: 'Oswald', sans-serif;
    $abril: 'Abril Fatface', serif;
    $serif: 'Playfair Display', serif;
  
    $white: #ffffff;
    $main: #92BFB1;
    $dark: #333333;
  
    $ease-slow: all .4s ease-out;
  
    .sticky {
      position: fixed;
      z-index: 10;
    }
  
    .navbar--container {
      top: 15%;
      background: $white;
      height: 220px;
      width: 90px;
      box-shadow: 2px 2px 15px rgba($dark, .1);
    }
  
    .navbar--icon {
      margin-top: 24px;
      margin-left: 49px;
      font-size: 1em;
  
      &:hover {
        color: $main;
        cursor: pointer;
      }
    }
  
    .navbar--title {
      margin-left: 27px;
      margin-top: 35px;
  
      h4 {
        writing-mode: vertical-rl;
        font-family: $bold;
        letter-spacing: .34em;
        text-transform: uppercase;
        font-size: 0.9em;
      }
    }
  
    .nav--open {
      height: 100vh;
      width: 300px;
      background: $white;
      transition: $ease-slow;
      opacity: 1;
      box-shadow: 2px 2px 15px rgba($dark, .1);
      transform: translateX(0);
      top: 0;
      left: 0;
    }
  
    .nav--open-icon {
      text-align: right;
      padding: 20px;
  
      i {
        font-size: 1.8em;
        color: $main;
  
        &:hover {
          color: $dark;
          cursor: pointer;
        }
      }
    }
  
    .nav--open-title {
      font-family: $serif;
      font-size: .8em;
      text-transform: uppercase;
      letter-spacing: .2em;
      text-align: center;
      margin-top: 35%;
    }
  
    .nav--open-menu {
      height: 100%;
      display: flex;
      flex-direction: column;
      text-align: center;
      margin-top: 30px;
  
      a {
        font-size: 2em;
        font-weight: 100;
        font-family: $serif;
        padding: 15px 0;
        color: $main;
        text-decoration: none;
  
        &:hover {
          background: $main;
          color: $dark;
        }
      }
    }
  
    .close {
      transform: translateX(-300px);
      opacity: 0;
      transition: $ease-slow;
    }
  </style>
  