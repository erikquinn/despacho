/** Intelligently truncates a firstname-lastname combo to 15 total characters
 */
function abbreviateOperatorName(name) {
    var max_char_in_name = 15;
    if(name.length <= max_char_in_name) {
        return name;
    }
    else {
        var fn = name.split(" ")[0];
        var ln = name.split(" ")[1];
        var char_to_remove = name.length - max_char_in_name;

        var ln_chars_removed = clamp(char_to_remove, 0, Math.max(ln.length-4, 0));
        if(ln_chars_removed > 0) {
            ln = ln.substr(0, ln.length - (ln_chars_removed + 1));
            ln = ln.concat("-");
            char_to_remove -= ln_chars_removed;
        }

        if(char_to_remove > 0) {
            var fn_chars_removed = clamp(char_to_remove, 0, Math.max(fn.length-4, 0));
            fn = fn.substr(0, fn.length - (fn_chars_removed + 1));
            fn = fn.concat("-");
        }

        return fn + " " + ln
    }
}
