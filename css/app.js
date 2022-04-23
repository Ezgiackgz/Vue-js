new Vue({
  el: "#app",
  data: {
    player: 100,
    monster: 100,
    game: false,
  },
  methods: {
    startGame: function () {
      this.game = true;
    },
    attect: function () {
      /* Saldırı zamanında can azaltmak için random sayı oluştur*/
      var point = Math.ceil(Math.random() * 10);
      /* oyuncunun canından eksilt*/
      this.monster -= point;
      /*Canavarın Canını azaltma konksiyonunu çalıştır */
      this.monsterAttect();
    },
    privateAttect: function () {
      var point = Math.ceil(Math.random() * 50);
      this.monster -= point;
    },
    firstAid: function () {
      var point = Math.ceil(Math.random() * 50);
      this.monster += point;
      this.monsterAttect();
    },

    giveUp: function () {
      this.player = 0;
    },
    /*Canavar İçin saldırı fonksiyonu */
    monsterAttect: function () {
      var point = Math.ceil(Math.random() * 15);
      this.player -= point;
    },
  },
  /* Can durumunu gösteren proges barına göre izleme durumuna göre 0 a eşit olduğunda durması eksiye düşmeme durumu*/
  watch: {
    /* value değeri alır */
    player: function (value) {
      if (value <= 0) {
        this.player = 0;
        if(confirm("Oyunu Kaybettiniz")){
            this.player = 100;
            this.monster = 100;
        }
      } else if (value >= 100) {
        this.player = 100;
      }
    },
    monster: function (value) {
      if (value <= 0) {
        this.monster = 0;
        if(confirm("Oyunu Kazandınız")){
            this.player = 100;
            this.monster = 100;
        }
      }
    }
  },
});
