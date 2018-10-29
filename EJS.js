/**
 * This is an opensource project that aims to provide useful wrappers for 
 * faster development when using ExtJS library.
 *
 * Feel free to add more wrappers under categories provided or make another one
 * if the functionality requires.
 *
 * Applied to ExtJS v6.*
 */


/** @type {Object} A namespace EJS would be used for this project */
var EJS = {
	
	/** @type {Object} A wrapper for component related functions */
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

	/** @type {Object} A wrapper for grid component related functions */
	grid = {
		/** @type {Object} Renderer object for grid components */
		render = {
			/**
			 * A function to render qTip on a grid cell
			 *
			 * Sample usage :
			 * renderer: EJS.grid.render.qTip()
			 * 
			 * @return {[type]} [description]
			 */
			qTip: function() {
				return function(value, meta) {
					meta.tdAttr = 'data-qtip = "' + value + '"';
					return value;
				}
			},

			/**
			 * A function to render check column on a grid cell
			 *
			 * Sample usage :
			 * renderer: EJS.grid.render.checkColumn()
			 * 
			 * @return {[type]} [description]
			 */
			checkColumn: function() {
				return function(value, meta) {
					meta.tdAttr = 'data-qtip = "' + (value == 1 ? 'Yes' : 'No') + '"';

					var cssPrefix = Ext.baseCSSPrefix,
						cssClass = cssPrefix + 'grid-checkcolumn';

					if(value == 1) cssClass += ' ' + cssPrefix + 'grid-checkcolumn-checked';

					return '<div class="' + cssClass + '" role="button" tabIndex="0"></div>';
				}
			}
		}
	}

}