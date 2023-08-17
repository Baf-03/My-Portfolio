let d2 = document.querySelector(".about_me");
let d2_value = 'I am Bilal Ahmed, a persistent Computer Science undergraduate in a well-recognized institute "University of Karachi - UBIT" having knowledge of Web Development and Data Analytics. I am Skilled in designing creative Web Pages and Patterns. A technology enthusiast who believes in the technology revolution. I keep myself updated on the upcoming technologies which will revolutionize the digital world in the future and will solve modern-day life problems.';
let n2 = 0;

let s3 = setInterval(() => {
    d2.innerHTML += d2_value[n2];
    n2 += 1;
    if (n2 >= d2_value.length) {
        clearInterval(s3); // Clear the interval when n2 reaches or exceeds d2_value.length
    }
}, 50); // You might want to add a slight delay between each character for better readability

let observer = new IntersectionObserver((e)=>{
    e.forEach((e)=>{
        console.log(e);
        if(e.isIntersecting){
            e.target.classList.add('show');
        }
        // else{
        //     e.target.classList.remove('show');
        // }
    })
})


let hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=>observer.observe(el));

