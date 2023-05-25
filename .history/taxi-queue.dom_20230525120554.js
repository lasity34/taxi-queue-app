// write your DOM code here.


// DOM element references
const passenger_queue_count = document.querySelector(".passenger_queue_count")
const join_queue = document.querySelector(".join_queue")
const leave_queue = document.querySelector(".leave_queue")
// create Factory Function instance



const taxiQueue = TaxiQueue();

let passenger_count = localStorage.getItem('passenger_count') || passenger_queue_count.innerHTML
 


// DOM events

function add_passengers() {
taxiQueue.joinQueue()
passenger_count = taxiQueue.queueLength()
localStorage.setItem('passenger_count', taxiQueue.queueLength())
return passenger_count


}

function remove_passenger() {
 taxiQueue.leaveQueue()
 passenger_count = taxiQueue.queueLength()
 localStorage.setItem('passenger_count', taxiQueue.queueLength())
 return passenger_count
}





join_queue.addEventListener('click', add_passengers)
leave_queue.addEventListener("click", remove_passenger)