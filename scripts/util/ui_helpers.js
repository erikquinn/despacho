/** Scroll a scrollable element all the way down
 */
function scroll_to_bottom($elem) {
    if(!$elem.scrollHeight) {
        $elem = $elem[0];
    }
    $elem.scrollTop = $elem.scrollHeight;
}

/** Wrap an element in a span with specified id/classes
 */
function wrap_span($elem, classes, id) {
  var c = classes ? ' class="' + classes.join(" ") + '"' : "";
  var i = id ? ' id="' + id + '"' : "";
  return '<span' + c + i + '>' + $elem + '</span>';
}

/** Wrap an element in a div with specified id/classes
 */
function wrap_div($elem, classes, id) {
  var c = classes ? ' class="' + classes.join(" ") + '"' : "";
  var i = id ? ' id="' + id + '"' : "";
  return '<div' + c + i + '>' + $elem + '</div>';
}

/** Wrap an element in a double-nested span
 */
function doublewrap_span($elem, innerClasses, outerClasses, innerId, outerId) {
    return wrap_span(wrap_span($elem, innerClasses, innerId), outerClasses, outerId);
}

/** Wrap an element in a double-nested div
 */
function doublewrap_div($elem, innerClasses, outerClasses, innerId, outerId) {
    return wrap_div(wrap_div($elem, innerClasses, innerId), outerClasses, outerId);
}
