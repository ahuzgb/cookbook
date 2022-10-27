const breakVege = () => {
    let myrandom=Math.round(Math.random()*2);
    let link1="https://youtu.be/viL44TzoBgE";
    let link2="https://youtu.be/dQw4w9WgXcQ";
    let link3="https://youtu.be/IdkCEioCp24?t=73";
    if (myrandom==0)
        window.location=link1
    else if (myrandom==1)
        window.location=link2
    else if (myrandom==2)
        window.location=link3
}

const breakNv = () => {
    let myrandom=Math.round(Math.random()*2);
    let link1="https://youtu.be/viL44TzoBgE";
    let link2="https://youtu.be/dQw4w9WgXcQ";
    let link3="https://youtu.be/IdkCEioCp24?t=73";
    if (myrandom==0)
        window.location=link1
    else if (myrandom==1)
        window.location=link2
    else if (myrandom==2)
        window.location=link3
}

const lunchVege = () => {
    let myrandom=Math.round(Math.random()*2);
    let link1="https://youtu.be/viL44TzoBgE";
    let link2="https://youtu.be/dQw4w9WgXcQ";
    let link3="https://youtu.be/IdkCEioCp24?t=73";
    if (myrandom==0)
        window.location=link1
    else if (myrandom==1)
        window.location=link2
    else if (myrandom==2)
        window.location=link3
}

const lunchNv = () => {
    let myrandom=Math.round(Math.random()*2);
    let link1="https://youtu.be/viL44TzoBgE";
    let link2="https://youtu.be/dQw4w9WgXcQ";
    let link3="https://youtu.be/IdkCEioCp24?t=73";
    if (myrandom==0)
        window.location=link1
    else if (myrandom==1)
        window.location=link2
    else if (myrandom==2)
        window.location=link3
}

const dinnerVege = () => {
    let myrandom=Math.round(Math.random()*2)
    let link1="https://youtu.be/viL44TzoBgE";
    let link2="https://youtu.be/dQw4w9WgXcQ";
    let link3="https://youtu.be/IdkCEioCp24?t=73";
    if (myrandom==0)
        window.location=link1
    else if (myrandom==1)
        window.location=link2
    else if (myrandom==2)
        window.location=link3
}

const dinnerNv = () => {
    let myrandom=Math.round(Math.random()*2);
    let link1="https://youtu.be/viL44TzoBgE";
    let link2="https://youtu.be/dQw4w9WgXcQ";
    let link3="https://youtu.be/IdkCEioCp24?t=73";
    if (myrandom==0)
        window.location=link1
    else if (myrandom==1)
        window.location=link2
    else if (myrandom==2)
        window.location=link3
}

const error = () => {
    let popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }


const surprise = () => {
    if ((document.getElementById('breakfast-button').checked) && (document.getElementById('vege-yes').checked)) {
        breakVege();
    } else if ((document.getElementById('breakfast-button').checked) && (document.getElementById('vege-no').checked)) {
        breakNv();
    } else if ((document.getElementById('lunch-button').checked) && (document.getElementById('vege-yes').checked)) {
        lunchNv();
    } else if ((document.getElementById('lunch-button').checked) && (document.getElementById('vege-no').checked)) {
        lunchNv();
    } else if ((document.getElementById('dinner-button').checked) && (document.getElementById('vege-yes').checked)) {
        dinnerVege();
    } else if ((document.getElementById('dinner-button').checked) && (document.getElementById('vege-no').checked)) {
        dinnerNv();
    } else {
        error();
    }
}