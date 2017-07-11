The Concepts Questions
=======================

1. What is Big O notation, and why is it useful?
  Big O measures how much time and memory  the computer uses to complete an algorithm. Especially as the data used in the algorithm increases in size.

2. What is the DOM?
    * Document Object Model is the api that allows JavaScript and CSS to access all of the nodes, which are set up in a tree structure.

3. What is the event loop?
    * JS uses the stack to run functions, the heap to allocate memory, and webapis provided by the browser to do our extra stuff (like DOM)
    * the functions are placed on the stack when called, and functions called from webapis work in the browser, and any cbs from the webapi methods then line up the js callbacks in the task queue
    * The event loop looks at the stack and the task queue and when the stack is empty, push the the next item in the task queue onto the stack for running.
    * the important thing is not to add slow, delaying synchronous code to the stack or else the browser cannot cleanly render the UI for the client (ex. when you can't click or do an action on the screen, the render is blocked --- non-blocking is the way to go)

4. What is a closure?

5. How does prototypal inheritance work, and how is it different from classical inheritance?

6. How does ``` this ``` work?

7. What is event bubbling and how does it work?

8. Describe a few ways to communicate between a server and a client. Describe how a few network protocols work at a high level (IP, TCP, HTTP/S/2, UPD, RTC, DNS, etc).

9. What is REST, and why do people use it?

10. My website is slow. Walk me through diagnosing and fixing it. What are some performance optimizations people use, and when should they be used?

11. What frameworks have you used? What are the pros and cons of each? Why do people use frameworks? What kinds of problems do frameworks solve?
