new Vue({
  el: '#townList',
  data: {
    town: 'Egg Harbor'
  },
  methods: {
    showTown: function(newTown) {
      this.town = newTown;
    }
  }
});
