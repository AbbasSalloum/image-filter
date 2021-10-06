var image=null;

function upload(){
  var imgcanvas=document.getElementById("can");
  var fileinput=document.getElementById("finput");
  image=new SimpleImage(fileinput);
  image.drawTo(imgcanvas);
}

function IsImageUploaded(){
  if(image==null || !image.complete()){
    alert("image not uploaded");
    return false;
  }
  else{
    return true;
  }
}
function makeGray(){
  if(IsImageUploaded(image)){
  for(var pixel of image.values()){
    var avg=((pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3)
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
    }
  var imgcanvas=document.getElementById("can");
  image.drawTo(imgcanvas);
}
}

function Reset(){
  if(IsImageUploaded(image)){
  var imgcanvas=document.getElementById("can");
  var fileinput=document.getElementById("finput");
  image=new SimpleImage(fileinput);
  image.drawTo(imgcanvas);
  }
  
}
function makeRed(){
  if(IsImageUploaded(image)){
  for(var pixel of image.values()){
    var avg=((pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3)
    if(avg<128){
    pixel.setRed(2*avg);
    pixel.setGreen(0);
    pixel.setBlue(0);
    }
    else{
    pixel.setRed(255);
    pixel.setGreen(2*avg -255);
    pixel.setBlue(2*avg -255);
    }
    }
  var imgcanvas=document.getElementById("can");
  image.drawTo(imgcanvas);
}
}

function makeBlue(){
  if(IsImageUploaded(image)){
  for(var pixel of image.values()){
    var avg=((pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3)
    if(avg<128){
    pixel.setRed(0);
    pixel.setGreen(0);
    pixel.setBlue(2*avg);
    }
    else{
    pixel.setRed(2*avg -255);
    pixel.setGreen(2*avg -255);
    pixel.setBlue(255);
    }
    }
  var imgcanvas=document.getElementById("can");
  image.drawTo(imgcanvas);
}
  
}