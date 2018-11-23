/**
 * This is an opensource project that aims to provide useful wrappers for 
 * faster development when using ExtJS library.
 *
 * Feel free to add more wrappers under categories provided or make another one
 * if the functionality requires.
 *
 * Applied to ExtJS v6.*
 */

var EJS = function() {}

EJS.prototype = {

	/** @type {Object} Sub-namespace for component related functions */
	component: {
		/**
		 * A function to query a component
		 *
		 * Sample usage :
		 * EJS.component.query('button[property = value]')
		 * 
		 * @param  {String} queryString [description]
		 * @return {Component}             [description]
		 */
		query: function(queryString) {
			return Ext.ComponentQuery.query(queryString)[0];
		},
		
		/**
		 * A function to query a componet via its reference property
		 *
		 * Sample usage :
		 * EJS.component.reference('button', 'button-reference-value')
		 * 
		 * @param  {String} component [description]
		 * @param  {String} reference [description]
		 * @return {Component}           [description]
		 */
		reference: function(component, reference) {
			return Ext.Component.query(component + '[reference = ' + reference + ']')[0];
		}
	},
	
	/** @type {Object} Sub-namespace for grid component related functions */
	grid: {

	}
}
