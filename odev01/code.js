let counter=-1;
let catImage="https://c.files.bbci.co.uk/12A9B/production/_111434467_gettyimages-1143489763.jpg";
let dogImage="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg";
function play(){
    let x = document.getElementsByClassName("img-box");
    let num = Math.floor(Math.random() * x.length);
    let count=x.length;

    for(let i=0; i<count; i++){
        if(i===num){
            x[i].dataset.img=catImage;
        }else{
            x[i].dataset.img=dogImage;
        }
    }
}

function Clicked(e){
    let imgUrl=e.dataset.img;
    if(counter==1){
        return;
    }
    if(imgUrl==catImage){
        document.getElementById("alanId").innerHTML ="Kazandın  <span class=”link” onclick='location.reload();'> Tekrar Oyna.</span>";
        counter=1;
    }else{


        if(counter===0){
            counter+= 1;
            document.getElementById("alanId").innerHTML ="Kaybettin <span class=”link” onclick='location.reload();'> Tekrar Oyna.</span>";
        }
        else {
            document.getElementById("alanId").innerHTML ="Tekrar dene ";
            counter+=1;
        }
    }
    let imgContainer=e.childNodes[0];
    imgContainer.src=imgUrl;
}