// ここにスケッチ名を指定することができる。
let sketchName = 'Rectaglnoise';

// ロードが完了した時に実行する関数。ここで初期化の処理を書く。
// P5.jsやProcessingのsetupと同じ役割。
window.addEventListener('load', function() {
    // キャンバスの大きさを指定する。
    view.viewSize = new Size(500, 500);


    project.currentStyle = {
        strokeColor: null, // 線の色
        fillColor: null, // 塗りの色
        strokeWidth: 0.5// 線の幅
    };

     let randomRange = 800;

    for (let y = 0; y < 500; y += 40){
         for (let x = 0; x < 500; x += 40){
             let rand_x = Math.random() * randomRange - randomRange * 0.5;
             let rand_y = Math.random() * randomRange - randomRange * 0.5;
             
         let p = Path.Rectangle([x + rand_x ,y + rand_y ],90);
         let p2 = Path.Rectangle([x + 7 + rand_x,y + 7 + rand_y],90); 
        
         p.strokeColor = new Color ('#036666');
         p2.strokeColor = new Color ('#83c5be');
         
         
       }
      }

     

// 画面を描く。
    view.draw();
});