function draw(){

	ctx.drawImage(bg, 0, 0);
	ctx.drawImage(pipeNorth, pX, pY);
	ctx.drawImage(pipeSouth, pX, pY+Const);


	ctx.drawImage(fg, 0, cvs.height - fg.height);

	ctx.drawImage(bird, bX, bY);




	requestAnimationFrame(draw);
	

}