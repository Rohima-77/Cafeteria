var pictures =["images/cafe1.jpg","images/cafe2.jpg","images/cafe3.jpg","images/cafe4.jpg","images/cafe5.jpg"] 
var imgTag = document.querySelector("img");

var count = 0;

function next(){
    count++;
    if(count>=pictures.length)
    {
        count = 0;
        imgTag.src = pictures[count];
    }
    else{
        imgTag.src = pictures[count];


    }
    
}

function prev(){
    count--;
    if(count>=pictures.length)
    {
        count = 0;
        imgTag.src = pictures[count];
    }
    else{
        imgTag.src = pictures[count];


    }


}