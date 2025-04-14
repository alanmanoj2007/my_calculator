function btnclick(val)
{
    document.getElementById("disp").value+=val
}

function dlt(val)
{
    document.getElementById("disp").value=""
}

function oper(val)
{
   var value=document.getElementById("disp").value
   var result=eval(value)
   document.getElementById("disp").value=result
}
