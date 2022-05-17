// ここにスケッチ名を指定することができる。
let sketchName = '蚊取り線香';

// ロードが完了した時に実行する関数。ここで初期化の処理を書く。
// P5.jsやProcessingのsetupと同じ役割。
window.addEventListener('load', function() {
    // キャンバスの大きさを指定する。
    view.viewSize = new Size(500, 500);


    project.currentStyle = {
        strokeColor: null, // 線の色
        fillColor: '#52796f', // 塗りの色
        strokeWidth: 1// 線の幅
    };
    let x = view.viewSize.width * 0.5;
    let y = view.viewSize.height * 0.5;

    let count = 300;
    let lenght = 10;
    let angle =  5;
    let theta = 100  ;


    for (let i =0; i < count; i++){
        let p = Path.Rectangle([x + lenght, y],20);
        p.rotate(theta,[x,y]);
        theta += angle;
        lenght +=0.6; 
    }

    for (let i =0; i < count; i +=60 ){
        for(let j =0; j < count; j +=70 ){
          let rectangle =Path.Rectangle([x + lenght,y],10);
          rectangle.rotate(theta,[x,y])
          theta += angle;
          lenght +=0.4;
     rectangle.fillColor = new Color('#9a031e');
      }
    }

    
    
    
     
    

    // 画面を描く。
    view.draw();
});