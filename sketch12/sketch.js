// ここにスケッチ名を指定することができる。
let sketchName = 'なんか2';

// ロードが完了した時に実行する関数。ここで初期化の処理を書く。
// P5.jsやProcessingのsetupと同じ役割。
window.addEventListener('load', function() {
    // キャンバスの大きさを指定する。
    view.viewSize = new Size(500, 500);


    project.currentStyle = {
        strokeColor: null, // 線の色
        fillColor: '#ccd5ae', // 塗りの色
        strokeWidth: 1// 線の幅
    };

    let x = view.viewSize.width * 0.5;
    let y = view.viewSize.height * 0.5;

   

    let count = 500;
    let lenght = 15;
    let angle = 5 * 7;
    let theta = 300 ;

    

    for (let i =0; i < count; i++){
        let p = Path.Rectangle([x + lenght, y],20);
        let p2 =Path.Circle([x + lenght, y],6);
        let p3 =Path.Rectangle([x, y + lenght],10);
        p.rotate(theta,[x,y]);
        p2.rotate(theta,[x,y]);
        p3.rotate(theta - 5,[x,y]);
        theta += angle;
        lenght +=1; 
        p2.fillColor = new Color('#e9edc9');
        p3.fillColor = new Color('#ffffff');
    }
    
    let circle = Path.Circle([250,250],35);
    circle.fillColor = new Color('#e9edc9');

     
    

    // 画面を描く。
    view.draw();
});