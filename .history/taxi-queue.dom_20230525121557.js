// write your DOM code here.


// DOM element references
const join_queue = document.querySelector(".join_queue")
const leave_queue = document.querySelector(".leave_queue")
const join_taxi_queue = document.querySelector(".taxi_queue")
const passenger_queue_count = document.querySelector(".passenger_queue_count")
const taxi_queue_count = document.querySelector(".taxi_queue_count")
// create Factory Function instance



const taxiQueue = TaxiQueue();

passenger_queue_count.innerHTML = localStorage.getItem('passenger_count')
taxi_queue_count.innerHTML = localStorage.getItem('taxi_count')

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
    taxiQueue.joinTaxiQueue()
    taxi_queue_count.innerHTML = taxiQueue.taxiQueueLength()
    localStorage.setItem('taxi_count', taxiQueue.taxiQueueLength())
    return taxi_queue_count.innerHTML

}





join_queue.addEventListener('click', add_passengers)
leave_queue.addEventListener("click", remove_passenger)
join_taxi_queue.addEventListener("click", add_taxi)