/*global window, console, define, ns, nsConfig */
/*jslint plusplus:true */
/*
* Copyright (c) 2010 - 2014 Samsung Electronics Co., Ltd.
* License : MIT License V2
*/
/**
 * Ej core namespace
 * @class ej
 * @author Maciej Urbanski <m.urbanski@samsung.com>
 * @author Krzysztof Antoszek <k.antoszek@samsung.com>
 * @author Maciej Moczulski <m.moczulski@samsung.com>
 * @author Piotr Karny <p.karny@samsung.com>
 * @author Tomasz Lukawski <t.lukawski@samsung.com>
 */
(function (window, document, ns, nsConfig) {
	"use strict";
	//>>excludeStart("ejBuildExclude", pragmas.ejBuildExclude);
	define(function () {
		//>>excludeEnd("ejBuildExclude");
		var idNumberCounter = 0,
			currentDate = +new Date(),
			slice = [].slice,
			rootNamespace = nsConfig.rootNamespace,
			fileName = nsConfig.fileName,
			infoForLog = function (args) {
				var dateNow = new Date();
				args.unshift('[' + rootNamespace + '][' + dateNow.toLocaleString() + ']');
			};

		/**
		* Return unique id
		* @method getUniqueId
		* @static
		* @return {string}
		* @memberOf ej
		*/
		ns.getUniqueId = function () {
			return rootNamespace + "-" + this.getNumberUniqueId() + "-" + currentDate;
		};

		/**
		* Return unique id
		* @method getNumberUniqueId
		* @static
		* @return {number}
		* @memberOf ej
		*/
		ns.getNumberUniqueId = function () {
			return idNumberCounter++;
		};

		/**
		* logs supplied messages/arguments
		* @method log
		* @static
		* @param {...*} argument
		* @memberOf ej
		*/
		ns.log = function () {
			var args = slice.call(arguments);
			infoForLog(args);
			if (console) {
				console.log.apply(console, args);
			}
		};

		/**
		* logs supplied messages/arguments ad marks it as warning
		* @method warn
		* @static
		* @param {...*} argument
		* @memberOf ej
		*/
		ns.warn = function () {
			var args = slice.call(arguments);
			infoForLog(args);
			if (console) {
				console.warn.apply(console, args);
			}
		};

		/**
		* logs supplied messages/arguments and marks it as error
		* @method error
		* @static
		* @param {...*} argument
		* @memberOf ej
		*/
		ns.error = function () {
			var args = slice.call(arguments);
			infoForLog(args);
			if (console) {
				console.error.apply(console, args);
			}
		};

		/**
		* get from ejConfig
		* @method get
		* @param {string} key
		* @param {Mixed} defaultValue
		* @return {Mixed}
		* @static
		* @memberOf ej
		*/
		ns.get = function (key, defaultValue) {
			return nsConfig[key] !== undefined ? nsConfig[key] : defaultValue;
		};

		/**
		* set in ejConfig
		* @method set
		* @param {string} key
		* @param {Mixed} value
		* @return {boolean}
		* @static
		* @memberOf ej
		*/
		ns.set = function (key, value) {
			nsConfig[key] = value;
		};

		ns.getFrameworkPath = function () {
			var scripts = document.getElementsByTagName('script'),
				countScripts = scripts.length,
				i,
				url,
				arrayUrl,
				count;
			for (i = 0; i < countScripts; i++) {
				url = scripts[i].src;
				arrayUrl = url.split('/');
				count = arrayUrl.length;
				if (arrayUrl[count - 1] === fileName + '.js' || arrayUrl[count - 1] === fileName + '.min.js') {
					return arrayUrl.slice(0, count - 1).join('/');
				}
			}
		};

		//>>excludeStart("ejBuildExclude", pragmas.ejBuildExclude);
		return ns;
	});
	//>>excludeEnd("ejBuildExclude");
}(window, window.document, ns, nsConfig));
