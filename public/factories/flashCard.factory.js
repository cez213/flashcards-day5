app.factory('FlashCardFactory', function ($http) {
    return {
      getFlashCards: function (cat) {
        var config = {};
        if (cat) config.params = {category: cat};
        return $http.get('/cards', config)
        .then(function (res) {
          return res.data;
        });
      },
      create: function (cardData, param) {
        return $http.post('/cards/'+ param, cardData)
        .then(function (res) {
          return res.data;
        });
      },
      getById: function (flashCardId){
        return $http.get('/cards/' + flashCardId)
          .then(function(res){
            return res.data;
          })
      },
      update: function (cardData, flashCardId) {
        return $http.put('/cards/' + flashCardId, cardData)
          .then(function (res){
            return res.data;
          })
      }
    }
  })