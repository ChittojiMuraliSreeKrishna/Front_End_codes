# archlinux.html
this uses html,css and javascript for styling and other styles like images and stuff, i just merged everything in a single file because sometimes if files went missing it wont work properly, and it will become many html pages
```css
h1{
display:none;
}
h1{
   opacity: 0;
   animation: animationname 1s ease forwards;
   animation-delay: 1s;
  }
@keyframes snimstionname{
    0%{
      transform: translateY(-100%);
      opacity: 1;
      }
     100%{
       transform: translateY(-14%);
        opacity: 1;
         }
 }
```
```html
<h1 onclick='show()' id='name'>heythere<h1>
```
```javascript
function show(){
var head = document.getElementById("name");
head.style.display = "block";
}
```
# other files 
same just used plain html css and javascript
