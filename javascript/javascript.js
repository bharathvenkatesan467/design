let i=0;
function colorchange(){
    if(i==0)
    {
        document.getElementsByClassName("color")[0].style="background-color:skyblue;";
        document.getElementsByClassName("colorname")[0].innerHTML="backgrouncolor-skyblue";
        i++;
    }
    else if(i==1)
    {
        document.getElementsByClassName("color")[0].style="background-color:red;";
        document.getElementsByClassName("colorname")[0].innerHTML="backgrouncolor-red";
        i++;
    }
    else if(i==2)
    {
        document.getElementsByClassName("color")[0].style="background-color:blue;";
        document.getElementsByClassName("colorname")[0].innerHTML="backgrouncolor-blue";
        i++;
    }
    else if(i==3)
    {
        document.getElementsByClassName("color")[0].style="background-color:purple;";
        document.getElementsByClassName("colorname")[0].innerHTML="backgrouncolor-purple";
        i++;
    }
    else if(i==4)
    {
        document.getElementsByClassName("color")[0].style="background-color:grey;";
        document.getElementsByClassName("colorname")[0].innerHTML="backgrouncolor-grey";
        i=0;
    }
}
