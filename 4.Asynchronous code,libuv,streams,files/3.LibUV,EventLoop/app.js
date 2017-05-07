/*LIBUV : specifically to deal with operating systems events (open file,download data from internet ..) ... It has event loop : events placed in queue , libuv send request to OS, once operating system finishes the queue events, it callback to v8 engine.. (call back ).

Meanwhile if V8 is running some code , then V8 will finishe that code first and then , then this finished queue event call back will run . Because V8 engine is synchronous (One process run at a time) . But this entire process is Asynchronous  : V8 runs some code , and Libuv runs some event handling loops.And This entire piece of process is inside the node js.And it is called EVENT DRIVEN NON-BLOCKING I/O in v8 Javascript. 

NON-BLOCKING :  Doing other things without stopping your programming from running . this made possible by Node's doing things asynchronously.
*/

