new Vue({
  el: "#app",
  data: {
    player: 100,
    monster: 100,
    game : false
  },
  methods: {
  startGame: function () {
    this.game = true;
    },
    attect: function () {
        /* Saldırı zamanında can azaltmak için random sayı oluştur*/
        var point = Math.ceil(Math.random() * 10);
        /* oyuncunun canından eksilt*/
        this.monster-=point;
        /*Canavarın Canını azaltma konksiyonunu çalıştır */
        this.monsterAttect();
        console.log(this.monster);
        console.log(this.player);
    },
    privateAttect: function () {
            /* Saldırı zamanında can azaltmak için random sayı oluştur*/
            var point = Math.ceil(Math.random() * 50);
            /* oyuncunun canından eksilt*/
            this.monster-=point;
            /*Canavarın Canını azaltma konksiyonunu çalıştır */
            this.monsterAttect();
            console.log(this.monster);
            console.log(this.player);
    },
    firstAid: function () {
         /* Saldırı zamanında can azaltmak için random sayı oluştur*/
         var point = Math.ceil(Math.random() * 50);
         /* oyuncunun canından eksilt*/
         this.monster+=point;
         /*Canavarın Canını azaltma konksiyonunu çalıştır */
         this.monsterAttect();
         console.log(this.monster);
         console.log(this.player);
    }
    
    ,
    giveUp: function () {
        this.player = 0;
        console.log(this.monster);
        console.log(this.player);
    },
    /*Canavar İçin saldırı fonksiyonu */
    monsterAttect:function(){
        var point = Math.ceil(Math.random()*15);
        this.player-=point;
        
    }
  }

});
