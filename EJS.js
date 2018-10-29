/**
 * This is an opensource project that aims to provide useful wrappers for 
 * faster development when using ExtJS library.
 *
 * Feel free to add more wrappers under categories provided or make another one
 * if the functionality requires.
 */


/**
 * A namespace EJS would be used for this project
 * @type {Object}
 */
var EJS = {
	
	/**
	 * A wrapper component related functions 
	 * @type {Object}
	 */
	component = {
		/**
		 * A function to query a component
		 *
		 * Sample usage :
		 * EJS.component.query('button[property = value]')
		 * 
		 * @param  {string} queryString [description]
		 * @return {component}             [description]
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
		 * @param  {string} component [description]
		 * @param  {string} reference [description]
		 * @return {component}           [description]
		 */
		reference: function(component, reference) {
			return Ext.Component.query(component + '[reference = ' + reference + ']')[0];
		}
	},


}