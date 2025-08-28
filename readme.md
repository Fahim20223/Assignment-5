## Answer of the following questions clearly:

### 1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Answer=>

- `getElementById`: _It is used to access a single element with a specific unique 'id' . 'id' is unique for every element so it will return only one element._

- `getElementsByClassName`: _It is used to access list of elements with a same class name._

- `querySelector`: _It returns the first element that matches a CSS selector (like .class or #id)._

- `querySelectorAll`: _It returns the list of elements that matches a CSS selector (like .class or #id)._

### 2. How do you **create and insert a new element into the DOM**?

Answer=>

_For create and insert a new element into the DOM , I use :_

_const element = document.createElement('div');_

_document.body.appendChild(element);_

_We can use other tags instead of div , like 'p' 'h' etc. Than just appendChild._

### 3. What is **Event Bubbling** and how does it work?

Answer=>

_Event Bubbling means when we click on an element that goes to its target & than bubble up to its parent . Like this we can go to the top of the page._

**_Ex: In HTML_**:

```
<div id="btn-parent">

<button id="btn">Click Me</button>

</div>
```

**_in Javascript_**:

```
const btnClick = document.getElementById('btn').addEventListener('click',function(){
console.log('button clicked')
})
Output: button clicked


const btnClick = document.getElementById('btn-parent').addEventListener('click',function(){
console.log('Button parent clicked')
})
Output:Button parent clicked
```

### 4. What is **Event Delegation** in JavaScript? Why is it useful?

Answer=>

_Event Delegation means adding an EventListener to a parent element instead of each single child element . As a result the parent will handle every child .It is very useful when we are going to work with lot of elements. it's clear & easier to manage we don't have to use lot of EventListener.We can manage all using fewer EventListener_

### 5. What is the difference between **preventDefault() and stopPropagation()** methods?

Answer=>

- `preventDefault()`: _prevents the default behavior of an element , like preventing form from reloading the page._

- `stopPropagation()`: _stops the Event from bubbling ._
