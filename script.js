function labels(tagname,attrname,attrvalue,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;

}
function inputs(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2){
    var ele1=document.createElement(tagname);
    ele1.setAttribute(attrname,attrvalue);
    ele1.setAttribute(attrname1,attrvalue1);
    ele1.setAttribute(attrname2,attrvalue2);
    return ele1;

}
function linebreak(tagname){
    var br=document.createElement(tagname);
    return br;
}
var first=labels("label","for","first","FirstName");
var br=linebreak("br");
var input=inputs("input","type","text","name","first","id","first");
var br1=linebreak("br");
var middle=labels("label","for","middle","MiddleName");
var br2=linebreak("br");
var input1=inputs("input","type","text","name","middle","id","middle");
var br3=linebreak("br");
var last=labels("label","for","last","LastName");
var br4=linebreak("br");
var input2=inputs("input","type","text","name","last","id","last");
var br5=linebreak("br");
var email=labels("label","for","email","Email");
var br6=linebreak("br");
var input3=inputs("input","type","email","name","email","id","email");
var br7=linebreak("br");
var pass=labels("label","for","password","Password");
var br8=linebreak("br");
var input4=inputs("input","type","password","name","password","id","password");
document.body.append(first,br,input,br1,middle,br2,input1,br3,last,br4,input2,br5,email,br6,input3,br7,pass,br8,input4);