  function initMap() {
      var uluru = { lat: 51.59136253, lng: -0.14256477 };
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 9,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }

