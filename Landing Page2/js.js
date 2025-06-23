function doctor(){
    console.log("im rakesh,im doctor");
}
function doctor1(){
    setTimeout(()=>{
    console.log("how can i help you");
    },3000)
}
doctor1(doctor());