var flights = [];
var lounges = [];
var operators = [];

$.getJSON("./data/flights.json", function(data) {
    flights = data;
    listFlights(flights);
});
$.getJSON("./data/lounges.json", function(data) {
    lounges = data;
    listLounges(lounges);
});
$.getJSON("./data/operators.json", function(data) {
    operators = data;
    listOperators(operators);
});

function listFlights(data) {
  console.log(data);
  for(var i=0; i<data.list.length; i++) {
  // for(var i=0; i==0; i++) {
    var html = '<li class="strip"><span class="column1"><div class="callsign">'
      + data.list[i].callsign + '</div><div class="eta">'
      + data.list[i].eta + '</div></span><span class="gate">'
      + (data.list[i].gate || "?") + '</span><span class="passengers">'
      + (data.list[i].passengers || "#") + '</span><span class="destination">'
      + data.list[i].dest + '</span></li>';
    $("#strip-list").append(html);
  }
}

function listLounges(data) {
  console.log(data);
  for(var i=0; i<data.list.length; i++) {
    //document.write(data.list[i].name);
  }
}

function listOperators(data) {
  console.log(data);
  for(var i=0; i<data.list.length; i++) {
    //document.write(data.list[i].name);
  }
}

function createStrips() {
  this.strip = $("<li class='strip'></li>");

  // Top Line Data
  this.html.append("<span class='callsign'>" + this.getCallsign() + "</span>");
  this.html.append("<span class='heading'>???</span>");
  this.html.append("<span class='altitude'>???</span>");

  // Bottom Line Data
  if(["H","U"].indexOf(this.model.weightclass) > -1)
    this.html.append("<span class='aircraft'>" + "H/" + this.model.icao  + "</span>");
  else this.html.append("<span class='aircraft'>" + this.model.icao + "</span>");
  this.html.append("<span class='destination'>" + this.destination + "</span>");
  this.html.append("<span class='speed'>???</span>");

  // Initial Styling
  if(this.category == "departure") this.html.addClass('departure');
  else this.html.addClass('arrival');

  // Strip Interactivity Functions
  this.html.find(".strip").prop("title", this.fms.fp.route.join(' '));  // show fp route on hover
  this.html.click(this, function(e) {
    input_select(e.data.getCallsign());
  });
  this.html.dblclick(this, function (e) {
    prop.canvas.panX = 0 - round(km_to_px(e.data.position[0]));
    prop.canvas.panY = round(km_to_px(e.data.position[1]));
    prop.canvas.dirty = true;
  });

  // Add the strip to the html
  var scrollPos = $("#strips").scrollTop();
  $("#strips").prepend(this.html);
  $("#strips").scrollTop(scrollPos + 45);  // shift scroll down one strip's height

  // Determine whether or not to show the strip in our bay
  if (this.category == "arrival") this.html.hide(0);
  else if (this.category == "departure") this.inside_ctr = true;
}
