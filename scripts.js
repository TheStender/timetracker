$(document).ready(function () {
	var activity = document.getElementById("activity").value;
	var totalTime = document.getElementById("totalTime").value;



	$("#submitData").click(function () {
				if (confirm("Do you want to submit this activity?")) {
					$.post("http://localhost:59584/api/tracker", {
						data: { activity: activity, time: totalTime }
					}, function (data, status) {
						alert(data.message);
							})
				} 
			});

});