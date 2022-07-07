function charCheck(str)
{
for(i=0; i < str.length; i++)
  {
   if (str.split(str[i]).length-1 > 1) 
   {
    return true;
   }  
  }
  return false;

} 
str= "супер разработчик";
console.log(charCheck(str));
console.log(charCheck("затмил"));