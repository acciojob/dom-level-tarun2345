//your JS code here. If required.
let ul = document.getElentsByTagName("ul")[0];
var text;
for(let i=0;i<ul.children.length;i++){
	let node=ul.children[i];
	if(node.id === level){
		text = "The level of the element is: "(i+1);
		alert(text);
	}
}

