function stolenEval(script)
{
    return eval.call(window, script);
}
	var blinkTimer=null;
	var buffer="";
	var command="";
	var driveLetter="C";
	var console=null;
	var caret="_";
	var commandHistory = new Array();
	var path = new Array();
	var tmpCommand="";
	var historyPos=0;
(function() {

	function ailghdfbgaierugaiouegfauiergieuh(text)
	{
	  if(text.indexOf(" ") != -1)
	  {
		var actualCommand = text.substring(0,text.indexOf(" "));
		var parameters = text.substring(text.indexOf(" ")+1,text.length).split(" ");
	  }
	  else
	  {
		var actualCommand = text;
		var parameters = new Array();
	  }
	  try
	  {
		if((actualCommand.indexOf(":") == 1) && (actualCommand.length == 2))
		{
		  driveLetter = actualCommand.charAt(0).toUpperCase();
		  return "";
		}
		switch(actualCommand.toLowerCase())
		{
		  case "":      return "" + "\n";
		  case "eval":  return stolenEval(parameters.join(" ")) + "\n";
		  case "clear":
		  case "cls":   return buffer="";
		  case "cd":    return aioueguoawebgioebgioauegouadgioaudg(parameters[0]);
		  case "ls":
		  case "dir":   return ailseugoadigoa8(parameters[0]);
		  case "echo":  return parameters.join(" ") + "\n";
		  case "date":  return Date() + "\n";
		  case "5d0daa360b9da2ed65f6": { window.location = "http://stolen.pw/nicelady.jpg"; return "Loading...\n\n" ;}
		  case "help":  return giuehirgtoauiegroauwegy();
		  case "status": return status();
		  case "exit":  return init();
		  case "type" : if (parameters[0]=="readme.txt") {
						  return "Sorry about that, Not really though. ごめんなさい\n"
						  }
						else
						  {
						  return "File not found\n\n";
						  }	  
		  case "hod.exe":
		  case "hod": { window.location = "http://stolen.pw/hod"; return "Loading...\n\n" ;}
		  case "twitter.exe":
		  case "twitter": { window.location = "https://twitter.com/StolenPW"; return "Loading...\n\n" ;}
		  case "contact.exe":
		  case "contact": { window.location = "http://stolen.pw/contact.html"; return "Loading...\n\n" ;}
		  case "tts.exe":
		  case "tts": { window.location = "http://stolen.pw/TTS.html"; return "Loading...\n\n" ;}
		  case "cpanel":
		  case "cpanel.exe": { window.location = "http://stolen.pw/cpanel"; return "Loading...\n\n" ;}
		  
		  }
		try
		{
		  var output = stolenEval(text);
		  
		  if(output != undefined)
			return output + "\n";
		  else
			return "";
		}
		catch(err)
		{
		  return "Bad command or filename\n";
		}
	  }
	  catch(err)
	  {
		return "Command caused an error [" + err + "]\n";
	  }
	  return "Bad command or filename\n"; //should never reach here
	}

	function aioueguoawebgioebgioauegouadgioaudg(dirs)
	{
	  if(dirs == undefined)
		return "";
	  else if(dirs.charAt(1) == ":")
	  {
		driveLetter = dirs.charAt(0);
		path = dirs.substring(3,dirs.length).split("\\");
		return "";
	  }
	  dirs = dirs.replace(/\//g,"\\");
	  dirArray = dirs.split("\\");
	  for(var dir in dirArray)
	  {
		sdbgjidgbyiladf(dirArray[dir]);
	  }
	  return "";
	}

	function sdbgjidgbyiladf(dir)
	{
	  if((dir == ".") || (dir == ""))
		return 
	  else if(dir == "..")
		path.pop();
	  else if(dir == "\\")
		path = new Array();
	  else
		path.push(dir);
	  return "";
	}

	function ailseugoadigoa8(dir)
	{
	  if(dir == undefined)
		dir = driveLetter + ":\\" + path.join("\\");
	  var output = "";
	  output += " Volume in drive "+driveLetter+" has no label.\n";
	  output += " Volume Serial Number is AE86-16L4A-CI4\n";
	  output += "\n";
	  output += " Directory of " + dir + "\n";
	  output += "\n";
	  output += "09/01/2010  03:42 AM        <DIR>      .\n";
	  output += "09/01/2010  01:14 AM        <DIR>      ..\n";
	  output += "07/14/2015  12:20 PM      205,792      HOD.EXE\n";
	  output += "06/17/2008  01:11 PM       87,987      TWITTER.EXE\n";    
	  output += "07/27/2015  11:13 PM       32,768      CONTACT.EXE\n";    
	  output += "01/22/1987  07:01 PM       60,613      README.TXT\n";
	  output += "08/16/2015  06:28 PM       25,120      STATS.EXE\n";
	  output += "            5 File(s)     412,280 bytes\n";
	  output += "            2 Dir(s)   99,587,720 bytes free\n\n";

	  return output;
	}

	function giuehirgtoauiegroauwegy()
	{
	  var output="";
	  output += "  _______________________________________\n";
	  output += "  HELP        | See this page\n";
	  output += "  TYPE [file] | Display text file\n";
	  output += "  ECHO [txt]  | Write your own text\n";
	  output += "  CLS         | Clear the screen\n";
	  output += "  DIR         | Show programs you can run\n";
	  output += "  CD [dir]    | Change to a new directory\n";
	  output += "  _______________________________________\n";
	  
	  return output;
	}

	function writeLn(text)
	{
	  buffer += text + "\n";
	  ueuehehgjf();
	}
		
	function time()
	  { return Math.floor( Date.now() / 1000 ) }
	  n = time()

	function status() 
	{
	  msg: if (n) {
	  if (n >= '1440108000') return "Recovery\n";
	  if (n >= '1440093600') return "Surgery\n";
	  if (n < '1440093600') { window.location = "http://stolen.pw/TTS.html"; return "Loading...\n\n" ;}
	}

	}

	function ueuehehgjf()
	{
	  console.value = buffer + driveLetter + ":\\" + path.join("\\") + ">" + command + caret;
	  console.scrollTop = console.scrollHeight;
	}

	function eghbhiluisdguilssdgsdsdgsdguo(event)
	{
	  if(navigator.appName.indexOf("Microsoft")!=-1)
		var keyCode = event.keyCode
	  else
		var keyCode = event.which

	  caret="";
	  clearTimeout(blinkTimer);
	  blinkTimer = setTimeout(blinkerSpeed,600);

	  if((keyCode >= 20) && (keyCode <= 0x99))
	  {
		command += String.fromCharCode(keyCode);
	  }
	  else if(keyCode == 13)
	  {
		 if(command.length > 0)
			commandHistory.push(command);
		 buffer += driveLetter + ":\\" + path.join("\\") + ">" + command + "\n";
		 var output = ailghdfbgaierugaiouegfauiergieuh(command);
		 buffer += output;
		 
		/* var bufArray = buffer.split("\n");
		 var start=Math.max(bufArray.length-24,0);
		 
		 bufArray = bufArray.slice(start,start+24);
		 buffer = bufArray.join("\n"); */
		 
		 command="";
		 historyPos=0;
	  }
	  else if(keyCode == 8)
	  {
		command = command.substring(0,command.length-1);
	  } 
	  else
	  {
		if(event.keyCode == 38)
		{
		  giufrhgiousdfhiogfu(+1);
		}
		else if(event.keyCode == 40)
		{
		  giufrhgiousdfhiogfu(-1);
		}
	  }
	  ueuehehgjf();
	  
	  return false;
	}
	function giufrhgiousdfhiogfu(direction)
	{
	  if(commandHistory.length > 0)
	  {
		if(historyPos==0)
		  tmpCommand = command;
		historyPos = Math.max(0,Math.min(historyPos+direction,commandHistory.length));
		if(historyPos==0)
		  command = tmpCommand;
		else
		  command = commandHistory[commandHistory.length-historyPos];
	  }
	  ueuehehgjf();
	}
	
	function blinkerSpeed()
	{
	  if(caret == "_") 
		caret = "";
	  else
		caret = "_";
	  blinkTimer = setTimeout(blinkerSpeed,600);
	  ueuehehgjf();
	}
	function init()
	{
	  buffer=""; // init is also reinit
	  console = document.getElementById('cmd');
	  if(blinkTimer)
		clearTimeout(blinkTimer);
	  blinkTimer = setTimeout(blinkerSpeed,600);
	  writeLn("Loading...Complete.");
	  writeLn("");  
	  writeLn("███████╗████████╗ ██████╗ ██╗     ███████╗███╗   ██╗   ██████╗ ██╗    ██╗"); 
	  writeLn("██╔════╝╚══██╔══╝██╔═══██╗██║     ██╔════╝████╗  ██║   ██╔══██╗██║    ██║"); 
	  writeLn("███████╗   ██║   ██║   ██║██║     █████╗  ██╔██╗ ██║   ██████╔╝██║ █╗ ██║"); 
	  writeLn("╚════██║   ██║   ██║   ██║██║     ██╔══╝  ██║╚██╗██║   ██╔═══╝ ██║███╗██║"); 
	  writeLn("███████║   ██║   ╚██████╔╝███████╗███████╗██║ ╚████║██╗██║     ╚███╔███╔╝"); 
	  writeLn("╚══════╝   ╚═╝    ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═══╝╚═╝╚═╝      ╚══╝╚══╝ "); 
	  writeLn("");
	  writeLn("Stolen OS Version 2.6a");
 	  writeLn("");
	  writeLn("Type HELP for a list of available commands.");
	  writeLn("Type DIR for a list of available programs.");
	  writeLn("");  
	  console.focus();
	  return "";
	  
	}
	function dfhsdfhaerahaerh(event)
	{
		switch(event.keyCode)
			{
			  case 8:   return eghbhiluisdguilssdgsdsdgsdguo(event);
			  case 38:  return giufrhgiousdfhiogfu(+1);
			  case 40:  return giufrhgiousdfhiogfu(-1);
			}
	} 

	  var _gaq = _gaq || [];
	  _gaq.push(['_setAccount', 'UA-344562-6']);
	  _gaq.push(['_trackPageview']);

	  (function() {
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	  })();

	function caeruighiaeruhauirg(e) {
		var posx = 0;
		var posy = 0;
		if (!e) var e = window.event;
		if (e.pageX || e.pageY) 	{
			posx = e.pageX;
			posy = e.pageY;
		}
		else if (e.clientX || e.clientY) 	{
			posx = e.clientX + document.body.scrollLeft
				+ document.documentElement.scrollLeft;
			posy = e.clientY + document.body.scrollTop
				+ document.documentElement.scrollTop;
		}
	}

	window.onload = function() {
		init();

		document.body.onkeydown = function(event)
		{
				return dfhsdfhaerahaerh(event);
		}

		document.body.onkeypress = function(event)
		{
				return eghbhiluisdguilssdgsdsdgsdguo(event);
		}

		document.body.onclick = function(event)
		{
				return caeruighiaeruhauirg(event);
		}
	}
}());