// ここにスケッチ名を指定することができる。
let sketchName = '乱数';

// function pickRandom(array){
//     let i =Math.floor(Math.random()* array.length);
//     return array[i];
    //floor   2.133456→２
// }
// ロードが完了した時に実行する関数。ここで初期化の処理を書く。
// P5.jsやProcessingのsetupと同じ役割。
window.addEventListener('load', function() {
    // キャンバスの大きさを指定する。
    view.viewSize = new Size(500, 500);


    project.currentStyle = {
        strokeColor: '#000000', // 線の色
        fillColor: '#6d7999', // 塗りの色
        strokeWidth: 5 // 線の幅
    };


    let r =Math.random();
    let g =Math.random();
    let b =Math.random();
    
for (let x =0; x < 500; x +=50){
       for(let y =0; y < 500; y +=50){
         let rectangle =Path.Rectangle([x,y],[50,50]);
    rectangle.fillColor = new Color(r, g, b);
     }
   }

for (let i =0; i < 500; i +=60){
    for (let j =0; j < 500; j +=60){
    let rectangle = Path.Rectangle([i,j],20); 
    }
}
    // 画面を描く。
    view.draw();
});