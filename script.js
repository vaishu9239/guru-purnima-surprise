const openBtn = document.getElementById("openBtn");
const mainContent = document.getElementById("mainContent");
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

openBtn.addEventListener("click", () => {

    document.querySelector(".hero").style.display = "none";

    mainContent.classList.remove("hidden");

    mainContent.scrollIntoView({
        behavior: "smooth"
    });

    music.play().catch(() => {});

    playing = true;

    musicBtn.innerHTML = "⏸ Music";

    createPetals();

    setTimeout(() => {
        fireworks();
    }, 2500);

});

musicBtn.addEventListener("click", () => {

    if (playing) {
        music.pause();
        musicBtn.innerHTML = "🎵 Music";
    } else {
        music.play().catch(() => {});
        musicBtn.innerHTML = "⏸ Music";
    }

    playing = !playing;

});

function createPetals() {

    setInterval(() => {

        const flower = document.createElement("div");

        flower.innerHTML = ["🌸","🌼","💖","✨"][Math.floor(Math.random()*4)];

        flower.style.position = "fixed";
        flower.style.left = Math.random()*100+"vw";
        flower.style.top = "-40px";
        flower.style.fontSize = (20+Math.random()*18)+"px";
        flower.style.zIndex = "999";
        flower.style.pointerEvents = "none";

        document.body.appendChild(flower);

        const duration = 5000 + Math.random()*4000;

        flower.animate([
            {
                transform:"translateY(0) rotate(0deg)",
                opacity:1
            },
            {
                transform:`translateY(${window.innerHeight+80}px) rotate(360deg)`,
                opacity:0
            }
        ],{
            duration:duration,
            easing:"linear"
        });

        setTimeout(()=>{
            flower.remove();
        },duration);

    },250);

}

function fireworks(){

    for(let i=0;i<70;i++){

        setTimeout(()=>{

            const spark=document.createElement("div");

            spark.innerHTML="✨";

            spark.style.position="fixed";
            spark.style.left=Math.random()*100+"vw";
            spark.style.top=Math.random()*80+"vh";
            spark.style.fontSize=(18+Math.random()*20)+"px";
            spark.style.pointerEvents="none";
            spark.style.zIndex="999";

            document.body.appendChild(spark);

            spark.animate([
                {
                    transform:"scale(.2)",
                    opacity:1
                },
                {
                    transform:"scale(2.4)",
                    opacity:0
                }
            ],{
                duration:1200
            });

            setTimeout(()=>{
                spark.remove();
            },1200);

        },i*90);

    }

    heartRain();

}

function heartRain(){

    setInterval(()=>{

        const heart=document.createElement("div");

        heart.innerHTML="❤️";

        heart.style.position="fixed";
        heart.style.left=Math.random()*100+"vw";
        heart.style.top="-20px";
        heart.style.fontSize=(18+Math.random()*25)+"px";
        heart.style.pointerEvents="none";
        heart.style.zIndex="999";

        document.body.appendChild(heart);

        heart.animate([
            {
                transform:"translateY(0)",
                opacity:1
            },
            {
                transform:`translateY(${window.innerHeight+50}px)`,
                opacity:0
            }
        ],{
            duration:4000+Math.random()*2500,
            easing:"linear"
        });

        setTimeout(()=>{
            heart.remove();
        },7000);

    },300);

}