//Alert
alert("Welcome! Press OK to continue.");

//Confirm
confirmed = window.confirm("Click OK to continue. Click cancel to stop.");

if (confirmed)
{
	window.alert("You clicked OK");
}
else
{
	window.alert("You clicked Cancel");
}

// Prompt
response = window.prompt("Welcome!", "Please enter your name");

document.write(response);