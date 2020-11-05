
function showchat(i){
    document.getElementById("conversation").style.display="block";
    document.getElementById("typings").style.display="block";

}

function conversation(event){
    let message = document.getElementById("message").value;
        if(message=="")
        {
            window.alert("cant send empty message")
        }
        else{
            var d = new Date();
            var h = d.getHours();
            var m =d.getMinutes();
            document.getElementById("message-1").innerHTML+=`
            <div id="talkbubble">
            <h1>${message}</h1>
            <small>${h}:${m}</small>
            </div> <br> `;
            console.log(message);
            document.getElementById("message").value="";
            let conversations = document.getElementById("conversation")
            conversations.scrollTop = conversations.clientHeight;
        }
   

}

function showinfo() {
    let infostyle =document.getElementById("info");
    if(infostyle.style.right == "0px")
    {   
        infostyle.style.zIndex ="-1";
        infostyle.style.right ="450px";
    }
    else{
        infostyle.style.zIndex ="9";
        infostyle.style.right ="0px"; 
    }
    
}
function showimage(that)
{

    let imgscr = that.getAttribute("src");
    let showimgstyle =document.getElementById("show-img");
    if(showimgstyle.style.zIndex=="-1")
    {
        showimgstyle.style.zIndex="9";
        document.getElementById("image").style.backgroundImage=(`url(${imgscr})`)

    }
    else{
        showimgstyle.style.zIndex="-1"
    }
}
