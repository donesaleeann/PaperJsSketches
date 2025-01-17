// ここにスケッチ名を指定することができる。
let sketchName = '青い渦';

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
   let lenght = 5;
   let angle = 5 * 35;
   let theta = 1000;

   

   for (let i =0; i < count; i++){
       let p2 =Path.RegularPolygon([x + lenght, y],6,9);
       p2.rotate(theta,[x,y]);
      
       theta += angle;
       lenght += 0.5; 
       p2.fillColor = new Color('#ade8f4');
      
   }


   

    

    // 画面を描く。
    view.draw();
});