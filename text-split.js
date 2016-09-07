
/**
* This function splits text from innerHTML with a separator. Then, it wrap sparated words with <span> except <br>
* Finally, it returns all the span element in the newly inserted innerHTML
* @param {HTML element} element 
* @param {string} split This is separator for text
* @return {Array.<HTML element>} Array of span html element
*/
module.exports = function(element,split) {
    var words = splitText(element.innerHTML.toString(),split);
    var str = '';
    words.forEach(function(line) {
        if (line.indexOf('<br>')>-1) {
            var lines = line.split('<br>');
            lines.forEach(function(line,id,arr) {
                str += (id>0) ? '<br>'+parseLine(line) : parseLine(line);
            });
        } else { 
            str += parseLine(line);
        }
    });
    element.innerHTML = str;
    return element.querySelectorAll('span');
};


/**
* This function split text into array including <br>
* @params {string} txt This is text that retrieved from html element 
* @params {string} split It is separator for text
* @return {Array.<string>} result of split using separator including <br>
*/
function splitText(txt,split) {
    var splits = txt.split('<br>');
    var arr = [];
    splits.forEach(function(item,id) {
        if (id>0) arr.push('<br>');
        arr = arr.concat(item.split(split));
    });
    return arr;
}
/**
* This function will wrap passed argument with <span> if passed argument is not empty, space, or <br>
* @params {string} line It is words that are separated by seprator 
* @return {string} it is either '', ' ', <br> , or <span>line<span>  
*/
function parseLine(line) {
    if  (line==='' || line===' ') {
        return line;
    } else {
        return (line==='<br>') ? '<br>' : '<span>'+line+'</span>'+((line.length>1)?' ':'');
    }
}