     function initMap() {
         var location = {
             lat: 36.1699,
             lng: -115.1398
         };
         var map = new google.maps.Map(document.getElementById("map"), {
             zoom: 15,
             zoomControl: true,
             zoomControlOptions: {
                 position: google.maps.ControlPosition.RIGHT_BOTTOM
             },
             mapTypeControl: false,
             streetViewControl: false,
             scrollwheel: false,
             center: location,
             styles: [{
                 "featureType": "water",
                 "elementType": "geometry",
                 "stylers": [{
                     "color": "#A3CCFF"
                    }, {
                     "lightness": 17
                    }]
                }, {
                 "featureType": "landscape",
                 "elementType": "geometry",
                 "stylers": [{
                     "color": "#DFDFDF"
                    }, {
                     "lightness": 20
                    }]
                }, {
                 "featureType": "road.highway",
                 "elementType": "geometry.fill",
                 "stylers": [{
                     "color": "#FFEBAE"
                    }, {
                     "lightness": 17
                    }]
                }, {
                 "featureType": "road.highway",
                 "elementType": "geometry.stroke",
                 "stylers": [{
                     "color": "#ffffff"
                    }, {
                     "lightness": 29
                    }, {
                     "weight": 0.2
                    }]
                }, {
                 "featureType": "road.arterial",
                 "elementType": "geometry",
                 "stylers": [{
                     "color": "#ffffff"
                    }, {
                     "lightness": 18
                    }]
                }, {
                 "featureType": "road.local",
                 "elementType": "geometry",
                 "stylers": [{
                     "color": "#ffffff"
                    }, {
                     "lightness": 16
                    }]
                }, {
                 "featureType": "poi",
                 "elementType": "geometry",
                 "stylers": [{
                     "color": "#f5f5f5"
                    }, {
                     "lightness": 21
                    }]
                }, {
                 "featureType": "poi.park",
                 "elementType": "geometry",
                 "stylers": [{
                     "color": "#dedede"
                    }, {
                     "lightness": 21
                    }]
                }, {
                 "elementType": "labels.text.stroke",
                 "stylers": [{
                     "visibility": "on"
                    }, {
                     "color": "#ffffff"
                    }, {
                     "lightness": 16
                    }]
                }, {
                 "elementType": "labels.text.fill",
                 "stylers": [{
                     "saturation": 36
                    }, {
                     "color": "#333333"
                    }, {
                     "lightness": 40
                    }]
                }, {
                 "elementType": "labels.icon",
                 "stylers": [{
                     "visibility": "off"
                    }]
                }, {
                 "featureType": "transit",
                 "elementType": "geometry",
                 "stylers": [{
                     "color": "#f2f2f2"
                    }, {
                     "lightness": 19
                    }]
                }, {
                 "featureType": "administrative",
                 "elementType": "geometry.fill",
                 "stylers": [{
                     "color": "#fefefe"
                    }, {
                     "lightness": 20
                    }]
                }, {
                 "featureType": "administrative",
                 "elementType": "geometry.stroke",
                 "stylers": [{
                     "color": "#fefefe"
                    }, {
                     "lightness": 17
                    }, {
                     "weight": 1.2
                    }]
                }]
         });
         var marker = new google.maps.Marker({
             position: location,
             icon: "assets/img/map_icon.png",
         });
         marker.setMap(map);
     }
