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
  $("#strip-list").append(createFlightStripSeparator());
  for(var i=0; i<data.list.length; i++) {
    $("#strip-list").prepend(createFlightStrip(data.list[i]));
    scroll_to_bottom($("#strip-list"));
    $("#strip-list").sortable({axis: "y"});
    $("#strip-list").disableSelection();
  }
}

function listLounges(data) {
  console.log(data);
  for(var i=0; i<data.list.length; i++) {
  }
}

function listOperators(data) {
  console.log(data);
  for(var i=0; i<data.list.length; i++) {
      $("#available-operators").append(createOperatorStrip(data.list[i]));
      $("#scheduled-operators").append(createOperatorStrip(data.list[i]));
  }
}

function createFlightStripSeparator() {
    var content = "IN PASSUR RANGE";
    return '<li class="flight-strip" style="background-color:#777;">'
        + '<span class="container" style="width: 100%; font-size: 18px;">'
        + '<span style="vertical-align:middle;display: table-cell;">'
        + content + '</span></span></li>';
}

function createFlightStrip(flight) {
    var callsign = doublewrap_span(flight.callsign, ['callsign'], ['container']);
    var gate_eta = wrap_span(wrap_div((flight.gate || "?"), ['gate']) +
        wrap_div((flight.eta || "?"), ['eta'], ['container']), ['gate-eta']);
    var pax = doublewrap_span((flight.passengers || "#"), ['passengers'], ['container']);
    var dest = doublewrap_span((flight.dest || "?"), ['destination'], ['container']);
    return '<li class="flight-strip">' + callsign + gate_eta + pax + dest + '</li>';
}

function createOperatorStrip(operator) {
    var name = wrap_span(abbreviateOperatorName(operator.name), ['operator-name']);
    var lounge = wrap_span("GA", ['operator-lounge']);
    var shiftEnd = wrap_span("1800", ['operator-shift-end']);
    return '<li class="operator-strip">' + name + lounge + shiftEnd + '</li>';
}
