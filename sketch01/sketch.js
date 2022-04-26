// ここにスケッチ名を指定することができる。
let sketchName = '四角';

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

    
    let y=200;
    let xy=150;
    let Rectangle= Path.Rectangle([40, y], [400, y]);

    //長方形
    Path.Rectangle([40, y], [400, y]);
    Path.Rectangle([90,xy],[300,xy]);
    // //［］のカッコは、配列を意味する。
    // //正円
     Path.Circle([80,400],80);
     Path.Circle([400,400],80);

     
    

    // 画面を描く。
    view.draw();
});