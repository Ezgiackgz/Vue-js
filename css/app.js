let score ;
new Vue({
  el: "#app",
  data: {
    player: 100,
    monster: 100,
    game: false,
    score: 0,
    logs: [],
    attect_player: 10,
    attect_private: 25,
    attect_monster: 15,
    heal_up: 20,
    log_text: {
      attect: "Oyuncu Atağı  :",
      privateAttect: "Özel Oyuncu Atağı :",
      firstAid: "İlk Yardım :",
      giveUp: "Oyuncu Pes Etti",
      monsterAttect: "Canavar Atağı :",
    },
    log_turn: {
      Player: "Oyuncu",
      Monster: "Canavar",
    },
  },
  methods: {
    startGame: function () {
      this.game = true;
    },

    attect: function () {
      /* Saldırı zamanında can azaltmak için random sayı oluştur*/
      var point = this.attect_player;
     score += 5;
     alert(score);
      /* oyuncunun canından eksilt*/
      this.monster -= point;
      /*Canavarın Canını azaltma konksiyonunu çalıştır */
      this.monsterAttect();
      this.GameLogs({
        turn: this.log_turn.Player,
        text: this.log_text.attect + point,
      });
    },
    privateAttect: function () {
      var point = this.attect_private;
      this.monster -= point;
      this.GameLogs({
        turn: this.log_turn.Player,
        text: this.log_text.privateAttect + point,
      });
    },
    firstAid: function () {
      var point = this.heal_up;
      this.player += point;
      this.monsterAttect();
      this.GameLogs({
        turn: this.log_turn.Player,
        text: this.log_text.firstAid + point,
      });
    },

    giveUp: function () {
      this.player = 0;
      this.GameLogs({ turn: this.log_turn.Player, text: this.log_text.giveUp });
    },
    /*Canavar İçin saldırı fonksiyonu */
    monsterAttect: function () {
      var point = this.attect_monster;
      this.player -= point;
      this.GameLogs({
        turn: this.log_turn.Monster,
        text: this.log_text.monsterAttect + point,
      });
    },
    /* log mantığı*/
    GameLogs: function (log) {
      this.logs.push(log);
    },
  },
  /* Can durumunu gösteren proges barına göre izleme durumuna göre 0 a eşit olduğunda durması eksiye düşmeme durumu*/
  watch: {
    /* value değeri alır */
    player: function (value) {
      if (value <= 0) {
        this.player = 0;
        if (
          swal
            .fire({
              title: "Oyunu Kaybettiniz Tekrar Denemek İster misiniz?",
              text: "Skor : " + this.score,
              icon: "error",
              confirmButtonText: "Devam",
            })
            .then((willDelete) => {
              let timerInterval;
              if (willDelete) {
                Swal.fire({
                  title: "Oyun Yeniden Yükleniyor Başarılar",
                  timer: 10000,
                  didOpen: () => {
                    Swal.showLoading();
                    timerInterval = setInterval(() => {
                      
                    }, 1000);
                  },
                 
                });
              }
            })
        ) {
          this.player = 100;
          this.monster = 100;
          this.logs = [];
        }
      } else if (value >= 100) {
        this.player = 100;
      }
    },
    monster: function (value) {
      if (value <= 0) {
        this.monster = 0;
        if (
          swal.fire({
            title: "Tebrikler Oyunu Kazandınız",
            text: "Skorunuz : " + this.score,
            icon: "success",
            confirmButtonText: "Ok",
          })
        ) {
          this.player = 100;
          this.monster = 100;
          this.logs = [];
        }
      }
    },
  },
});
