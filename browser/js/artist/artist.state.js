juke.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('/artists/:artistId', '/artists/:artistId/albums');
    // define a something state
    $stateProvider
    .state('artistList', {
        url:"/artists",
        // that renders the following 
        templateUrl: 'templates/artists.html',
        resolve: {
            artists: function(ArtistFactory) {
                return ArtistFactory.fetchAll()
            }
        },
        controller: "ArtistsCtrl"   
    })
    .state('artist', {
        url:"/artists/:artistId",
        templateUrl: 'templates/artist.html',
        controller: "ArtistCtrl",
        resolve: {
            artist: function(ArtistFactory, $stateParams) {
                return ArtistFactory.fetchById($stateParams.artistId);
            }
        } 
    })
    .state('artist.albums', {
        url:"/albums",
        templateUrl: "templates/artistAlbums.html",
        controller: "ArtistCtrl"
    })
    .state('artist.songs', {
        url:"/songs",
        templateUrl: "templates/artistSongs.html",
        controller: "ArtistCtrl"
    })

});


        