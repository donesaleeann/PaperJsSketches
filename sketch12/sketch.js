// ここにスケッチ名を指定することができる。
let sketchName = 'なんか2';

// ロードが完了した時に実行する関数。ここで初期化の処理を書く。
// P5.jsやProcessingのsetupと同じ役割。
window.addEventListener('load', function() {
    // キャンバスの大きさを指定する。
    view.viewSize = new Size(500, 500);


    project.currentStyle = {
        strokeColor: '#ffffff', // 線の色
        fillColor: '#006d77', // 塗りの色
        strokeWidth: 1// 線の幅
    };

    let x = view.viewSize.width * 0.5;
    let y = view.viewSize.height * 0.5;

    let count = 500;
    let lenght = 10;
    let angle = 5 * 5;
    let theta = 500 ;

    

    for (let i =0; i < count; i++){
        let p = Path.Rectangle([x + lenght, y],20);
        p.rotate(theta,[x,y]);
        theta += angle;
        lenght +=0.5; 
    }
    
    let circle = Path.Circle([250,250],40);
    circle.fillColor = new Color('#ffffff');

     
    

    // 画面を描く。
    view.draw();
});