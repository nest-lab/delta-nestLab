module.exports = function (str) {
    var regex = /#(\S)+/g;
    var hashTags = str.match(regex);

    //Returning an array of hash tags
    return hashTags;
}