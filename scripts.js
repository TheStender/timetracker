$(document).ready(function () {

	$("#submitData").click(function () {
		var activitytype = $('#activityType').val();
		var activityname = $('#activityName').val();
		var currenttime = $('#currentTime').val();
		var totaltime = $('#totalTime').val();
		
				if (confirm("Do you want to submit this activity?")) {
					$.post("http://localhost:59584/api/tracker", {
						data: { activitytype: activitytype, 
								activityname: activityname,
								currenttime: currenttime,
								totaltime: totaltime}
					}, function (data, status) {
						alert(data.message);
							})
				}
			});

});