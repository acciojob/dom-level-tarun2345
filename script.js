//your JS code here. If required.
let ul = document.getElentsByTagName("ul")[0];
let text ;
for(let i=0;i<ul.children.length;i++){
	let node=ul.children[i];
	if(node.id === level){
		alert("The level of the element is: "(i+1));
	}
}
