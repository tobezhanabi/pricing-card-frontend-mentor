<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- displays site properly based on user's device -->

    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="./images/favicon-32x32.png"
    />

    <title>Frontend Mentor | Single Price Grid Component</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Karla:wght@400;700&family=Rubik+Gemstones&display=swap"
      rel="stylesheet"
    />

    <!-- Feel free to remove these styles or customise in your own stylesheet 👍 -->
    <link href="./style.css" rel="stylesheet" />
  </head>
  <body>
    <div id="card">
      <div id="top-section">
        <h2>Join our community</h2>

        <h4>30-day, hassle-free money back guarantee</h4>

        <p>
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honing their
          skills.
        </p>
      </div>

      <div id="bottom-section">
        <div id="bottom-left">
          <h4>Monthly Subscription</h4>
          <div id="price-container">
            <div id="price">&dollar;29</div>
            <div id="price-frequency">per month</div>
          </div>
          <p>Full access for less than &dollar;1 a day</p>
          <button>Sign Up</button>
          
        </div><div id="bottom-right">
          <h4>Why Us</h4>
          <ul>
            <li>Tutorials by industry experts</li>
            <li>Peer &amp; expert code review</li>
            <li>Coding exercises</li>
            <li>Access to our GitHub repos</li>
            <li>Community forum</li>
            <li>Flashcard decks</li>
            <li>New videos every week</li>
          </ul>
        </div>
      </div>
    </div>

    <footer>
      <p class="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
          >Frontend Mentor</a
        >. Coded by <a href="#">Tobez</a>.
      </p>
    </footer>
  </body>
</html>
