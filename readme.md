## Answer of the following questions clearly:

### 1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Answer=>

- `getElementById`:It is used to access a single element with a specific unique 'id'.'id' is unique for every element so it will return only one element.

- `getElementsByClassName`:It is used to access list of elements with a same class name.

- `querySelector`: It returns the first element that matches a CSS selector (like .class or #id).

- `querySelectorAll`: It returns the list of elements that matches a CSS selector (like .class or #id).

### 2. How do you **create and insert a new element into the DOM**?

Answer=>

For create and insert a new element into the DOM , I use :

const element = document.createElement('div');

document.body.appendChild(element);

We can use other tags instead of div , like 'p' 'h' etc. Than just appendChild .

### 3. What is **Event Bubbling** and how does it work?

Answer=>

Event Bubbling means when we click on an element that goes to its target & than bubble up to its parent . Like this we can go to the top of the page.

Ex: In HTML:

```
<div id="btn-parent">

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

### 4. What is **Event Delegation** in JavaScript? Why is it useful?

Answer=>
Event Delegation means adding an EventListener to a parent element instead of each single child element . As a result the parent will handle every child .It is very useful when we are going to work with lot of elements. it's clear & easier to manage we don't have to use lot of EventListener.We can manage all using fewer EventListener

### 5. What is the difference between **preventDefault() and stopPropagation()** methods?

Answer=>
preventDefault() prevents the default behavior of an element , like preventing form from reloading the page .

stopPropagation() stops the Event from bubbling .

```

```
