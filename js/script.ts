function scrollMenu(){
    const header = document.querySelector("#header") as HTMLElement;

    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        header.style.backgroundColor = "rgba(57, 55, 55, 0.194)";
        header.style.color = "#fff";
    }else{
        header.style.backgroundColor = "transparent";
        header.style.color = "#000";
    }
}

window.onscroll = () => {scrollMenu};