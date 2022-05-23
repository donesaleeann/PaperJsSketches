// ここにスケッチ名を指定することができる。
let sketchName = 'sketch14';

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
    let angle = 5 * 5;
    let theta = 1000;

    

    for (let i =0; i < count; i++){
        let p2 =Path.Circle([x + lenght, y],5);
        p2.rotate(theta,[x,y]);
       
        theta += angle;
        lenght += 0.5; 
        p2.fillColor = new Color('#000000');
       
    }

      for (let y = 0; y < view.viewSize.height; y += 10){
         for (let x = 0; x < view.viewSize.width; x += 10){
         let circle = Path.Circle([x,y],4)
         circle.fillColor = new Color('#ffffff')
       }
      }
    

    

    
    
    let circle = Path.Circle([250,250],7);
    circle.fillColor = new Color('#000000');

     
    

    // 画面を描く。
    view.draw();
});