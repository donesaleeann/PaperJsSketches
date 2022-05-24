// ここにスケッチ名を指定することができる。
let sketchName = 'ギザギザ';

// ロードが完了した時に実行する関数。ここで初期化の処理を書く。
// P5.jsやProcessingのsetupと同じ役割。
window.addEventListener('load', function() {
    // キャンバスの大きさを指定する。
    view.viewSize = new Size(500, 500);


    project.currentStyle = {
        strokeColor: null, // 線の色
        fillColor: null, // 塗りの色
        strokeWidth: 1 // 線の幅
    };

   let randomRange = 10;


  
    for (let y = 0; y < 500; y += 30){
        for (let x = 0; x < 500; x += 40){
            let rand_x = Math.random()* randomRange - randomRange * 0.9;
            let rand_y = Math.random()* randomRange - randomRange * 0.9;

       let p= Path.Rectangle([x + rand_x ,y + rand_y],10);
       let p2 = Path.Rectangle([x + 5 + rand_x, y + 5 + rand_y],10);
       let p3 = Path.Rectangle([x + 10 + rand_x, y + 10 +rand_y], 10);
       p.fillColor = p2.fillColor = p3.fillColor = new Color('#e5989b');
      }
     }
      
    

     
    

    // 画面を描く。
    view.draw();
});