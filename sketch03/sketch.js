// ここにスケッチ名を指定することができる。
let sketchName = '模様黄色';

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

//黒い線
      project.currentStyle = {
        strokeColor: '#000000', // 線の色
        fillColor: 'null', // 塗りの色
        strokeWidth: 5 // 線の幅
    };
    
    let z =30;
    while(z < 500){
      Path.Line([z,0],[z,500]);
      Path.Line([500,z],[0,z]);
      z +=50;
    
    }
//赤線
    project.currentStyle = {
      strokeColor: '#d4201f', // 線の色
      fillColor: null, // 塗りの色
      strokeWidth: 1 // 線の幅
      
  };
  
   let x= 0;
   while (x < 500){
    Path.Line([x,0],[x,500]);
    Path.Line([500,x],[0,x]);
    x +=50;
   }
   
   let y =10;
   while (y < 500){
       Path.Line([y,0],[y,500]);
       Path.Line([0,y],[500,y]);
     y +=50;
   }




    

   


    
   
   

     



  

    

   

     

     




   
   

   





    // 画面を描く。
    view.draw();
});