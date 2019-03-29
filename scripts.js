$(document).ready(function () {

	$("#submitData").click(function () {
		var activity = $('#activity').val();
		var totalTime = $('#totalTime').val();
		
				if (confirm("Do you want to submit this activity?")) {
					$.post("http://localhost:59584/api/tracker", {
						data: { activity: activity, time: totalTime }
					}, function (data, status) {
						alert(data.message);
							})
				}
			});

});