function TaxiQueue() {
  let people = 0;
  let taxi = 0;

  function joinQueue() {
    people++;
  }

  function leaveQueue() {
    if (people === 0) {
      return (people = 0);
    } else {
      return people--;
    }
  }

  function joinTaxiQueue() {
    taxi++;
  }

  function taxiDepart() {
	if (people < 12) {
	return	people
	} else {
		
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
