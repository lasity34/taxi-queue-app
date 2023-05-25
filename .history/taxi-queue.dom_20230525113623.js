// write your DOM code here.


// DOM element references
const passenger_queue_count = document.querySelector(".passenger_queue_count")
const join_queue = document.querySelector(".join_queue")
const leave_queue = document.querySelector(".leave_queue")
// create Factory Function instance

const taxiQueue = TaxiQueue();

const people = 0

// DOM events

function passengers() {

}

function add_passengers() {
    people = taxiQueue.joinQueue()
}

function remove_passenger() {
    people = taxiQueue.leaveQueue()
}

passenger_queue_count.innerHTML = taxiQueue.queueLength()


join_queue.addEventListener('click', add_passengers)