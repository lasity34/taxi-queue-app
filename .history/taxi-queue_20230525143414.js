function TaxiQueue(people, taxi) {

  function joinQueue() {
    people++;
  }

  function leaveQueue() {
    if (people > 0) {
		people--;
	  }
    
  }

  function joinTaxiQueue() {
    taxi++;
  }

  function taxiDepart() {
    if (people >= 12 && taxi > 0) {
		taxi--;
		people -= 12;
	  }
  }

  function taxiQueueLength() {
    return taxi;
  }

  function queueLength() {
    return people;
  }

  return {
    joinQueue,
    leaveQueue,
    joinTaxiQueue,
    queueLength,
    taxiQueueLength,
    queueLength,
    taxiDepart,
  };
}
