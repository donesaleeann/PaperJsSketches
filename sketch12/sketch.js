// ここにスケッチ名を指定することができる。
let sketchName = 'なんか2';

// ロードが完了した時に実行する関数。ここで初期化の処理を書く。
// P5.jsやProcessingのsetupと同じ役割。
window.addEventListener('load', function() {
    // キャンバスの大きさを指定する。
    view.viewSize = new Size(500, 500);


    project.currentStyle = {
        strokeColor: null, // 線の色
        fillColor: '#006d77', // 塗りの色
        strokeWidth: 1// 線の幅
    };

    let x = view.viewSize.width * 0.5;
    let y = view.viewSize.height * 0.5;

   

    let count = 500;
    let lenght = 10;
    let angle = 5 * 5;
    let theta = 300 ;

    

    for (let i =0; i < count; i++){
        let p = Path.Rectangle([x + lenght, y],20);
        let p2 =Path.Circle([x + lenght, y],6);
        let p3 =Path.Rectangle([x, y + lenght],5);
        p.rotate(theta,[x,y]);
        p2.rotate(theta,[x,y]);
        p3.rotate(theta - 1,[x,y]);
        theta += angle;
        lenght +=0.5; 
        p2.fillColor = new Color('#ffffff');
        p3.fillColor = new Color('#000000');
    }

    
    

    

    
    
    let circle = Path.Circle([250,250],40);
    circle.fillColor = new Color('#ffffff');

     
    

    // 画面を描く。
    view.draw();
});