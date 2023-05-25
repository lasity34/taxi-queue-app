// write your DOM code here.


// DOM element references
const passenger_queue_count = document.querySelector(".passenger_queue_count")
const join_queue = document.querySelector(".join_queue")
const leave_queue = document.querySelector(".leave_queue")
// create Factory Function instance

const taxiQueue = TaxiQueue();

let people = 0

// DOM events

function add_passengers() {
    
 people = taxiQueue.joinQueue()
 return people
}

function remove_passenger() {
 people = taxiQueue.leaveQueue()
 return people
}

people = taxiQueue.queueLength()
passenger_queue_count.innerHTML = people



join_queue.addEventListener('click', add_passengers)
leave_queue.addEventListener("click", remove_passenger)