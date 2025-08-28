### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Answer=> Through getElementById I can get a specific element & it's innerText by giving the element a unique 'id' name.I will get not more than 1 element because 'id' is unique for every element.

Through getElementsByClassName I can get some specific elements & there innerText by giving them a same classname.So I can get more than 1 element by getElementsByClassName.

Through querySelector I can get the first element which matches with css selectors (ex:.class , #id) .

Through querySelector I can get the whole list of all elements that matches with css selectors.

2. How do you **create and insert a new element into the DOM**?

Answer=> For create and insert a new element into the DOM , I use :

const Element = document.createElement('div');

document.body.appendChild(Element);

We can use other tags instead of div , like 'p' 'h' etc. Than just appendChild .

3. What is **Event Bubbling** and how does it work?

Answer: Event Bubbling means when I click on an element that also goes to its parent & its parents also goes to its parent . Like this we can go to the top of the page.

Ex: In HTML:

```<div id="btn-parent">

<button id="btn">Click Me</button>

</div>
```

in Javascript:
const btnClick = document.getElementById('btn').addEventListener('click',function(){
console.log('button clicked')
})
Output: button clicked

const btnClick = document.getElementById('btn-parent').addEventListener('click',function(){
console.log('Button parent clicked')
})
Output:Button parent clicked

4. What is **Event Delegation** in JavaScript? Why is it useful?

Answer: Event Delegation means adding an EventListener to a parent element instead of each single child element . As a result the parent will handle every child .It is very useful when we are going to work with lot of elements. it's clear & easier to manage we don't have to use lot of EventListener.We can manage all using fewer EventListener

5. What is the difference between **preventDefault() and stopPropagation()** methods?

Answer:
preventDefault() prevents the default behavior of an element , like preventing form from reloading the page .

stopPropagation() stops the Event from bubbling .
