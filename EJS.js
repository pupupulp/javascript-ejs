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
			},

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
			},

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
			},

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
			},

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

	/** @type {Object} A wrapper for renderer related functions */
	render = {
		/**
		 * A function to render default value
		 *
		 * Sample usage :
		 * renderer: EJS.render.default()
		 * 
		 * @return {[type]} [description]
		 */
		default: function(value) {
			return value;
		},

		/**
		 * A function to render yes or no 
		 *
		 * Sample usage :
		 * renderer: EJS.render.yesNo()
		 * 
		 * @param {Number} value [description]
		 * @return {String} [description]
		 */
		yesNo: function(value) {
			return value == 1 ? 'Yes' : 'No';
		},

		/**
		 * A function to render numeric value as currency
		 *
		 * Sample usage :
		 * renderer: EJS.render.currency()
		 * 
		 * @param {Number} value [description]
		 * @return {Number} [description]
		 */
		currency: function(value = 0) {
			return Ext.util.Format.currency(value, ' ', 2, false);
		},

		/**
		 * A function to render accurate numeric decimals
		 *
		 * Sample usage :
		 * renderer: EJS.render.accurate()
		 * 
		 * @param {Number} value [description]
		 * @return {Number} [description]
		 */
		accurate: function(value = 0) {
			return Ext.util.Format.number(value, '0,0.00##########');
		},

		/**
		 * A function to render full date format
		 *
		 * Sample usage :
		 * renderer: EJS.render.fullDate()
		 * 
		 * @param {Date} value [description]
		 * @return {Date}        [description]
		 */
		fullDate: function(value) {
			return Ext.util.Format.date(value, 'F d, Y');
		},

		/**
		 * A function to render year month day date format 
		 *
		 * Sample usage :
		 * renderer: EJS.render.YMDDate()
		 * 
		 * @param {Date} value [description]
		 * @return {Date}        [description]
		 */
		YMDDate: function(value) {
			return Ext.util.Format.date(value, 'Y-m-d');
		},

		/**
		 * A function to render day month year date format 
		 *
		 * Sample usage :
		 * renderer: EJS.render.DMYDate()
		 * 
		 * @param {Date} value [description]
		 * @return {Date}        [description]
		 */
		DMYDate: function(value) {
			return Ext.util.Format.date(value, 'd-m-Y');
		},

		/**
		 * A function to render month day year date format
		 *
		 * Sample usage :
		 * renderer: EJS.render.MDYDate()
		 * 
		 * @param {Date} value [description]
		 * @return {Date}        [description]
		 */
		MDYDate: function(value) {
			return Ext.util.Format.date(value, 'm-d-Y');
		}

		/**
		 * A function to render date on a specified format
		 * @param  {Date} value  [description]
		 * @param  {String} format [description]
		 * @return {Date}        [description]
		 */
		formatDate: function(value, format = 'm-d-Y') {
			return Ext.util.Format.date(value, format);
		}
	},

	/** @type {Object} A wrapper for ajax related functions */
	ajax = {
		/**
		 * A function to handle ajax requests
		 *
		 * Sample usage:
		 * EJS.ajax.request('url', 'GET', { key: value }, function success(){}, function fail() {}, true)
		 * 
		 * @param  {String}  url             [description]
		 * @param  {String}  method          [description]
		 * @param  {Object}  params          [description]
		 * @param  {Function}  sucessCallback  [description]
		 * @param  {Function}  failureCallback [description]
		 * @param  {Boolean} async           [description]
		 * @return {[type]}                  [description]
		 */
		request: function(url, method, params, sucessCallback, failureCallback, async = true) {
			return Ext.Ajax.request({
				async: async,
				url: url,
				method: method,
				params: params,
				success: function(response) {
					callback(Ext.decode(reponse.responseText));
				},
				failure: function(response){
					failureCallback();
				}
			});
		}
	},

	/** @type {Object} A wrapper for URL related functions */
	url = {
		/**
		 * A function to convert object params as query for url params
		 *
		 * Sample usage:
		 * EJS.url.covertObjectToQuery({ key: value })
		 * 
		 * @param  {Object} params [description]
		 * @return {String}        [description]
		 */
		convertObjectToQuery: function(params) {
			var query = "";

			Ext.object.each(params, function(key, value) {
				query += encodeURIComponent(key)+'='+encodeURIComponent(value)+'&';
			});

			return query;
		}
	},

	/** @type {Object} A wrapper for tasks related functions */
	task = {
		/**
		 * A function to create new delayed task that executes a callback function
		 *
		 * Sample usage:
		 * EJS.task.create(function task() {})
		 * 
		 * @param  {Function} callback [description]
		 * @return {[type]}            [description]
		 */
		create: function(callback) {
			return new Ext.util.DelayedTask(callback);
		}
	},

	/** @type {Object} A wrapper for store related functions */
	store = {
		/**
		 * A function to create a store
		 *
		 * Sample usage:
		 * EJS.store.create('url', { key: value }, component, true, 25)
		 * 
		 * @param  {String}  url         [description]
		 * @param  {Object}  extraParams [description]
		 * @param  {Component}  component   [description]
		 * @param  {Boolean} autoLoad    [description]
		 * @param  {Number}  pageSize    [description]
		 * @return {[type]}              [description]
		 */
		create: function(url, extraParams = {}, component, autoLoad = true, pageSize = 25) {
			if(!url) return;

			return new Ext.data.Store({
				fields: [],
				proxy: {
					extraParams: extraParams,
					url: url,
					type: 'ajax',
					reader: {
						type: 'json',
						rootProperty: 'data',
						totalProperty: 'total'
					}
				},
				pageSize: pageSize,
				autoLoad: autoLoad,
				autoDestroy: true,
				listeners: {
					metachange: function(store, meta) {
						store.fields = meta.fields;
					},
					load: function(store, records, success) {
						var message = '<center>Failed to load store data.</center>';

						if(component != undefined) {
							if(!success) return component.mask(message);
							else component.unmask();
						} else return;

						if(store.getTotalCount() <= 0 ||
							!Ext.isDefined(component.value)) return;

						if(!Ext.Array.contains(store.getFields(), 'is_default')) return;
						else {
							var index = store.findExact('is_default', '1');

							if(index < 0) return;
							else {
								var value = store.getAt(index).get('id');
								component.setValue(value);
							}
						}
					}
				}
			});
		},

		/**
		 * A function to create a tree based store
		 * 
		 * Sample usage:
		 * EJS.store.tree('url', { key: value }, component, true, true)
		 * 
		 * @param  {String}  url         [description]
		 * @param  {Object}  extraParams [description]
		 * @param  {Component}  component   [description]
		 * @param  {Boolean} autoLoad    [description]
		 * @param  {Boolean} folderSort  [description]
		 * @return {Store}              [description]
		 */
		tree: function(url, extraParams = {}, component, autoLoad = true, folderSort = true) {
			return new Ext.data.TreeStore({
				proxy: {
					extraParams: extraParams,
					url: url,
					type: 'ajax',
					reader: {
						type: 'json',
						root: 'children'
					}
				},
				root: {
					text: '.',
					expandable: false,
				},
				autoLoad: autoLoad,
				folderSort: folderSort,
				listeners: {
					load: function(store, records, success) {
						var message = '<center>Failed to load store data.</center>';

						if(component != undefined) {
							if(!success) return component.mask(message);
							else component.unmask();
						} else return;
					}
				}
			});
		},

		/**
		 * A function to create a store via defined records
		 *
		 * Sample usage:
		 * EJS.store.local([])
		 * 
		 * @param  {Array} records [description]
		 * @return {Store}         [description]
		 */
		local: function(records) {
			var keys = Object.keys(records[0]);

			return Ext.create('Ext.data.Store', {
				fields: keys,
				data: records
			});
		},
	},

	/** @type {Object} A wrapper for window body related functions */
	body = {
		/**
		 * A function to get window body's height
		 *
		 * Sample usage:
		 * EJS.body.windowHeight()
		 * 
		 * @return {Number} [description]
		 */
		windowHeight: function() {
			return Ext.getBody().getViewSize().height;
		}

		/**
		 * A function to get window body's width
		 *
		 * Sample usage:
		 * EJS.body.windowWidth()
		 * 
		 * @return {Number} [description]
		 */
		windowWidth: function() {
			return Ext.getBody().getViewSize().width;
		}
	}
}