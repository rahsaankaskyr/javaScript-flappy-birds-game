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
		
	}

}


draw(); 



var pipe = [];
pipe[0]={
	x:cvs.width,
	y:0
}