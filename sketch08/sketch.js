// ここにスケッチ名を指定することができる。
let sketchName = '乱数2';

// ロードが完了した時に実行する関数。ここで初期化の処理を書く。
// P5.jsやProcessingのsetupと同じ役割。
window.addEventListener('load', function() {
    // キャンバスの大きさを指定する。
    view.viewSize = new Size(500, 500);


    project.currentStyle = {
        strokeColor: null, // 線の色
        fillColor: '#6d7999', // 塗りの色
        strokeWidth: 1 // 線の幅
    };

    function pickRandom(array){
        let i = Math.floor(Math.random() * array.lenght);
        return array[i];
    }
let r = Math.random();
let g = Math.random();
let b = Math.random();

for (let x=0; x < 500; x +=60){
  for (let y =0; y < 500;y +=200){
    let star = Path.Star([x,y],5,15,30);
    star.rotate(45);
    star.fillColor= new Color(r,g,b);
  } 
}





 
    
    

     
    

    // 画面を描く。
    view.draw();
});