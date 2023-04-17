//your JS code here. If required.
let ul = document.getElentsByTagName("ul")[0];
let text ;
for(let i=0;i<ul.children.length;i++){
	let id=ul.children[i];
	if(id.id=="level"){
		text = "The level of the element is: "(i+1)
	}
}
alert(text);