var paragraph=document.querySelector(".paragraph");
var Name=document.querySelector(".name");
var role=document.querySelector(".role");
var image=document.querySelector(".img");
var prev=document.querySelector(".prev");
var next=document.querySelector(".next")
const testmonal=[
    {
        paragrap:" Ive been interested in coding for a while but never taken the jump, until now. I couldnt recommend this course enough Im now in the job of my dreams and so excited about the future.",
        nam:"Tanya Sinclair",
        rol:" UX Engineer",
        img:"../images/image-tanya.jpg"
    },
    {
        paragrap:" “ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
        nam:"John Tarkpor",
        rol:" Junior Front-end Developer",
        img:"../images/image-john.jpg"   
    }
];
let currentindex=0;
function updatetestmonal(index){
    paragraph.textContent=testmonal[index].paragrap;
    Name.textContent=testmonal[index].nam;
    role.textContent=testmonal[index].rol;
    image.src=testmonal[index].img

}

prev.addEventListener("click",()=>{
    currentindex= (currentindex === 0)? testmonal.length-1 : currentindex - 1;
    updatetestmonal(currentindex);
})
next.addEventListener("click",()=>{
    currentindex= (currentindex === testmonal.length-1)? 0 :currentindex + 1;
    updatetestmonal(currentindex);
})
updatetestmonal(currentindex);