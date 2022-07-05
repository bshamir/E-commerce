
//storing cart items in local storage
let carts=document.querySelectorAll('.add-cart');

let products=[
    {
    name:"",
    tag:"",
    price:"",
    inCart:""
},
]





for(let i=0;i<carts.length;i++){
    carts[i].addEventListener('click',()=>{
        itemNumbers(products[i]);

    })
}

function onloadItemsNumbers(){
    let productNumbers=localStorage.getItem('itemNumbers');
}


function itemNumbers(products){
    let productNumbers=localStorage.getItem('itemNumbers');

    productNumbers=parseInt(productNumbers);
    if(productNumbers){
        localStorage.setItem('itemNumbers',productNumbers + 1);
        
    }else{
        localStorage.setItem('itemNumbers',1);
    
    }
    setItems(products);
}
function setItems(products){

}
onloadItemsNumbers();

//login valadition
var objPeople = [
	{ 
		email: "ram@gmail.com",
		password: "1234"
	},
	{ 
		email: "hari@gmail.com",
		password: "1234"
	},
	{ 
		email: "sam@gmail.com",
		password: "1234"
	}

]

function logIn() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {

		if(username == objPeople[i].username && password == objPeople[i].password) {
			console.log(username + " is logged in!!!")
			return
		}
	}
	console.log("incorrect username or password")
}