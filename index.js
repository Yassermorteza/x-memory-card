var container = document.querySelector('.container');
var divImgLog = [
                  {tag: 'img', class: 'front', src: 'img/logo-bw.png'},
                  {tag: 'img', class: 'back', src: 'img/monsters-01.png'}
                ];

var genDom = new generator();
genDom.renderTag(divImgLog, 12, container);

var matchNumber = document.querySelector('.number');
var tiemrElement = document.querySelector('.timerDisplay');
var pointAElement = document.querySelector('.pointADisplay');
var pointBElement = document.querySelector('.pointBDisplay');
var trunElement = document.querySelector('.turnDisplay');
var btnReset =  document.querySelector('.reset');
var frontCard = document.querySelectorAll('.front');
var backCard = document.querySelectorAll('.back');
var flipper = document.querySelectorAll('.flipper');
var counter = 0;
var counterA = 0;
var counterB = 0;
var timer = 30;
var allItems = [];
var correctItems = [];
var attrObj = {};
var change = false;
var pointsStore = { A: 0,
                    B: 0
                         }; 

let _= id=>document.getElementById(id);
function randomCard(){
	for(var item of backCard){
		var src = 'img/monsters-0'+Math.floor(Math.random()*10)+'.png';
		item.setAttribute('src', src);
	}
}

randomCard();

btnReset.addEventListener('click', function(){ 
   flipper.forEach(el=> el.classList.remove('flip'));
   counter = 0;
   counterA = 0;
   counterB = 0;
   timer = 30;
   allItems = [];
   correctItems = [];
   attrObj = {};
   change = false;
   pointsStore = { A: 0,
                   B: 0 };
  randomCard();
  matchNumber.textContent = 0;
  trunElement.textContent = "A";
  pointAElement.textContent = 0;
  pointBElement.textContent = 0;

});

for(var item of frontCard){
	item.addEventListener('click',(e)=>{
	   e.target.parentElement.parentElement.classList.add('flip');
	   var targetSrc = e.target.nextSibling.getAttribute('src');
	   var targetId = e.target.nextSibling.getAttribute('id');
	   if(!attrObj.card1){
	          attrObj.card1 = targetSrc;
	          allItems.push(targetId);
	   }else{
		   	  if(Object.is(attrObj.card1, targetSrc)){
		   	  	  correctItems.push(targetId);
		   	  	  correctItems.push(allItems[allItems.length-1]);
		          counter++;
		          if(!change){
		          	counterA++ 
		          	pointsStore.A = counterA;
		          }else{
		          	counterB++;
		          	pointsStore.B = counterB;
		          }
	              attrObj = {};
	              matchNumber.textContent = counter;
 		   	  }else{
		   	  	  attrObj = {};
		   	  	  setTimeout(function(){
		   	  	     _(targetId).parentElement.parentElement.classList.remove('flip');
	   	  	         _(allItems[allItems.length-1]).parentElement.parentElement.classList.remove('flip');
		   	  	  },800);      
		   	  }
	   }
	   pointAElement.textContent = pointsStore.A;
       pointBElement.textContent = pointsStore.B;
	});
}

setInterval(()=>{ timer--; tiemrElement.textContent = timer + 's';
	(timer <= 8)? tiemrElement.style.color = "red" : tiemrElement.style.color = "cornflowerblue";
    if (timer === 0){
      	    timer = 30;
      	    counter = 0; 
      	    randomCard();
      	    tiemrElement.textContent = 30 +'s';
      	    matchNumber.textContent = counter;
       	    if(!change){
       	    	change = true;
       	    	trunElement.textContent = "B";
       	    }else{
       	    	change = false;
       	    	trunElement.textContent = "A"; 
       	    };
       	    flipper.forEach(el=> el.classList.remove('flip'));
      	}
},1000);




