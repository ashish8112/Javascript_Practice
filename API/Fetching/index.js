const url="https://api.github.com/users/ashish8112";
const xhr= new XMLHttpRequest();
xhr.open("GET",url);
xhr.onreadystatechange = function(){
    if(xhr.readyState===4)
    {
        const data=JSON.parse(this.responseText);
        render(data);
    }
}
xhr.send();
function render(data)
{
    const avatar=data.avatar_url;
    const follower= data.followers;
    const name= data.name;
    console.log(avatar);
    console.log(follower);

    //Creating Elements
    let div=document.createElement("div");
    let div01 = document.createElement("div");
    let div02 = document.createElement("div");
    let img= document.createElement("img");
    let heading= document.createElement("h4");
    

    //styling parent div
    div.style.height="25rem";
    div.style.width="25rem";
    div.style.borderRadius="16px";
    div.style.border="2px solid black";
    div.style.display="flex";
    div.style.flexDirection="column";
    div.style.alignItems="center";
    div.style.justifyContent="space-between";
    div.style.overflow="auto";

    //styling div of img 
    div01.style.height="80%";
    div01.style.width="100%";

    // styling img 
    img.style.height="100%";
    img.style.width="100%";

    // innerHTML 
    img.setAttribute("src",avatar);
    div01.append(img);
    heading.innerHTML="Followers ="+follower;
    div02.append("Name = "+name);
    div02.append(heading);


    // appending div01 and div02 in parent 
    div.append(div01);
    div.append(div02);
    document.querySelector("body").append(div);
}