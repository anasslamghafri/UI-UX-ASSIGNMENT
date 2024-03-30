document.getElementById('selfReportForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
   
    const reportTitle = document.getElementById('reportTitle').value;
    const reportContent = document.getElementById('reportContent').value;
    const mainQuestions = document.getElementById('mainQuestions').value;
   
    console.log('Report Submitted:', { reportTitle, reportContent, mainQuestions });
   
   
    this.reset();
   
    alert('Self-report submitted!'); 
});
