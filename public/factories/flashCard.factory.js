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
      create: function (cardData) {
        return $http.post('/cards/form', cardData)
        .then(function (res) {
          return res.data;
        });
      },
      getById: function (flashCardId, $q){
        //$q is like bluebird, it is a angular promise library
        if(!flashCardId) return $q.reject("id is required");
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
      },
      remove: function (flashCardId) {
        return $http.delete('/cards/' + flashCardId + '/delete')
          .then(function (res){
            return res.data;
          })
      }
    }
  })