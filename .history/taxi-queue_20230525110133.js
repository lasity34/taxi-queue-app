function TaxiQueue() {
  let people = 0;
  let taxi = 0;

  function joinQueue() {
    return people++;
  }

  function leaveQueue() {
    if (people === 0) {
      return (people = 0);
    } else {
      return people--;
    }
  }

  function joinTaxiQueue() {
    return taxi++;
  }

  function taxiDepart() {
    if (people === 12) {
      taxi--;
      people -= 12;
    }
  }

  function taxiQueueLength() {
    return taxi;
  }

  function queueLengthx() {
	return taxt
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
	queueLengthx,
    taxiDepart,
  };
}
