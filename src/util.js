

// Loads a csv file and returns as an object
function loadCSV(url, resolve = function(result) { }){
    
    console.log("Trying to open", url);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          
            if (xhttp == null || xhttp.responseXML == "") return resolve( {error: "Error: cannot open " + url});

            //console.log("xhttp.responseText", xhttp.responseText);
            var csvString = xhttp.responseText.split("\n");
			if (csvString.length == 0)  return resolve( {error: "Error: empty csv file detected at " + url} );
			
			
			var CSV_obj = {};
			var column_names = [];
			
			
			// Parse the file
			var haveParsedHeader = false;
			var nrows = 0;
			for (var i = 0; i < csvString.length; i ++){
				var line = csvString[i].trim();
				if (line == "") continue;
				
				var splitLine = line.split(",");
				
				
				
				
				var rowIsHeader = false;
				for (var j = 0; j < splitLine.length; j ++){
				
					// Parse the header
					if (!haveParsedHeader){
						rowIsHeader = true;
						
						column_names.push(splitLine[j]);
						CSV_obj[splitLine[j]] = [];
						
						

					
					} else {
					
						var value = splitLine[j];
						var colName = column_names[j];
						if (colName == null)  return resolve( {error: "Error: too many columns in row " + i + " of file " + url} );
						
						CSV_obj[colName].push(value);
						
						
					
					}
					
				}
				
				if (rowIsHeader) haveParsedHeader = true;
				else nrows ++;
			
			
			}
            

			CSV_obj.nrows = nrows;
			return resolve(CSV_obj);

           
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
    
    
}

