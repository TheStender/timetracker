$(document).ready(function () {

	$("#submitData").click(function () {
		var activityType = $('#activityType :selected').text();
		var activityname = $('#activityName').val();
		var currenttime = $('#currentTime').val();
		var totaltime = $('#totalTime').val();
		
				if (confirm("Do you want to submit this activity?")) {
					$.post("https://anthonystender-activitytracker.herokuapp.com/api/tracker", {
						data: { activitytype: activitytype, 
								activityname: activityname,
								currenttime: currenttime,
								totaltime: totaltime}
					}, function (data, status) {
						alert(data.message);
							})
				}
			});
			
/*
	$.get( "https://anthonystender-activitytracker.herokuapp.com/api/tracker", function( data ) {
	  $( ".result" ).html( data );
	  alert( "Load was performed." );
	}); */
	
	
});

