function changeAttendeeCount(delta) {
    var attendeesInput = document.getElementById('attendees');
    var currentCount = parseInt(attendeesInput.value, 10);
    var newCount = currentCount + delta;
   
    if (newCount < 1) newCount = 1; 
    attendeesInput.value = newCount;
}

document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
   
    
