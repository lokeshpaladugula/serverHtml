var http=require("http");
const express = require('express');
const path = require('path');
var app = require('express')();
app.use("/", express.static(path.join(__dirname, "./views/story")));
app.get('/Story/red_hen/:id', (req,res) =>{
    var Number = req.params.id;
    console.log(Number);
 const fs = require('fs');
    var fun = getmypage(Number);
    
    res.send(fun);
});
 function getmypage(Number){
     var nun = ['Little Red Hen ','Once upon a time there was a little red hen.<br> She lived on a pleasant farm and ate the food she grew there.','One day the little red hen found a grain of foxtail millet. She thought she would plant it to grow more grain for herself. <br>"Who will help me plant this grain of foxtail millet?" asked the little red hen.'];
     var nun1 = ['బుజ్జి ఎర్ర కోడి','అనగనగా వక బుజ్జి ఎర్ర కోడి ఉండేది వక ప్రశాంత మయిన పొలములో పండినవి తిని ఆనందంగా ఉండేది.','వక రోజు ఆ బుజ్జి కోడికి వక కొర్రలు విత్తనం దొరికింది. తనుకోసం కొర్రలు పండించుకుందాం అనుకున్నది.<br> ఎవరు నాకు సహాయం చేస్తారు ఈ కొర్ర విత్తనాలు నాటటానికి?అడిగింది ఆ బుజ్జి కోడి'];
     
     var nun2=['home.jpg','run.jpg','win.jpg'];
     
   return('<html lang="te" dir="ltr"><head><meta charset="utf-8">  <style> *{ margin: 0px; padding: 0px;}.n1{ position: relative;top:30px;left: 300px;}.n2{position: relative;left:480px;top: 80px;}.n3 {position: relative;left: 300px;top:140px;}nav{position: relative;top:220px;left:1000px;width:120px;height: 60px;background-color: aqua;}nav ul{position: relative;top:20px;background-color: transparent;left:40px;}.n4{position: relative;top: 170px;left: 120px;width:120px;height: 60px;background-color: aqua;}.n4 ul{position: relative;top:20px;background-color: transparent;left:30px;}</style></head><body><center><h2>'+nun[Number-1]+'</h2></center><div class="n2"><img src ='+'/'+nun2[Number - 1]+' width ="340" height="250"></div><div class="n3"><h3>'+ nun1[Number-1]+'</h3></div><nav><ul><a href="'+(Number - 1 + 2)+'"color="transparent">Next</a></ul></nav><div class="n4"><ul><a href="'+(Number - 1)+'">Previous</a></ul></div></body></html>');
   return(nun[Number-1]+'<br>'+nun1[Number-1]+'<br>'+nun2[Number-1]);
}
app.listen(3000, () => {
    console.log('server started');
  });