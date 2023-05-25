function TaxiQueue() {

	let people = 0
	let taxi = 0

	function joinQueue() {
		people++
	}

	function leaveQueue() {
		people--
	}

	function joinTaxiQueue() {
		taxi++
	}

	function queueLength() {
		people
	}

	function taxiQueueLength() {
		taxi
	}

	function taxiDepart(){
		taxi--
		people -= 12
	}

	return {
		joinQueue,
		leaveQueue,
		joinTaxiQueue,
		queueLength,
		taxiQueueLength,
		taxiDepart
	}
}