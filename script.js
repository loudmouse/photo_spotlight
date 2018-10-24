$(document).ready(function(){
  // Start Featured Photographer - Unsplash API

  const div = document.getElementById('featured-photographer');

  const photog_url = 'https://api.unsplash.com/users/lanceanderson?&client_id=3af8662ba60ee5845668e501d7ecd832331c22e5d9c1b95de45e008c734adea1';

  function createNode(element) {
      return document.createElement(element);
    }

  function append(parent, el) {
    return parent.appendChild(el);
  }

  fetch(photog_url)
    .then((resp) => resp.json())

    .then(function(data) {
      let photos = data;
      let name = photos["name"];
      let twitter = photos["twitter_username"];
      let instagram = photos["instagram_username"];
      let portfolio = photos["portfolio_url"];
      let bio = photos["bio"];
      let location = photos["location"];
      let unsplash = photos["links"]["html"];
      let first_name = photos["first_name"];

      let name_data = createNode('p'),
            twitter_data = createNode('li'),
            instagram_data = createNode('li'),
            unsplash_data = createNode('li'),
            social_ul = createNode('ul'),
            social_div = createNode('div'),
            portfolio_data = createNode('li'),
            location_data = createNode('div'),
            bio_data = createNode('p'),
            img = createNode('img'),
            ul = createNode('ul'),
            buttonContainer = createNode('div'),
            span = createNode('span');

        name_data.className = "featured-name text-center";
        twitter_data.className = "featured-twitter";
        instagram_data.className = "featured-instagram";
        social_ul.className = "social-ul";
        social_div.className = "social-div text-center";
        portfolio_data.className = "featured-porfolio";
        location_data.className = "featured-location text-center";
        unsplash_data.className = "featured-unsplash";
        bio_data.className = "featured-bio";
        img.className = "featured-image";
        span.className = "span-item";
        ul.className = "featured-ul";
        div.className = "profile-div";
        buttonContainer.className = "button-container text-center";



        img.src = photos["profile_image"]["large"];
        name_data.innerHTML = `Featuring:<br>${name}`;
        twitter_data.innerHTML = `<a href="https://twitter.com/${twitter}" target="_blank" class="btn btn-primary btn-block" role="button" aria-pressed="true"><i class="fa fa-twitter"></i> Follow ${twitter} on Twitter</a>`;
        instagram_data.innerHTML = `<a href="https://www.instagram.com/${instagram}" target="_blank" class="btn btn-primary btn-block" role="button" aria-pressed="true"><i class="fa fa-instagram"></i> Follow ${instagram} on Instagram</a>`;
        unsplash_data.innerHTML = `<a href="${unsplash}" target="_blank" class="btn btn-primary btn-block" role="button" aria-pressed="true"><i class="fa fa-camera"></i> View ${first_name}'s Photos on Unsplash</a>`;
        portfolio_data.innerHTML = `Porfolio: ${portfolio}`;
        location_data.innerHTML = `<i class="fa fa-map-marker"></i>${location}`;
        bio_data.innerHTML = `Bio: ${bio}`;


        append(div, img);
        append(div, name_data);
        append(div, location_data);
        append(social_ul, twitter_data);
        append(social_ul, instagram_data);
        append(social_ul, unsplash_data);
        append(social_div, social_ul);
        append(div, social_div);
        append(div, buttonContainer);
        append(div, ul);



      twitter_data.id = "featured-twitter-button";
      var hasTwitter = document.getElementById("featured-twitter-button");
      if (twitter === null) {
          hasTwitter.style.display = 'none';
      }

      instagram_data.id = "featured-instagram-button";
      var hasInstagram = document.getElementById("featured-instagram-button");
      if (instagram === null) {
          hasInstagram.style.display = 'none';
      }

      location_data.id = "featured-location-indicator";
      var hasLocation = document.getElementById("featured-location-indicator");
      if (location === null) {
          hasLocation.style.display = 'none';
      }

  })

  // End Featured Photographer - Unsplash API


  // Start Unsplash API for Featured Photos

  const ul = document.getElementById('photos');

  const url = 'https://api.unsplash.com/collections/3363781/photos?&per_page=12&client_id=3af8662ba60ee5845668e501d7ecd832331c22e5d9c1b95de45e008c734adea1';

  function createNode(element) {
      return document.createElement(element);
    }

  function append(parent, el) {
    return parent.appendChild(el);
  }

  fetch(url)
    .then((resp) => resp.json())

    .then(function(data) {
      let photos = data;
      return photos.map(function(photo) {
        let name = photo.user.name;
        let unsplashLink = photo.links.html;
        let li = createNode('li'),
            img = createNode('img'),
            span = createNode('span');

        li.className = "image-list-item";
        img.className = "image-item";
        span.className = "span-item";
        ul.className = "ul-item";

        img.src = photo.urls.small;
        span.innerHTML = `<a href="${unsplashLink}" target="_blank"><i class="fa fa-camera"></i> ${name}</a>`;



        append(li, img);
        append(li, span);
        append(ul, li);
      })
    })
    .catch(function(error) {
      console.log(error);
    });

  // END UNSPLASH API



  // START TIMER

  // Set the date we're counting down to
  var countDownDate = new Date("Oct 17, 2018 17:00:00").getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now an the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="countdown-container"
      // document.getElementById("countdown-container").innerHTML = days + "d " + hours + "h "
      // + minutes + "m " + seconds + "s ";

      document.getElementById("sign-up-button").innerHTML = "A winner will be selected in: " + days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";





      // If the count down is over, write some text
      // if (distance < 0) {
      //     clearInterval(x);
      //     document.getElementById("countdown-container").innerHTML = "EXPIRED";
      // }

      if (distance < 0) {
          clearInterval(x);
          document.getElementById("sign-up-button").innerHTML = "Sorry, this giveaway has ended!";
      }
  }, 1000);

  // Set the date we're counting down to
  var countDownDateBg = new Date("Dec 5, 2018 15:37:25").getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now an the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);


      // If the count down is over, write some text
      if (distance < 0) {
          clearInterval(x);
          document.getElementById("countdown-container-bg").innerHTML = "EXPIRED";
      }
  }, 1000);

});
