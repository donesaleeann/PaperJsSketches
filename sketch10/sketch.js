// ここにスケッチ名を指定することができる。
let sketchName = '形';

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

    let x = view.viewSize.width * 0.6;
    let y = view.viewSize.height * 0.4;

    let x2 = view.viewSize.width * 0.5;
    let y2 = view.viewSize.width * 0.5;

    let count =500;
    let lenght = 20;
    let angle =10;
    let theta = 10;
   
  


    for (let i = 0; i < count; i++){
        let p = Path.Circle([x , y + lenght],500);
    p.rotate(theta, [x + 20 , y + 7]);
    p.rotate(-45,[x2,y2]);
    theta += angle;
    lenght += 10;

}
    

     
    

    // 画面を描く。
    view.draw();
});