// ここにスケッチ名を指定することができる。
let sketchName = '模様緑';

// ロードが完了した時に実行する関数。ここで初期化の処理を書く。
// P5.jsやProcessingのsetupと同じ役割。
window.addEventListener('load', function() {
    // キャンバスの大きさを指定する。
    view.viewSize = new Size(500, 500);


//背景
    project.currentStyle = {
        strokeColor: '#cfe1b9', // 線の色
        fillColor: '#e9f5db', // 塗りの色
        strokeWidth: 7// 線の幅
        
    };
      Path.Rectangle([0,0],[500,500]);

      let x= 40;
       let y= 50;
       while (x < 500 ){
        Path.Circle([x,50],y);
        Path.Circle([x,100],y);
        Path.Circle([x,150],y);
        Path.Circle([x,200],y);
        Path.Circle([x,250],y);
        Path.Circle([x,300],y);
        Path.Circle([x,350],y);
        Path.Circle([x, 400],y);
        Path.Circle([x,450],y);
        x +=50;
       
      
     }

    
      








    

   


    
   
   

     



  

    

   

     

     




   
   

   





    // 画面を描く。
    view.draw();
});