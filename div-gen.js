class generator {

	constructor(item){
       this.item = item;
	}
    renderTag(main, row, div){
       var divElement = '';
       for(var i=0; i<row; i++){
       	 this.imgElement= main.map((el)=>{
       	 return '<'+el.tag+' class="'+el.class+'" src="'+el.src+'" id="'+i+'">';
       	}).join('');
       	divElement += '<div class="flipper"><div class="card">'+this.imgElement+'</div></div>'      
       }
       div.innerHTML = divElement;
    }
}

