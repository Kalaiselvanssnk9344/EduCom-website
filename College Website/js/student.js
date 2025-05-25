

// overall number increment 

let number = document.getElementById("number_op");
let counter = 0;

setInterval(() =>{
    if(counter == 88){
            clearInterval();
    }
    else{
        counter += 1;
        number.innerHTML = counter + "%";
    }
}, 22.72);




let hasanimated = false;
let hasanimated_sem2 = false;
let hasanimated_sem3 = false;
let hasanimated_sem4 = false;
let hasanimated_sem5 = false;
let hasanimated_sem6 = false;




function startAnimation(){
    


let result_page = document.getElementById("result_page");



// result_page.addEventListener("mouseenter", function(){

// sem1 increment 

    if(hasanimated){
        return ;
    }

let number_sem1 = document.getElementById("number_sem1");
let sem1_counter = 0.0;
let target = 8.8;
let sem1_circle = document.querySelector(".sem1_circle");

sem1_circle.style.animationPlayState = "running";

setInterval(()=>{
    if(sem1_counter >= target - 0.1){
        clearInterval();
        hasanimated = true;
    }
    else{
        sem1_counter += 0.1;
        number_sem1.innerHTML = sem1_counter.toFixed(1) ;
    }
}, 22.72);


// sem2 increment 

    if(hasanimated_sem2){
        return ;
    }

let number_sem2 = document.getElementById("number_sem2");
let sem2_counter = 0.0;
let target_sem2 = 8.6;
let sem2_circle = document.querySelector(".sem2_circle");

sem2_circle.style.animationPlayState = "running";

setInterval(()=>{
    if(sem2_counter >= target_sem2 - 0.1){
        clearInterval();
        hasanimated_sem2 = true;
    }
    else{
        sem2_counter += 0.1;
        number_sem2.innerHTML = sem2_counter.toFixed(1) ;
    }
}, 22.72);



// sem3 increment 

    if(hasanimated_sem3){
        return ;
    }

let number_sem3 = document.getElementById("number_sem3");
let sem3_counter = 0.0;
let target_sem3 = 8.5;
let sem3_circle = document.querySelector(".sem3_circle");

sem3_circle.style.animationPlayState = "running";

setInterval(()=>{
    if(sem3_counter >= target_sem3 - 0.1){
        clearInterval();
        hasanimated_sem3 = true;
    }
    else{
        sem3_counter += 0.1;
        number_sem3.innerHTML = sem3_counter.toFixed(1) ;
    }
}, 22.72);



// sem4 increment 

    if(hasanimated_sem4){
        return ;
    }

let number_sem4 = document.getElementById("number_sem4");
let sem4_counter = 0.0;
let target_sem4 = 8.4;
let sem4_circle = document.querySelector(".sem4_circle");

sem4_circle.style.animationPlayState = "running";

setInterval(()=>{
    if(sem4_counter >= target_sem4 - 0.1){
        clearInterval();
        hasanimated_sem4 = true;
    }
    else{
        sem4_counter += 0.1;
        number_sem4.innerHTML = sem4_counter.toFixed(1) ;
    }
}, 22.72);



// sem5 increment 

    if(hasanimated_sem5){
        return ;
    }

let number_sem5 = document.getElementById("number_sem5");
let sem5_counter = 0.0;
let target_sem5 = 8.3;
let sem5_circle = document.querySelector(".sem5_circle");

sem5_circle.style.animationPlayState = "running";

setInterval(()=>{
    if(sem5_counter >= target_sem5 - 0.1){
        clearInterval();
        hasanimated_sem5 = true;
    }
    else{
        sem5_counter += 0.1;
        number_sem5.innerHTML = sem5_counter.toFixed(1) ;
    }
}, 22.72);

// sem6 increment 

    if(hasanimated_sem6){
        return ;
    }

let number_sem6 = document.getElementById("number_sem6");
let sem6_counter = 0.0;
let target_sem6 = 8.1;
let sem6_circle = document.querySelector(".sem6_circle");

sem6_circle.style.animationPlayState = "running";

setInterval(()=>{
    if(sem6_counter >= target_sem6 - 0.1){
        clearInterval();
        hasanimated_sem6 = true;
    }
    else{
        sem6_counter += 0.1;
        number_sem6.innerHTML = sem6_counter.toFixed(1) ;
    }
}, 22.72);











// });


}

result_page.addEventListener("mouseenter", startAnimation);


let hasanimated_attend1 = false;
let hasanimated_attend2 = false;
let hasanimated_attend3 = false;

function startAttendanceAnimation(){


// total_working_days

    if(hasanimated_attend1){
        return ;
    }

let number_attend1 = document.getElementById("number_attend1");
let attend1_counter = 0;
let target_attend1 = 100;
let attend1_circle = document.querySelector(".attend1_circle");

attend1_circle.style.animationPlayState = "running";

setInterval(()=>{
    if(attend1_counter >= target_attend1){
        clearInterval();
        hasanimated_attend1 = true;
    }
    else{
        attend1_counter += 1;
        number_attend1.innerHTML = attend1_counter;
    }
}, 22.72);

// total_present_days

    if(hasanimated_attend2){
        return ;
    }

let number_attend2 = document.getElementById("number_attend2");
let attend2_counter = 1;
let target_attend2 = 90;
let attend2_circle = document.querySelector(".attend2_circle");

attend2_circle.style.animationPlayState = "running";

setInterval(()=>{
    if(attend2_counter >= target_attend2){
        clearInterval();
        hasanimated_attend2 = true;
    }
    else{
        attend2_counter += 1;
        number_attend2.innerHTML = attend2_counter ;
    }
}, 22.72);


// total_absent_days

    if(hasanimated_attend3){
        return ;
    }

let number_attend3 = document.getElementById("number_attend3");
let attend3_counter = 0;
let target_attend3 = 10;
let attend3_circle = document.querySelector(".attend3_circle");

attend3_circle.style.animationPlayState = "running";

setInterval(()=>{
    if(attend3_counter >= target_attend3){
        clearInterval();
        hasanimated_attend3 = true;
    }
    else{
        attend3_counter += 1;
        number_attend3.innerHTML = attend3_counter ;
    }
}, 220.72);



}

document.getElementById("attendance_page").addEventListener("mouseenter", startAttendanceAnimation);






// left_bar button clicking

let button = document.querySelectorAll(".button_container");
let currentpage_title = document.querySelector(".currentpage_title");
let hasanimated_sems = false; 
// let nav_left_bar = document.querySelectorAll(".nav_left_bar");
button.forEach(btn => {
    btn.addEventListener("click", ()=>{
        button.forEach( b =>{
            b.classList.remove("active");
        });
        btn.classList.add("active");
        let anchor = btn.querySelector("a");
        if(anchor){
        currentpage_title.innerHTML = anchor.textContent.trim();
        }

       startAnimation();

       if(anchor.textContent == "Attendance"){
            startAttendanceAnimation();
       }


    

    })    
});





