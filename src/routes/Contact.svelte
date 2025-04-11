<script>
  let formData = {
    name: '',
    email: '',
    subject: '',
    message: '',
    drugReference: ''
  };
  let submitted = false;
  function handleSubmit() {
    // Handle form submission logic here
    submitted = true;
    // Reset form after submission
    setTimeout(() => {
      formData = {
        name: '',
        email: '',
        subject: '',
        message: '',
        drugReference: ''
      };
      submitted = false;
    }, 3000);
  }
</script>
<main class="contact-page">
  <section class="hero-section">
    <h1>Contact Us</h1>
    <p>Get in touch for drug reference information or general inquiries</p>
  </section>
  <div class="content-wrapper">
    <section class="contact-form">
      <h2>Send a Message</h2>
      {#if submitted}
        <div class="success-message">
          Thank you for your message. We'll get back to you soon.
        </div>
      {:else}
        <form on:submit|preventDefault={handleSubmit}>
          <div class="form-group">
            <label for="name">Name</label>
            <input 
              type="text" 
              id="name" 
              bind:value={formData.name} 
              required
            />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input 
              type="email" 
              id="email" 
              bind:value={formData.email} 
              required
            />
          </div>
          <div class="form-group">
            <label for="subject">Subject</label>
            <input 
              type="text" 
              id="subject" 
              bind:value={formData.subject} 
              required
            />
          </div>
          <div class="form-group">
            <label for="drugReference">Drug Reference (Optional)</label>
            <input 
              type="text" 
              id="drugReference" 
              bind:value={formData.drugReference}
              placeholder="Enter specific drug name for reference"
            />
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea 
              id="message" 
              bind:value={formData.message} 
              rows="5" 
              required
            ></textarea>
          </div>
          <button type="submit" class="submit-btn">Send Message</button>
        </form>
      {/if}
    </section>
    <section class="contact-info">
      <h2>Additional Information</h2>
      <div class="info-cards">
        <div class="info-card">
          <i class="fas fa-book"></i>
          <h3>Drug References</h3>
          <p>Access our comprehensive database of historical drug information</p>
        </div>
        <div class="info-card">
          <i class="fas fa-history"></i>
          <h3>Historical Context</h3>
          <p>Learn about the cultural and historical significance of various substances</p>
        </div>
        <div class="info-card">
          <i class="fas fa-hand-holding-medical"></i>
          <h3>Recovery Resources</h3>
          <p>Find information about recovery and support services</p>
        </div>
      </div>
    </section>
  </div>
</main>
<style lang="scss">
  $bold: 'Oswald', sans-serif;
  $abril: 'Abril Fatface', serif;
  $serif: 'Playfair Display', serif;
  $white: #ffffff;
  $main: #92BFB1;
  $dark: #333333;
  .contact-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }
  .hero-section {
    text-align: center;
    margin-bottom: 3rem;
    padding: 4rem 2rem;
    background: linear-gradient(rgba($main, 0.1), rgba($main, 0.05));
    border-radius: 8px;
    h1 {
      font-family: $abril;
      font-size: 2.5rem;
      color: $dark;
      margin-bottom: 1rem;
    }
    p {
      font-family: $serif;
      font-size: 1.1rem;
      color: lighten($dark, 20%);
    }
  }
  .content-wrapper {
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 3rem;
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
  .contact-form {
    background: $white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba($dark, 0.1);
    h2 {
      font-family: $bold;
      color: $main;
      margin-bottom: 2rem;
      font-size: 1.8rem;
    }
  }
  .form-group {
    margin-bottom: 1.5rem;
    label {
      display: block;
      font-family: $serif;
      margin-bottom: 0.5rem;
      color: $dark;
    }
    input, textarea {
      width: 100%;
      padding: 0.8rem;
      border: 1px solid lighten($dark, 50%);
      border-radius: 4px;
      font-family: $serif;
      transition: border-color 0.3s ease;
      &:focus {
        outline: none;
        border-color: $main;
      }
    }
  }
  .submit-btn {
    background: $main;
    color: $white;
    border: none;
    padding: 1rem 2rem;
    border-radius: 4px;
    font-family: $bold;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s ease;
    &:hover {
      background: darken($main, 10%);
    }
  }
  .success-message {
    background: lighten($main, 30%);
    color: darken($main, 20%);
    padding: 1rem;
    border-radius: 4px;
    text-align: center;
    font-family: $serif;
  }
  .contact-info {
    h2 {
      font-family: $bold;
      color: $main;
      margin-bottom: 2rem;
      font-size: 1.8rem;
    }
  }
  .info-cards {
    display: grid;
    gap: 1.5rem;
  }
  .info-card {
    background: $white;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba($dark, 0.1);
    transition: transform 0.3s ease;
    &:hover {
      transform: translateY(-5px);
    }
    i {
      color: $main;
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    h3 {
      font-family: $bold;
      color: $dark;
      margin-bottom: 0.5rem;
    }
    p {
      font-family: $serif;
      color: lighten($dark, 20%);
      font-size: 0.9rem;
    }
  }
</style>