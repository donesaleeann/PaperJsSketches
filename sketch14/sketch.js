// ここにスケッチ名を指定することができる。
let sketchName = 'Rectagleの集合体';

// ロードが完了した時に実行する関数。ここで初期化の処理を書く。
// P5.jsやProcessingのsetupと同じ役割。
window.addEventListener('load', function() {
    // キャンバスの大きさを指定する。
    view.viewSize = new Size(500, 500);


    project.currentStyle = {
        strokeColor: '#000000', // 線の色
        fillColor: null, // 塗りの色
        strokeWidth: 1// 線の幅
    };

        for (let y = 0; y < 500; y += 30){
         for (let x = 0; x < 500; x += 40){
         Path.Rectangle([x,y],20);
         Path.Rectangle([x + 5, y + 5],10);
         Path.Rectangle([x + 8, y + 8], 5);
       }
      }

// 画面を描く。
    view.draw();
});