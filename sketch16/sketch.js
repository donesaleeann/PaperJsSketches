// ここにスケッチ名を指定することができる。
let sketchName = '白黒';

// ロードが完了した時に実行する関数。ここで初期化の処理を書く。
// P5.jsやProcessingのsetupと同じ役割。
window.addEventListener('load', function() {
    // キャンバスの大きさを指定する。
    view.viewSize = new Size(500, 500);


    project.currentStyle = {
        strokeColor: null, // 線の色
        fillColor: '#000000', // 塗りの色
        strokeWidth: 0.2// 線の幅
    };

    Path.Rectangle([0,0],[500,500]);
    Path.Rectangle([500,500],[0,0]);
    


    for(let x =0; x < 500 * 2 ; x +=9){
    for(let y =0; y < 500; y +=10){
      let p =  Path.Line([0,0],[x,600]);
      let p2=  Path.Line([500,y],[0,y]);
      p.rotate(60);
      p2.rotate(170);
      p.strokeColor = new Color('#ffffff');
      p2.strokeColor = new Color('#000000');
      
    }
  }
     
    // 画面を描く。
    view.draw();
});