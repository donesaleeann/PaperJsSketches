// ここにスケッチ名を指定することができる。
let sketchName = '花';


// ロードが完了した時に実行する関数。ここで初期化の処理を書く。
// P5.jsやProcessingのsetupと同じ役割。
window.addEventListener('load', function() {
    // キャンバスの大きさを指定する。
    view.viewSize = new Size(500, 500);


    project.currentStyle = {
        strokeColor: null, // 線の色
        fillColor: '#e26d5c', // 塗りの色
        strokeWidth: 1 // 線の幅
    };

    let x = view.viewSize.width * 0.5;
    let y = view.viewSize.height * 0.5;

    let count =100;
    let lenght = 50;
    let angle =30;
    let theta = 0;
   
  


    for (let i = 0; i < count; i++){
        let p = Path.Circle([x , y + lenght],60);
    p.rotate(theta, [x , y ]);
    theta += angle;
    lenght += 1;

}
 
let circle = Path.Circle([250,250 + 2],70);
 circle.fillColor = new Color('#ffe1a8');





 
    
    

     
    

    // 画面を描く。
    view.draw();
});