// ここにスケッチ名を指定することができる。
let sketchName = 'シャボン玉みたいなやつ';

// ロードが完了した時に実行する関数。ここで初期化の処理を書く。
// P5.jsやProcessingのsetupと同じ役割。
window.addEventListener('load', function() {
    // キャンバスの大きさを指定する。
    view.viewSize = new Size(500, 500);


    project.currentStyle = {
        strokeColor: null, // 線の色
        fillColor: '#6d7999', // 塗りの色
        strokeWidth: 1 // 線の幅
    };

   let rect = Path.Rectangle([0, 0], [500, 500]);
   rect.fillColor= new Color('#98c1d9')


      let randomRange =15;

    for (let x = 8; x < view.viewSize.height; x +=20){
      for (let y = 5; y < view.viewSize.height; y +=30){
        let rand_x = Math.random() * randomRange - randomRange * 1;
        let rand_y = Math.random() * randomRange - randomRange * 0.7;

        let count = 100;
        let angle = 5 ;
        let theta = 100;

          for (let i =0; i < count; i++){
           let p2 =Path.Circle([x + rand_x, y + rand_y],1);
           p2.rotate(theta,[x ,y + rand_y]);
          
         theta += angle;
  
           p2.fillColor = new Color('#ffffff');
          
       }
       }
      }

     

     
    

    // 画面を描く。
    view.draw();
});