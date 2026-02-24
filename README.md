## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: getElementById is the system by which we can grab a specific or single element by it's unique ID. There can't be two element sharing the same ID. And if the ID doesn't exists it'll return us null. On the other hand getElementByClassName is the system which can grab a collection of elements sharing the same class name. We can use the same class name in anywhere we want to.
querySelector returns the first element which matches the given criteria and querySelectorAll is like getElementByClassName cause it returns us a static NodeList.


### 2. How do you create and insert a new element into the DOM?
Ans: To create and insert a new element into the DOM we will first use document.createElement('tagName") so that we can generate a new element node and then I'll configure the element by assigning attributes like ID or className. Finally I'll the the method parentElement.appendChild(newElement).


### 3. What is Event Bubbling? And how does it work?
Ans: Event bubbling is the concept of DOM which instructed how the events will travel through the HTML hierarchy. When an event happens on an element it doesn't just stay at that position, it moves vertically upwards to the parents, grandparents and so on.


### 4. What is Event Delegation in JavaScript? Why is it useful?
Ans: Event Delegation is a powerful pattern that helps the event bubbling to manage multiple child element by using a single event listener. In this we don't have to use separate listener in every individual item. Instead of this we give the responsibility to a parent element.


### 5. What is the difference between preventDefault() and stopPropagation() methods?
Ans: Both of them are used to control the flow of events in the browser but the working principle is completely different. preventDefault() stops an action that's a browser normally performs where stopPropagation() stops the  signal from traveling up a DOM tree to the other elements.
