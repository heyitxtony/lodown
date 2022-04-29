'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * identifty: function takes in any value as an arguemtn and returns that value unchanged
 * @param {any value} value : takes in any value as an input 
 * @returns {any} : returns the input value unchanged.
 */
function identity(value) {
    return value;
}

module.exports.identity = identity;

/**
 * typeof: takes in a input and returns type of dataset
 * @param {and value} : value: takes in any value input
 * @return {any}: returns the datatype; i.e. "string", array, boolean, object
 */
 _.typeOf = function(value){
    if (typeof value !== "object"){
        return typeof value;
    } else if (typeof value === value){
     return typeof value;
    } else if (Array.isArray(value) === true){
        return "array";
    } else if (value === null) {
        return "null";
    } else if (value instanceof Date){
        return "date";
    } else {
        return "object";
    }
}

module.exports.typeOf = typeOf;