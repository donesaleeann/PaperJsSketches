// ここにスケッチ名を指定することができる。
let sketchName = '？';

// ロードが完了した時に実行する関数。ここで初期化の処理を書く。
// P5.jsやProcessingのsetupと同じ役割。
window.addEventListener('load', function() {
    // キャンバスの大きさを指定する。
    view.viewSize = new Size(500, 500);


    project.currentStyle = {
        strokeColor: '#4f772d', // 線の色
        fillColor: null, // 塗りの色
        strokeWidth: 1, // 線の幅
    };
   

    let x = view.viewSize.width * 0.5;
    let y = view.viewSize.height * 0.5;

    let count =200;
    let lenght = 50;
    let angle = 20;
    let theta = 10;
   
  


    for (let i = 0; i < count; i++){
        let p = Path.Circle([x + lenght, y],50);
    p.rotate(theta, [x , y ]);
    theta += angle;
    lenght += 1;

}

    // 画面を描く。
    view.draw();
});