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
    $("#strip-list").append(createStrip(data.list[i]));
    scroll_to_bottom($("#strip-list"));
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
  }
}

function createStrip(flight) {
    var callsign = doublewrap_span(flight.callsign, ['callsign'], ['container']);
    var gate_eta = wrap_span(wrap_div((flight.gate || "?"), ['gate']) +
        wrap_div((flight.eta || "?"), ['eta'], ['container']), ['gate-eta']);
    var pax = doublewrap_span((flight.passengers || "#"), ['passengers'], ['container']);
    var dest = doublewrap_span((flight.dest || "?"), ['destination'], ['container']);
    return '<li class="strip">' + callsign + gate_eta + pax + dest + '</li>';
}
