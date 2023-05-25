// write your DOM code here.


// DOM element references
const passenger_queue_count = document.querySelector(".passenger_queue_count")
const join_queue = document.querySelector(".join_queue")
const leave_queue = document.querySelector(".leave_queue")
const join_taxi_queue = document.querySelector(".taxi_queue")
// create Factory Function instance



const taxiQueue = TaxiQueue();

passenger_queue_count.innerHTML = localStorage.getItem('passenger_count')


// DOM events

function add_passengers() {
taxiQueue.joinQueue()
passenger_queue_count.innerHTML = taxiQueue.queueLength()
localStorage.setItem('passenger_count', taxiQueue.queueLength())
return passenger_queue_count.innerHTML


}

function remove_passenger() {
 taxiQueue.leaveQueue()
 passenger_queue_count.innerHTML = taxiQueue.queueLength()
 localStorage.setItem('passenger_count', taxiQueue.queueLength())
 return passenger_queue_count.innerHTML
}

function add_taxi() {
    
}





join_queue.addEventListener('click', add_passengers)
leave_queue.addEventListener("click", remove_passenger)