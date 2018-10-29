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
			 * A function to render default value on a grid cell
			 *
			 * Sample usage :
			 * renderer: EJS.grid.render.default()
			 * 
			 * @return {[type]} [description]
			 */
			default: function() {
				return function(value) {
					return value;
				}
			},

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
			},

			/**
			 * A function to render yes or no on a grid cell
			 *
			 * Sample usage :
			 * renderer: EJS.grid.render.yesNo()
			 * 
			 * @return {[type]} [description]
			 */
			yesNo: function() {
				return function(value, meta) {
					return value == 1 ? 'Yes' : 'No';
				}
			},

			/**
			 * A function to render numeric value as currency on a grid cell
			 *
			 * Sample usage :
			 * renderer: EJS.grid.render.currency()
			 * 
			 * @return {[type]} [description]
			 */
			currency: function() {
				return function(value) {
					value = value ? value : 0;
					return Ext.util.Format.currency(value, ' ', 2, false);
				}
			},

			/**
			 * A function to render accurate numeric decimals on a grid cell
			 *
			 * Sample usage :
			 * renderer: EJS.grid.render.accurate()
			 * 
			 * @return {[type]} [description]
			 */
			accurate: function() {
				return function(value) {
					value = value ? value : 0;
					return Ext.util.Format.number(value, '0,0.00##########');
				}
			}

			/**
			 * A function to render full date format on a grid cell
			 *
			 * Sample usage :
			 * renderer: EJS.grid.render.fullDate()
			 * 
			 * @return {[type]} [description]
			 */
			fullDate: function() {
				return function(value) {
					return Ext.util.Format.date(value, 'F d, Y');
				}
			}

			/**
			 * A function to render year month day date format on a grid cell
			 *
			 * Sample usage :
			 * renderer: EJS.grid.render.YMDDate()
			 * 
			 */
			YMDDate: function() {
				return function(value) {
					return Ext.util.Format.date(value, 'Y-M-d');
				}
			}

			/**
			 * A function to render day month year date format on a grid cell
			 *
			 * Sample usage :
			 * renderer: EJS.grid.render.DMYDate()
			 * 
			 */
			DMYDate: function() {
				return function(value) {
					return Ext.util.Format.date(value, 'd-M-Y');
				}
			}

			/**
			 * A function to render month day year date format on a grid cell
			 *
			 * Sample usage :
			 * renderer: EJS.grid.render.MDYDate()
			 * 
			 */
			MDYDate: function() {
				return function(value) {
					return Ext.util.Format.date(value, 'M-d-Y');
				}
			}
		}
	},

	render = {

	}

}