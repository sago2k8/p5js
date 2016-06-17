var colors = [];
var wt=0;
var control=0;
var osc;
var notes= [];
function setup() {
	createCanvas(window.innerWidth,window.innerHeight);
	
	colors[0] = color(255,189,34);
	colors[1] =	color(232,95,12);
	colors[2] =	color(255,0,0);
	colors[3] =	color(196,12,232);
	colors[4] =color(44,13,255);

	osc = new p5.Oscillator();
		osc.setType('sine');
		osc.freq(200);
		osc.amp(0.2);
		osc.start();
     notes = [160.35,190.45,210.83,230.12,240.50,290.14,160.35];

     delay = new p5.Delay();


}

function draw() {
	/*var aleatorioX = Math.round(Math.random()*100);
	var aleatorioY = Math.round(Math.random()*100);
	//background(255);
	
	fill(255,3);
	rect(0,0,width,height)
	if(mouseIsPressed){
		fill(colors[parseInt(random(5))]);
	}else fill(colors[parseInt(random(5))]);
  	ellipse(mouseX,mouseY,wt,wt);
  	ellipse(width-mouseX,mouseY,wt,wt);
  	ellipse(mouseX, height-mouseY, wt , wt );
  	ellipse(width-mouseX, height-mouseY, wt , wt );

  	if(control==0){
  		wt+=1;
  		if(wt==100){
  			control= 1;
  		}
  	}else {
  		wt-=1;
  		if(wt==0){
  			control=0;
  		}

  	}*/
    //osc.freq(mouseX);
  	var pos = map(mouseY,0,height,1,0);
  	osc.amp(pos);

  	if(mouseX>0 && mouseX<=width/7){osc.freq(notes[0]);}
  	if(mouseX>width/7&&mouseX<=2*width/7){osc.freq(notes[1]);}
  	if(mouseX>2*width/7&&mouseX<=3*width/7){osc.freq(notes[2]);}
  	if(mouseX>3*width/7&&mouseX<=4*width/7){osc.freq(notes[3]);}
  	if(mouseX>4*width/7&&mouseX<=5*width/7){osc.freq(notes[4]);}
  	if(mouseX>5*width/7&&mouseX<=6*width/7){osc.freq(notes[5]);}
  	if(mouseX>6*width/7&&mouseX<=7*width/7){osc.freq(notes[5]);}

  	delay.process(osc,.12,.7,2300);

  }


  	