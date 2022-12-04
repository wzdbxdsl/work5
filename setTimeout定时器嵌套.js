var one=document.querySelector('.one');
var two=document.querySelector('.two');
var three=document.querySelector('.three');
let box=document.querySelector('.box')

//let Time1=setInterval(function(){
//one.style.left=one.offsetLeft+5+"px";
//if(one.offsetLeft=boxWidth)
//{
  //  clearInterval(Time1);
    //let Time2=setInterval(function(){
//
  //      two.style.left=two.offsetLeft+5+"px";
    //    if(two.offsetLeft=boxWidth)
//{
  //  clearInterval(Time2);
    //let time3=setInterval(function(){
      //  three.style.left=three.offsetLeft+5+"px";
        //if(three.offsetLeft=boxWidth)
        //{clearInterval(time3);}
    //},80)
//}
  //  },80)
//}

//},80)
    
//let Time1=setInterval(function move(){ 

  //  if(one.style.left>=box.style.width)
    //{clearInterval(Time1);}
    //else
   // {one.style.left=one.offsetLeft+5+"px";}
 //},10);


     
            function interval(target) {
                let left = one.offsetLeft;
                let t = setTimeout(function() {
                    left += 13;
                    one.style.left = left + 'px';
                   if (left >= target) {
                        one.style.left = target + 'px';
                     }
                      
                 setTimeout(function()  {
                          two.offsetLeft +=13;
                         two.style.left=two.offsetLeft + "px";
                          if(two.offsetLeft>=target){
                            two.style.left=target+"px";
                          }
                          setTimeout(function(){

                            three.offsetLeft +=13;
                            three.style.left=three.offsetLeft + "px";
                             if(three.offsetLeft>=target){
                               three.style.left=target+"px";
                             }

                            
                          },1000);
                          
                          
                        }, 1000 / 90);
                     
                    interval(target);
                }, 1000 / 60)
            }
               interval(500)
       

         





