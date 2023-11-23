function show(bats, spider, jumpscare){
    document.getElementById(bats, spider, jumpscare).style.visibility="visible";
}
function hide(bats, spider, jumpscare){
    document.getElementById(bats, spider, jumpscare).style.visibility="hidden";
}
function playAudio(scream, batsSound, spidersound){
    document.getElementById(scream, batsSound,spidersound).play();
}
function pauseAudio(scream, batsSound){
    document.getElementById(scream, batsSound, spidersound).pause();
}