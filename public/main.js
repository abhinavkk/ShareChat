$(function() {
	if(window.File && window.FileReader){
		document.getElementById('upload_button').addEventListener('click', StartUpload);
		document.getElementById('file_input').addEventListener('change', FileChosen);
	}

	var SelectedFile;
	function FileChosen(evnt){
		SelectedFile = evnt.target.files[0];
	};

	var socket = io();
	var FReader;
	var Name;

	// function StartUpload(){
	// 	if(document.getElementById('file_input').value != "")
	// 	{
	// 		FReader = new FileReader();
	// 		Name = SelectedFile.name;
	// 		var Content = "<span id = 'NameArea'>Uploading " + SelectedFile.naem + " as " + Name + "</span";
	// 		Content += '<div id = "ProgressContainer"><div id = "ProgressBar"></div></div><span id = "percent">0%</span>';
	// 		Content += "<span id='Uploaded'> - <span id='MB'>0</span>/" + Math.round(SelectedFile.size / 1048576) + "MB</span>";
	// 		document.getElementById('UploadArea').innerHTML = Content;
	// 		FReader.onload = function(evnt){
	// 			socket.emit('Upload', { 'Name' : Name, 'Data' : evnt.target.result });
	// 		};
	// 		socket.emit('Start', { 'Name' : Name, 'Size' : SelectedFile.size });
	// 	}
	// 	else
	// 	{
	// 		alert("Please Select a File");
	// 	}
	// };

	$('form').submit(function(){
	  
	  var msg = $('#m').val();
	  if(msg){
	  	socket.emit('chat message', msg);
	  	$('#messages').append($('<li style="background: #FFFF00">').text(msg));
	  	$('#m').val('');
	  }
	  return false;

	});

	socket.on('chat message', function(msg){
	  $('#messages').append($('<li>').text(msg));
	});

});