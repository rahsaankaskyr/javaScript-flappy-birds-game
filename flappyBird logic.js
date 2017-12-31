function draw(){

	ctx.drawImage(bg, 0, 0);
	ctx.drawImage(pipeNorth, pX, pY);
	ctx.drawImage(pipeSouth, pX, pY+Const);


	ctx.drawImage(fg, 0, cvs.height - fg.height);

	ctx.drawImage(bird, bX, bY);



	bY+=gravity;
	requestAnimationFrame(draw);



	for(var i=0; i<pipe.length; i++){
		ctx.drawImage(pipeNorth, pipe[i].x, pipe[i].y);
		ctx.drawImage(pipeNorth, pipe[i].x, pipe[i].y+Const);

		pipe[i].x--;
		if(pipe[i].x == cvs.width - 188){
			pipe.push(

					x : cvs.width,
	y:Math.floor(Math.random()*pN.height) - pN.height				


				);

		}


	}

}


draw(); 



var pipe = [];
pipe[0]={
	x:cvs.width,
	y:0
}



// game over 

if bX >= pX 

	&&

bX + bird.width <= pX + pipe.width

	&&

( bY <= pY + pipe.height ||  bY + bird.height >= pY +const)

	||

bY + bird.height   >= cvs.height - fg.height






