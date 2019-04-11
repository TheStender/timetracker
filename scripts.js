$(document).ready(function () {

	$("#submitData").click(function () {
		var activitytype = $('#activityType :selected').text();
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
	// test function below		
	
	$("#testProgress").click(function() {
			var firstNumber = $('#currentPlaceholder').val();
			var secondNumber = $('#totalPlaceholder').val();
			var progressPercentage =  firstNumber / secondNumber * 100;
            var progressbar = $( "#progressbar" );
            $( "#progressbar" ).progressbar({
               value: progressPercentage,
               max:100
            }); 
            
         });
	
	// test function above
/*
	$.get( "https://anthonystender-activitytracker.herokuapp.com/api/tracker", function( data ) {
	  $( ".result" ).html( data );
	  alert( "Load was performed." );
	}); */
	
	
});

