// ここにスケッチ名を指定することができる。
let sketchName = '模様';

// ロードが完了した時に実行する関数。ここで初期化の処理を書く。
// P5.jsやProcessingのsetupと同じ役割。
window.addEventListener('load', function() {
    // キャンバスの大きさを指定する。
    view.viewSize = new Size(500, 500);


//背景
    project.currentStyle = {
        strokeColor: '#d4201f', // 線の色
        fillColor: '#f9e114', // 塗りの色
        strokeWidth: 1 // 線の幅
        
    };
    Path.Rectangle([0,0],[500,500]);

    let x=0;
    while(x < 500);{
      Path.Circle([x,10],10);
      Path.Circle([x,20],10);
    }
    



    
    
    

       
     
      




    

   


    
   
   

     



  

    

   

     

     




   
   

   





    // 画面を描く。
    view.draw();
});