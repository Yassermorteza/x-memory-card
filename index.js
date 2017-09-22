var container = document.querySelector('.container');
var matchNumber = document.querySelector('.number');

var divImgLog = [
                  {tag: 'img', class: 'front', src: 'img/logo-bw.png'},
                  {tag: 'img', class: 'back', src: 'img/monsters-01.png'}
                ];

var genDom = new generator();
genDom.renderTag(divImgLog, 12, container);

var frontCard = document.querySelectorAll('.front');
var backCard = document.querySelectorAll('.back');
var allItems = [];
var correctItems = [];
var attrObj = {};
var counter = 0;

let _=(id)=>document.getElementById(id);

for(var item of backCard){
	var src = 'img/monsters-0'+Math.floor(Math.random()*10)+'.png';
	item.setAttribute('src', src);
}

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
	              attrObj = {};
	              matchNumber.innerHTML = counter;
		   	  }else{
		   	  	  attrObj = {};
		   	  	  setTimeout(function(){
		   	  	     _(targetId).parentElement.parentElement.classList.remove('flip');
	   	  	         _(allItems[allItems.length-1]).parentElement.parentElement.classList.remove('flip');
		   	  	  },1000);      
		   	  }
	   }
	});
}


