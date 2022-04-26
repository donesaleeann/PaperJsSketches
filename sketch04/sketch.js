// ここにスケッチ名を指定することができる。
let sketchName = '模様';

// ロードが完了した時に実行する関数。ここで初期化の処理を書く。
// P5.jsやProcessingのsetupと同じ役割。
window.addEventListener('load', function() {
    // キャンバスの大きさを指定する。
    view.viewSize = new Size(500, 500);


    project.currentStyle = {
        strokeColor: '#000000', // 線の色
        fillColor: '#6d7999', // 塗りの色
        strokeWidth: 1 // 線の幅
    };

    Path.Rectangle([0,0],[500,500]);

    //  Path.Line([0,0],[500,500]);
    // Path.Line([0,10],[400,0]);

    
    
    let x= 0;
    let y =0;
    while (x < 500){
     Path.Line([500,y],[x,500]);
     Path.Line([500,500],[y,x]);
     x +=20;
    }

  

    




    
    

    

    

     
    

    // 画面を描く。
    view.draw();
});