document.addEventListener('DOMContentLoaded', function() {
    
    var bookMeetingButton = document.getElementById('book-meeting');
    var selfReportButton = document.getElementById('self-report');

    
    bookMeetingButton.addEventListener('click', function(event) {
        
        event.preventDefault();

        
        window.location.href = 'Studentview.html';
    });

    
});
