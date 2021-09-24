let x=0;
function functioningtime(){   
  if(x==0){
    document.getElementById("start-letters").innerHTML = "tab here to continue" ;
    x++;
  }
  else if(x==1){
    document.getElementById("start-letters").innerHTML = "next(1/5)" ;
    x++;
    document.getElementById("introduction").style.display ="none";
    document.getElementById("cmsn").style.display = "block";
    document.getElementById("cmsn").style.animationName = "fade-out-1";
    document.getElementById("vanoanh1").style.display = "block";
    document.getElementById("vanoanh1").style.animationName = "right-in-1";
    document.getElementById("name").style.display = "block";
    document.getElementById("name").style.animationName ="float-on-1";
    document.getElementById("datebirth").style.display = "block";

  } 
  else if(x==2){
    document.getElementById("start-letters").innerHTML = "next(2/5)" ;
    x++;
    document.getElementById("introduction").style.display ="none";
    document.getElementById("cmsn").style.display = "none";
    document.getElementById("vanoanh1").style.display = "none";
    document.getElementById("name").style.display = "none";
    document.getElementById("datebirth").style.display = "none";

    document.getElementById("wish1").style.display ="block";
    document.getElementById("wish1").style.animationName="fade-out-2";
    document.getElementById("oanh22").style.display = "block";
    document.getElementById("oanh22").style.animationName ="right-in-22";
    document.getElementById("oanh23").style.display = "block";
    document.getElementById("oanh23").style.animationName ="right-in-2";
  }
  else if(x==3){
    document.getElementById("start-letters").innerHTML = "next(3/5)" ;
    x++;
    document.getElementById("wish1").style.display ="none";
    document.getElementById("oanh22").style.display = "none";
    document.getElementById("oanh23").style.display = "none";

    document.getElementById("wish2").style.display = "block";
    document.getElementById("wish2").style.animationName = "fade-out-2";
    document.getElementById("daihoc").style.display = "block";
    document.getElementById("daihoc").style.animationName = "float-on-1";
  }
  else if(x==4){
    document.getElementById("start-letters").innerHTML = "next(4/5)" ;
    x++;
    document.getElementById("wish2").style.display = "none";
    document.getElementById("daihoc").style.display = "none";

    document.getElementById("wish3").style.display = "block";
    document.getElementById("wish3").style.animationName="fade-out-2"
    document.getElementById("hinhcuoi").style.display = "block";
    document.getElementById("hinhcuoi").style.animationName="end";
  }
  else if (x==5){
    document.getElementById("start-letters").innerHTML = "restart(5/5)" ;
    x++;
    document.getElementById("wish3").style.display = "none";
    document.getElementById("hinhcuoi").style.display = "none";

    document.getElementById("loicuoi").style.display = "block";
    document.getElementById("loicuoi").style.animationName = "fade-out-1";
    document.getElementById("credid").style.display = "block";
    document.getElementById("credid").style.animationName = "fade-out-1";
  }
  else if (x==6){
    x=1;
    document.getElementById("loicuoi").style.display = "none";
    document.getElementById("credid").style.display = "none";
    document.getElementById("start-letters").innerHTML = "tab here to continue" ;
    document.getElementById("introduction").style.display ="block";
 }  
}