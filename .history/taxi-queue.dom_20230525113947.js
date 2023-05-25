// write your DOM code here.


// DOM element references
const passenger_queue_count = document.querySelector(".passenger_queue_count")
const join_queue = document.querySelector(".join_queue")
const leave_queue = document.querySelector(".leave_queue")
// create Factory Function instance

const taxiQueue = TaxiQueue();



// DOM events


function add_passengers() {
 return taxiQueue.joinQueue()
}

function remove_passenger() {
 return taxiQueue.leaveQueue()
}

    passenger_queue_count.innerHTML = taxiQueue.queueLength()



join_queue.addEventListener('click', add_passengers)
leave_queue.addEventListener("click", remove_passenger)