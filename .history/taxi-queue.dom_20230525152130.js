// write your DOM code here.


// DOM element references
const join_queue = document.querySelector(".join_queue")
const leave_queue = document.querySelector(".leave_queue")
const join_taxi_queue = document.querySelector(".join_taxi_queue")
const passenger_queue_count = document.querySelector(".passenger_queue_count")
const taxi_queue_count = document.querySelector(".taxi_queue_count")
const depart = document.querySelector(".depart")
// create Factory Function instance



let passenger_count = localStorage.getItem('passenger_count') || 0
let taxi_count = localStorage.getItem('taxi_count') || 0
passenger_queue_count.innerHTML = passenger_count;
taxi_queue_count.innerHTML = taxi_count
const taxiQueue = TaxiQueue(passenger_count, taxi_count);


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


function taxi_depart() {
taxiQueue.taxiDepart()
passenger_queue_count.innerHTML = taxiQueue.queueLength()
 localStorage.setItem('passenger_count', taxiQueue.queueLength())
 taxi_queue_count.innerHTML = taxiQueue.taxiQueueLength()
 localStorage.setItem('taxi_count', taxiQueue.taxiQueueLength())
}


join_queue.addEventListener('click', add_passengers)
leave_queue.addEventListener("click", remove_passenger)
join_taxi_queue.addEventListener("click", add_taxi)
depart.addEventListener("click", taxi_depart)