// total course and book times here
var psCTotal = 53;
var psASPTotal = 29;
var psMVCTotal = 42;
var psJSTotal = 26;
var psNodeTotal = 39;
var psSQLTotal = 17;
var udemyTotal = 47;
var CS50Total = 80;
var CBootTotal = 100;
var CDummiesTotal = 800;
var CPlayersTotal = 353;
var MVCTotal = 1011;

// total project times here



// Import the total times
function importTimes() {
	importTotalTimes();
	getPercentage();
	var udemyCurrent = localStorage.getItem("udemyCurrent");
	document.getElementById("udemyTime").innerHTML = udemyCurrent;
}

// for Importing, total times
function importTotalTimes() {
	document.getElementById("pscTotalTime").innerHTML = psCTotal;
	document.getElementById("psASPTotalTime").innerHTML = psASPTotal;
	document.getElementById("psMVCTotalTime").innerHTML = psMVCTotal;
	document.getElementById("psJSTotalTime").innerHTML = psJSTotal;
	document.getElementById("psNodeTotalTime").innerHTML = psNodeTotal;
	document.getElementById("psSQLTotalTime").innerHTML = psSQLTotal;
	document.getElementById("udemyTotalTime").innerHTML = udemyTotal;
	document.getElementById("CS50TotalTime").innerHTML = CS50Total;
	document.getElementById("CBootTotalTime").innerHTML = CBootTotal;
	document.getElementById("CDummiesTotalTime").innerHTML = CDummiesTotal;
	document.getElementById("CPlayersTotalTime").innerHTML = CPlayersTotal;
	document.getElementById("MVCTotalTime").innerHTML = MVCTotal;
	
	document.getElementById("activityTotal").innerHTML = localStorage.getItem("activityTotal");
	document.getElementById("jobAidTotal").innerHTML = localStorage.getItem("jobAidTotal");
	document.getElementById("MVCJobAidTotal").innerHTML = localStorage.getItem("MVCJobAidTotal");
	document.getElementById("SGWarmupTotal").innerHTML = localStorage.getItem("SGWarmupTotal");
	document.getElementById("SGLinqTotal").innerHTML = localStorage.getItem("SGLinqTotal");
	document.getElementById("CoderbyteTotal").innerHTML = localStorage.getItem("CoderbyteTotal");
	document.getElementById("codinGameTotal").innerHTML = localStorage.getItem("codinGameTotal");
}

// Calculate Percentages
function getPercentage() {
	var pluralsightCCurrent = localStorage.getItem("pluralsightCCurrent");
	var pluralsightCPercent = Math.floor((pluralsightCCurrent / psCTotal) * 100);
	var displaypsCPercent = pluralsightCPercent + "%";
	document.getElementById("psCPercentage").innerHTML = displaypsCPercent;
	
	var pluralsightASPCurrent = localStorage.getItem("pluralsightASPCurrent");
	var pluralsightASPPercent = Math.floor((pluralsightASPCurrent / psASPTotal) * 100);
	var displaypsASPPercent = pluralsightASPPercent + "%";
	document.getElementById("psASPPercentage").innerHTML = displaypsASPPercent;
	
	var pluralsightMVCCurrent = localStorage.getItem("pluralsightMVCCurrent");
	var pluralsightMVCPercent = Math.floor((pluralsightMVCCurrent / psMVCTotal) * 100);
	var displaypsMVCPercent = pluralsightMVCPercent + "%";
	document.getElementById("psMVCPercentage").innerHTML = displaypsMVCPercent;
	
	var pluralsightJSCurrent = localStorage.getItem("pluralsightJSCurrent");
	var pluralsightJSPercent = Math.floor((pluralsightJSCurrent / psJSTotal) * 100);
	var displaypsJSPercent = pluralsightJSPercent + "%";
	document.getElementById("psJSPercentage").innerHTML = displaypsJSPercent;
	
	var pluralsightNodeCurrent = localStorage.getItem("pluralsightNodeCurrent");
	var pluralsightNodePercent = Math.floor((pluralsightNodeCurrent / psNodeTotal) * 100);
	var displaypsNodePercent = pluralsightNodePercent + "%";
	document.getElementById("psNodePercentage").innerHTML = displaypsNodePercent;
	
	var pluralsightSQLCurrent = localStorage.getItem("pluralsightSQLCurrent");
	var pluralsightSQLPercent = Math.floor((pluralsightSQLCurrent / psSQLTotal) * 100);
	var displaypsSQLPercent = pluralsightSQLPercent + "%";
	document.getElementById("psSQLPercentage").innerHTML = displaypsSQLPercent;
	
	var udemyCurrent = localStorage.getItem("udemyCurrent");
	var udemyPercent = Math.floor((udemyCurrent / udemyTotal) * 100);
	var displayUdemyPercent = udemyPercent + "%";
	document.getElementById("udemyPercentage").innerHTML = displayUdemyPercent;
	
	var CS50Current = localStorage.getItem("CS50Current");
	var CS50Percent = Math.floor((CS50Current / CS50Total) * 100);
	var displayCS50Percent = CS50Percent + "%";
	document.getElementById("CS50Percentage").innerHTML = displayCS50Percent;
	
	var CBootCurrent = localStorage.getItem("CBootCurrent");
	var CBootPercent = Math.floor((CBootCurrent / CBootTotal) * 100);
	var displayCBootPercent = CBootPercent + "%";
	document.getElementById("CBootPercentage").innerHTML = displayCBootPercent;
	
	var CDummiesCurrent = localStorage.getItem("CDummiesCurrent");
	var CDummiesPercent = Math.floor((CDummiesCurrent / CDummiesTotal) * 100);
	var displayCDummiesPercent = CDummiesPercent + "%";
	document.getElementById("CDummiesPercentage").innerHTML = displayCDummiesPercent;
	
	var CPlayersCurrent = localStorage.getItem("CPlayersCurrent");
	var CPlayersPercent = Math.floor((CPlayersCurrent / CPlayersTotal) * 100);
	var displayCPlayersPercent = CPlayersPercent + "%";
	document.getElementById("CPlayersPercentage").innerHTML = displayCPlayersPercent;
	
	var MVCCurrent = localStorage.getItem("MVCCurrent");
	var MVCPercent = Math.floor((MVCCurrent / MVCTotal) * 100);
	var displayMVCPercent = MVCPercent + "%";
	document.getElementById("MVCPercentage").innerHTML = displayMVCPercent;
}

// Update the times

function updatePluralsightC() {
	var newTime = document.getElementById("getPluralsightCTime").value;
	localStorage.setItem("pluralsightCCurrent", newTime);
	document.getElementById("psCTime").innerHTML = localStorage.getItem("pluralsightCCurrent");
	getPercentage();
}

function updatePluralsightASP() {
	var newTime = document.getElementById("getPluralsightASPTime").value;
	localStorage.setItem("pluralsightASPCurrent", newTime);
	document.getElementById("psASPTime").innerHTML = localStorage.getItem("pluralsightASPCurrent");
	getPercentage();
}

function updatePluralsightMVC() {
	var newTime = document.getElementById("getPluralsightMVCTime").value;
	localStorage.setItem("pluralsightMVCCurrent", newTime);
	document.getElementById("psMVCTime").innerHTML = localStorage.getItem("pluralsightMVCCurrent");
	getPercentage();
}

function updatePluralsightJS() {
	var newTime = document.getElementById("getPluralsightJSTime").value;
	localStorage.setItem("pluralsightJSCurrent", newTime);
	document.getElementById("psJSTime").innerHTML = localStorage.getItem("pluralsightJSCurrent");
	getPercentage();
}

function updatePluralsightNode() {
	var newTime = document.getElementById("getPluralsightNodeTime").value;
	localStorage.setItem("pluralsightNodeCurrent", newTime);
	document.getElementById("psNodeTime").innerHTML = localStorage.getItem("pluralsightNodeCurrent");
	getPercentage();
}

function updatePluralsightSQL() {
	var newTime = document.getElementById("getPluralsightSQLTime").value;
	localStorage.setItem("pluralsightSQLCurrent", newTime);
	document.getElementById("psSQLTime").innerHTML = localStorage.getItem("pluralsightSQLCurrent");
	getPercentage();
}

function updateUdemy() {
	var newTime = document.getElementById("getUdemyTime").value;
	localStorage.setItem("udemyCurrent", newTime);
	document.getElementById("udemyTime").innerHTML = localStorage.getItem("udemyCurrent");
	getPercentage();
} 

function updateCS50() {
	var newTime = document.getElementById("getCS50Time").value;
	localStorage.setItem("CS50Current", newTime);
	document.getElementById("cs50Time").innerHTML = localStorage.getItem("CS50Current");
	getPercentage();
}

function updateCBoot() {
	var newTime = document.getElementById("getCBootTime").value;
	localStorage.setItem("CBootCurrent", newTime);
	document.getElementById("CBootTime").innerHTML = localStorage.getItem("CBootCurrent");
	getPercentage();
}

function updateCDummies() {
	var newTime = document.getElementById("getCDummiesTime").value;
	localStorage.setItem("CDummiesCurrent", newTime);
	document.getElementById("CDummiesTime").innerHTML = localStorage.getItem("CDummiesCurrent");
	getPercentage();
}

function updateCPlayers() {
	var newTime = document.getElementById("getCPlayersTime").value;
	localStorage.setItem("CPlayersCurrent", newTime);
	document.getElementById("CPlayersTime").innerHTML = localStorage.getItem("CPlayersCurrent");
	getPercentage();
}

function updateProMVC() {
	var newTime = document.getElementById("getMVCTime").value;
	localStorage.setItem("MVCCurrent", newTime);
	document.getElementById("MVCTime").innerHTML = localStorage.getItem("MVCCurrent");
	getPercentage();
}

function updateTracker() {
	var newTime = document.getElementById("activityTime").value;
	localStorage.setItem("activityTotal", newTime);
	document.getElementById("activityTotal").innerHTML = localStorage.getItem("activityTotal");
}

function updatePostPay() {
	var newTime = document.getElementById("jobAidTime").value;
	localStorage.setItem("jobAidTotal", newTime);
	document.getElementById("jobAidTotal").innerHTML = localStorage.getItem("jobAidTotal");
}

function updatePostPayMVC() {
	var newTime = document.getElementById("MVCJobAidTime").value;
	localStorage.setItem("MVCJobAidTotal", newTime);
	document.getElementById("MVCJobAidTotal").innerHTML = localStorage.getItem("MVCJobAidTotal");
}

function updateSGWarmup() {
	var newTime = document.getElementById("SGWarmupTime").value;
	localStorage.setItem("SGWarmupTotal", newTime);
	document.getElementById("SGWarmupTotal").innerHTML = localStorage.getItem("SGWarmupTotal");
}

function updateSGLinq() {
	var newTime = document.getElementById("SGLinqTime").value;
	localStorage.setItem("SGLinqTotal", newTime);
	document.getElementById("SGLinqTotal").innerHTML = localStorage.getItem("SGLinqTotal");
}

function updateCoderbyte() {
	var newTime = document.getElementById("CoderbyteTime").value;
	localStorage.setItem("CoderByteTotal", newTime);
	document.getElementById("CoderByteTotal").innerHTML = localStorage.getItem("CoderByteTotal");
}

function updateCodinGame() {
	var newTime = document.getElementById("codinGameTime").value;
	localStorage.setItem("codinGameTotal", newTime);
	document.getElementById("codinGameTotal").innerHTML = localStorage.getItem("codinGameTotal");
}