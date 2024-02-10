document.addEventListener("DOMContentLoaded", function() {
    const navbarLinks = document.querySelectorAll("#navbar a");
  
    navbarLinks.forEach(link => {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href"); 
        const targetElement = document.querySelector(targetId); 
  
        if (targetElement) {
          const offset = 70; 
          const targetPosition = targetElement.offsetTop - offset;
  
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth" 
          });
        }
      });
    });

    //Network
    const wrapper = document.querySelector(".wrapper"),
    toast = wrapper.querySelector(".toast"),
    title = toast.querySelector("span"),
    subTitle = toast.querySelector("p"),
    wifiIcon = toast.querySelector(".icon"),
    closeIcon = toast.querySelector(".close-icon");
    window.onload = ()=>{
        function ajax(){
            let xhr = new XMLHttpRequest();
            xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true); 
            xhr.onload = ()=>{ 
                if(xhr.status == 200 && xhr.status < 300){
                    toast.classList.remove("offline");
                    title.innerText = "You're online now";
                    subTitle.innerText = "Hurray! Internet is connected.";
                    wifiIcon.innerHTML = '<i class="uil uil-wifi"></i>';
                    closeIcon.onclick = ()=>{ 
                        wrapper.classList.add("hide");
                    }
                    setTimeout(()=>{ 
                        wrapper.classList.add("hide");
                    }, 5000);
                }else{
                    offline(); 
                }
            }
            xhr.onerror = ()=>{
                offline(); 
            }
            xhr.send(); 
        }
        function offline(){ 
            wrapper.classList.remove("hide");
            toast.classList.add("offline");
            title.innerText = "You're offline now";
            subTitle.innerText = "Opps! Internet is disconnected.";
            wifiIcon.innerHTML = '<i class="uil uil-wifi-slash"></i>';
        }
        setInterval(()=>{ 
            ajax();
        }, 100);
    } 


    //mixitup project section
    var mixer = mixitup(".portofolio-list");

    //circle skills
    const circles = document.querySelectorAll('.circle');
    circles.forEach(elem=>{
        var dots = elem.getAttribute("data-dots");
        var marked = elem.getAttribute("data-percent");
        var percent = Math.floor(dots*marked/100);
        var points = "";
        var rotate = 360/dots;

        for(let i = 0; i < dots; i++) {
            points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
        }
        elem.innerHTML = points;
    })
});  

