new Vue({
  el: "#app",
  data: {
    player: 100,
    monster: 100,
    game: false,
    logs: [],
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
      this.GameLogs({turn : "Oyuncu", text : "Oyuncu Atağı("+ point + ")"})
    },
    privateAttect: function () {
      var point = Math.ceil(Math.random() * 50);
      this.monster -= point;
      this.GameLogs({turn : "Oyuncu", text : "Özel Oyuncu Atağı("+ point + ")"})
    },
    firstAid: function () {
      var point = Math.ceil(Math.random() * 50);
      this.monster += point;
      this.monsterAttect();
      this.GameLogs({turn : "Oyuncu", text : "İlk Yardım ("+ point + ")"})
    },

    giveUp: function () {
      this.player = 0;
      this.GameLogs({turn : "Oyuncu", text : "Pes Etti"})
    },
    /*Canavar İçin saldırı fonksiyonu */
    monsterAttect: function () {
      var point = Math.ceil(Math.random() * 15);
      this.player -= point;
      this.GameLogs({turn : "Canavar", text : "Canavar Atağı("+ point + ")"})
    },
    /* log mantığı*/
    GameLogs: function (log) {
        this.logs.push(log)
    },
  },
  /* Can durumunu gösteren proges barına göre izleme durumuna göre 0 a eşit olduğunda durması eksiye düşmeme durumu*/
  watch: {
    /* value değeri alır */
    player: function (value) {
      if (value <= 0) {
        this.player = 0;
        if (confirm("Oyunu Kaybettiniz")) {
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
        if (confirm("Oyunu Kazandınız")) {
          this.player = 100;
          this.monster = 100;
        }
      }
    },
  },
});
