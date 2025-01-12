angular.module('myApp.services', [])

.factory('Twitters', function ($http) {
  return {

  }
})
.factory('Auth', function ($http, $location, $window) {
  // what to do with application authentication?
  return {

  }
})
.factory('View1', function() {
  return {
    defaultStyle: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"landscape.natural.landcover","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural.landcover","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#d3d3d3"},{"lightness":17},{"visibility":"on"},{"weight":"1.85"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":"0.01"},{"visibility":"on"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"visibility":"simplified"},{"hue":"#0080ff"},{"saturation":"-100"},{"lightness":"-13"},{"gamma":"1.06"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#e0e0e0"},{"weight":"2.24"}]},{"featureType":"road.arterial","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"on"},{"saturation":"-19"},{"lightness":"-26"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#505050"},{"weight":"1.82"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#e6e5e5"},{"weight":"0.65"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#7f7f7f"},{"lightness":17}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#a7a7a7"}]}], 
    homageToToner : [{"featureType":"water","elementType":"all","stylers":[{"hue":"#000000"},{"saturation":-100},{"lightness":-100},{"visibility":"simplified"}]},{"featureType":"landscape","elementType":"all","stylers":[{"hue":"#FFFFFF"},{"saturation":-100},{"lightness":100},{"visibility":"simplified"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[]},{"featureType":"landscape.natural","elementType":"all","stylers":[]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"hue":"#333333"},{"saturation":-100},{"lightness":-69},{"visibility":"simplified"}]},{"featureType":"poi.attraction","elementType":"geometry","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"geometry","stylers":[{"hue":"#ffffff"},{"saturation":0},{"lightness":100},{"visibility":"off"}]},{"featureType":"poi.government","elementType":"geometry","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"off"}]}],
    midnigthCommander: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"color":"#000000"},{"lightness":13}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#144b53"},{"lightness":14},{"weight":1.4}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#08304b"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#0c4152"},{"lightness":5}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#0b434f"},{"lightness":25}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#0b3d51"},{"lightness":16}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"}]},{"featureType":"transit","elementType":"all","stylers":[{"color":"#146474"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#021019"}]}],
    hintsOfGold: [{"featureType":"water","elementType":"all","stylers":[{"hue":"#252525"},{"saturation":-100},{"lightness":-81},{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"hue":"#666666"},{"saturation":-100},{"lightness":-55},{"visibility":"on"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"hue":"#555555"},{"saturation":-100},{"lightness":-57},{"visibility":"on"}]},{"featureType":"road","elementType":"all","stylers":[{"hue":"#777777"},{"saturation":-100},{"lightness":-6},{"visibility":"on"}]},{"featureType":"administrative","elementType":"all","stylers":[{"hue":"#cc9900"},{"saturation":100},{"lightness":-22},{"visibility":"on"}]},{"featureType":"transit","elementType":"all","stylers":[{"hue":"#444444"},{"saturation":0},{"lightness":-64},{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"hue":"#555555"},{"saturation":-100},{"lightness":-57},{"visibility":"off"}]}],
    MutedMonotone: [{"stylers":[{"visibility":"on"},{"saturation":-100},{"gamma":0.54}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"water","stylers":[{"color":"#4d4946"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"gamma":0.48}]},{"featureType":"transit.station","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"gamma":7.18}]}]
  }
})
.factory('HeatMapLayer', [function() {
  /* Data points defined as an array of LatLng objects */
  // test data set
  var testHeatmapData = [
    new google.maps.LatLng(37.782, -122.447),
    new google.maps.LatLng(37.782, -122.445),
    new google.maps.LatLng(37.782, -122.443),
    new google.maps.LatLng(37.782, -122.441),
    new google.maps.LatLng(37.782, -122.439),
    new google.maps.LatLng(37.782, -122.437),
    new google.maps.LatLng(37.782, -122.435),
    new google.maps.LatLng(37.785, -122.447),
    new google.maps.LatLng(37.785, -122.445),
    new google.maps.LatLng(37.785, -122.443),
    new google.maps.LatLng(37.785, -122.441),
    new google.maps.LatLng(37.785, -122.439),
    new google.maps.LatLng(37.785, -122.437),
    new google.maps.LatLng(37.785, -122.435)
  ];

  var layerDataTransform = function(RawLatLng) {
    // for loop
    var heatmapData = [];
    for (var i = 0, l = RawLatLng.length; i < l; i++) {
      // console.log(RawLatLng[i]);
      heatmapData[i] = new google.maps.LatLng(RawLatLng[i][1], RawLatLng[i][0]);
    };

    return heatmapData;
  };

  return {
    // heatmapData: heatmapData || testHeatmapData,
    heatmapData: testHeatmapData,
    layerDataTransform: layerDataTransform
  }
}])
.factory('D3Service', [function() {
  var d3;
  // insert d3 code here
  return d3;  
}])
.factory('DataComm', ['$http', function($http) {
  // var baseUrl = "http://twitter-heat-map.herokuapp.com"
  var baseUrl = "http://testgooglempa.herokuapp.com";
  // var baseUrl = "http://localhost:8000";
  var getData = function() {
    return $http({
      method: "GET",
      url: baseUrl + '/data/'
    })
  };

  var postGetData = function() {
    return $http({
      method: "POST",
      url: baseUrl + '/data/',
      data: { name: "./data/city"}
    })
  };

  var getDataByLink = function(link) {
    var path = baseUrl + link;
    return $http({
      method: "GET",
      url: path
    });
  };
  return {
    getData: getData,
    postGetData: postGetData,
    getDataByLink: getDataByLink
  }
}])