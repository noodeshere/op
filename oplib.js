function bounceoff(Object1,Object2){
if(Object1.x-Object2.x<=Object1.width/2+Object2.width/2&&
    Object2.x-Object1.x<=Object1.width/2+Object2.width/2&&
    Object1.y-Object2.y<=Object1.height/2+Object2.height/2&&
    Object2.y-Object1.y<=Object1.height/2+Object2.height/2){
 Object1.velocityX=-Object1.velocityX
 Object2.velocityX=-Object2.velocityX   
 Object1.velocityY=-Object1.velocityY
 Object2.velocityY=-Object2.velocityY   
}
}

