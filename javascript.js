document.getElementById("btn1").addEventListener("click",function()
    {
        document.getElementById("content").style.display="block";
        document.getElementById("content2").style.display="none";
        document.getElementById("content3").style.display="none";
    })
document.getElementById("btn2").addEventListener("click",function()
    {
        document.getElementById("content").style.display="none";
        document.getElementById("content2").style.display="block";
        document.getElementById("content3").style.display="none";
    })
document.getElementById("btn3").addEventListener("click",function()
    {
        document.getElementById("content").style.display="none";
        document.getElementById("content2").style.display="none";
        document.getElementById("content3").style.display="block";
    })
function checkEmail(str1)
    {
        var posat=str1.indexOf("@");
        var posdot=str1.indexOf(".");
        
        if(posat==-1 && posdot==-1)
        {
            if(posat>=1 && (posdot-posat)>=2 && (str1.length-1-posdot)>=2 && (str1.length-1-posdot)<=5)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        else
        {
            return false;
        }
         
    }
function validateForm()
    {
         var nam=document.myform.name.value;
         var email2=document.myform.email.value;
         var mobnum=document.myform.mnum.value;
         var age2=document.myform.age.value;
         var dan2=document.myform.type.value;
         var nom2=document.myform.nom.value;
         var dtype2=document.myform.dtype.value;
         var comment2=document.myform.comment.value;
         var agree2=document.myform.agree.value;
         if (nam=="" || nam==null)
         {
            document.getElementById("nam1").innerHTML="Name should not be null";
            return false;
         }
         else if(nam.length<3)
         {
            document.getElementById("nam1").innerHTML="Name length should be less 3-30";
            return false;
         }
         else if(nam.length>30)
         {
            document.getElementById("nam1").innerHTML="Name length should be 3-30";
            return false;
         }
         else if(isNaN(nam)==false)
         {
            document.getElementById("nam1").innerHTML="Name should not be a numeric";
            return false;
         }
         else if(email=="" || email==null)
         {
            document.getElementById("emal").innerHTML="Email should not be empty";
            return false;
         }
         else if(checkEmail(email2))
         {
            document.getElementById("emal").innerHTML="Email not valid";
            return false;
         }
         if (mobnum=="" || mobnum==null)
         {
            document.getElementById("mno").innerHTML="Mobile no cannot be null";
            return false;
         }
         else if(mobnum.length!=10)
         {
            document.getElementById("mno").innerHTML="Please enter a 10 digit no";
            return false;
         }
         else if(mobnum[0]<'6')
         {
            document.getElementById("mno").innerHTML="Enter a valid mobile no";
            return false;
         }
         else if(age2=="" || age2==null)
         {
            document.getElementById("age1").innerHTML="Age cannot be null";
            return false;
         }
         else if(age2<=10)
         {
            document.getElementById("age1").innerHTML="Age should be 10-50";
            return false;
         }
         else if(age2>=50)
         {
            document.getElementById("age1").innerHTML="Age should be 10-50";
            return false;
         }
         else if(dan2=="" || dan2==null)
         {
            document.getElementById("dan1").innerHTML="Select one of them";
            return false;
         }
         else if(nom2<=2)
         {
            document.getElementById("nom1").innerHTML="Members should be 2-14";
            return false;
         }
         else if(nom2>=14)
         {
            document.getElementById("nom1").innerHTML="members should be 2-14";
            return false;
         }
         else if(dtype2=="" || dtype2==null)
         {
            document.getElementById("dtype1").innerHTML="Select one of them";
            return false;
         }
         else if(comment2.length>220)
         {
            document.getElementById("comment1").innerHTML="comment should not be greater than 220 characters";
            return false;
         }
         else if(agree2=="" || agree2==null)
         {
            document.getElementById("agree1").innerHTML="Please accept all the conditions";
            return false;
         }
         else
         {
           var list1=[];
           var list2=[];
           var list3=[];
           var list4=[];
           var list5=[];
           var list6=[];
           var list7=[];
           var list8=[];
           
           var n=1;
           var x=0;
           
           
                var AddRown=document.getElementById('show');
                var NewRow=AddRown.insertRow(n);
                
                list1[x]=document.getElementById("fname").value;
                list2[x]=document.getElementById("email").value;
                list3[x]=document.getElementById("mno").value;
                list4[x]=document.getElementById("age").value;
                list5[x]=document.getElementById("dan").value;
                list6[x]=document.getElementById("nom").value;
                list7[x]=document.getElementById("dtype").value;
                list8[x]=document.getElementById("comment").value;
                
                var cel1=NewRow.insertCell(0);
                var cel2=NewRow.insertCell(1);
                var cel3=NewRow.insertCell(2);
                var cel4=NewRow.insertCell(3);
                var cel5=NewRow.insertCell(4);
                var cel6=NewRow.insertCell(5);
                var cel7=NewRow.insertCell(6);
                var cel8=NewRow.insertCell(7);
                
                cel1.innerHTML=list1[x];
                cel2.innerHTML=list2[x];
                cel3.innerHTML=list3[x];
                cel4.innerHTML=list4[x];
                cel5.innerHTML=list5[x];
                cel6.innerHTML=list6[x];
                cel7.innerHTML=list7[x];
                cel8.innerHTML=list8[x];
                
                n++;
                x++;
           
         }
    }
