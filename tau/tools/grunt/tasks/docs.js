/*global require, module, __dirname, process */
/*
 * Generating docs Ej
 *
 * @author Maciej Urbanski <m.urbanski@samsung.com>
 * Licensed under the MIT license.
 */

module.exports = function (grunt) {
	'use strict';
	var path = require("path"),
		mu = require('mu2'),
		fs = require('fs'),
		dox = require('dox'),
		async = require('async');
	mu.root = __dirname + '/templates';

	grunt.registerMultiTask('docs-html', '', function () {
		var done = this.async(),
			docsStructure = {},
			profile = this.data.profile,
			files = [],
			template = this.data.template,
			templateDir = template + "/",
			next;

		function createWidgetDoc(newFile, file, name, docsStructure, callback) {
			var string = "",
				toc = [],
				parentToc = {
					1: {
						toc: toc
					}
				},
				description,
				methods = docsStructure.methods.filter(function (method) {
					return method.isPublic && !method.inherited;
				}),
				inheritedMethods = docsStructure.methods.filter(function (method) {
					return method.isPublic && method.inherited;
				}),
				publicMethodsCount = 0,
				shortName;
			grunt.log.ok("Start generating file for widget ", file);
			docsStructure.methods.sort(function (a, b) {
				return a.name > b.name ? 1 : -1;
			});
			docsStructure.options.sort(function (a, b) {
				return a.name > b.name ? 1 : -1;
			});
			description = docsStructure.description.replace(/(<h([2-4])>)(.*?)(<\/h[2-4]>)/ig, function (match, p1, p2, p3, p4) {
				var name = p3.replace(" ", "-").toLowerCase() + (Math.random()),
					level = parseInt(p2, 10);
				parentToc[level] = {
					href: name,
					name: p3,
					toc: []
				};
				if (parentToc[level - 1]) {
					parentToc[level - 1].hasTOC = true;
					parentToc[level - 1].toc.push(parentToc[level]);
				}
				return p1 + "<a id='" + name + "'></a>" + p3 + p4;
			});
			if (docsStructure.options.length) {
				toc.push({
					href: "options-list",
					name: "Options list",
					toc: []
				});
			}
			if (docsStructure.events.length) {
				toc.push({
					href: "events-list",
					name: "Events list",
					toc: []
				});
			}
			if (methods.length) {
				toc.push({
					href: "methods-list",
					name: "Methods list",
					hasTOC: true,
					toc: methods.map(function (method) {
						method.first = (publicMethodsCount === 0);
						publicMethodsCount++;
						return {
							href: "method-" + method.name,
							name: method.name
						};
					})
				});
			}
			shortName = docsStructure.name.split(".").pop();
			if (inheritedMethods.length) {
				toc.push({
					href: "inherited-methods-list",
					name: "Inherited methods list",
					hasTOC: true,
					toc: inheritedMethods.map(function (method) {
						method.first = (publicMethodsCount === 0);
						publicMethodsCount++;
						return {
							href: "method-" + method.name,
							name: method.name
						};
					})
				});
			}
			mu.compileAndRender(templateDir + 'widget.mustache', {
				title: name,
				namespace: docsStructure.name,
				namespaceShort: shortName,
				brief: docsStructure.brief,
				description: description.replace(/@example/g, "").replace(/\<pre\>\<code\>\s*\n/g, "<pre class=\"prettyprint\">").replace(/\<\/code\>/g, ""),
				toc: toc,
				seeMore: docsStructure.seeMore,
				options: docsStructure.options,
				showOptions: docsStructure.options.length,
				events: docsStructure.events,
				showEvents: docsStructure.events.length,
				methods: methods,
				inheritedMethods: inheritedMethods,
				showMethods: methods.length,
				showInheritedMethods: inheritedMethods.length,
				since: docsStructure.since
			}).on('data', function (data) {
				string += data.toString();
			}).on('end', function () {
				grunt.file.write(newFile + "html/widgets/" + file, string);
				grunt.log.ok("Finished generating file for widget ", file);
				callback();
			});
		}

		function createClassDoc(newFile, file, name, docsStructure, callback) {
			var string = "",
				toc = [],
				parentToc = {
					1: {
						toc: toc
					}
				},
				description,
				shortName,
				publicMethodsCount = 0,
				methods = docsStructure.methods.filter(function (method) {
					return method.isPublic && !method.inherited;
				}),
				inheritedMethods = docsStructure.methods.filter(function (method) {
					return method.isPublic && method.inherited;
				});
			grunt.log.ok("Start generating file for class ", file);
			docsStructure.methods.sort(function (a, b) {
				return a.name > b.name ? 1 : -1;
			});
			docsStructure.properties.sort(function (a, b) {
				return a.name > b.name ? 1 : -1;
			});
			description = docsStructure.description.replace(/(<h([2-4])>)(.*?)(<\/h[2-4]>)/ig, function (match, p1, p2, p3, p4) {
				var name = p3.replace(" ", "-").toLowerCase() + (Math.random()),
					level = parseInt(p2, 10);
				parentToc[level] = {
					href: name,
					name: p3,
					toc: []
				};
				if (parentToc[level - 1]) {
					parentToc[level - 1].hasTOC = true;
					parentToc[level - 1].toc.push(parentToc[level]);
				}
				return p1 + "<a id='" + name + "'></a>" + p3 + p4;
			});
			if (docsStructure.events.length) {
				toc.push({
					href: "events-list",
					name: "Events list",
					toc: []
				});
			}
			if (methods.length) {
				toc.push({
					href: "methods-list",
					name: "Methods list",
					hasTOC: true,
					toc: methods.filter(function (method) {
						return method.isPublic;
					}).map(function (method) {
						method.first = (publicMethodsCount === 0);
						publicMethodsCount++;
						return {
							href: "method-" + method.name,
							name: method.name
						};
					})
				});
			}
			if (inheritedMethods.length) {
				toc.push({
					href: "inherited-methods-list",
					name: "Inherited methods list",
					hasTOC: true,
					toc: inheritedMethods.map(function (method) {
						return {
							href: "method-" + method.name,
							name: method.name
						};
					})
				});
			}
			if (docsStructure.properties.length) {
				toc.push({
					href: "properties-list",
					name: "Properties list",
					hasTOC: true,
					toc: docsStructure.properties.filter(function (property) {
						return property.isPublic;
					}).map(function (property) {
						return {
							href: "property-" + property.name,
							name: property.name
						};
					})
				});
			}
			shortName = docsStructure.name.split(".").pop();
			mu.compileAndRender(templateDir + 'class.mustache', {
				title: name,
				namespace: docsStructure.name,
				namespaceShort: shortName,
				brief: docsStructure.brief,
				description: description.replace(/@example/g, "").replace(/\<pre\>\<code\>\s*\n/g, "<pre class=\"prettyprint\">").replace(/\<\/code\>/g, ""),
				toc: toc,
				seeMore: docsStructure.seeMore,
				options: docsStructure.options,
				showOptions: docsStructure.options.length,
				events: docsStructure.events,
				showEvents: docsStructure.events.length,
				methods: methods,
				showMethods: methods.length,
				inheritedMethods: inheritedMethods,
				showInheritedMethods: inheritedMethods.length,
				properties: docsStructure.properties,
				showProperties: docsStructure.properties.length,
				since: docsStructure.since
			}).on('data', function (data) {
				string += data.toString();
			}).on('end', function () {
				grunt.file.write(newFile + "html/class/" + file, string);
				grunt.log.ok("Finished generating file for class ", file);
				callback();
			});
		}

		function createWidgetIndex(newFile, docsStructure, rows, callback) {
			var string = "";
			rows.sort(function (a, b) {
				return a.namespace > b.namespace ? 1 : -1;
			});
			var widgetsDoc = docsStructure["ns.widget.mobile"] || docsStructure["ns.widget.wearable"] || docsStructure["ns.widget.tv"];
			grunt.log.ok("Started generating index for widgets.");
			mu.compileAndRender(templateDir + 'index.mustache', {
				title: widgetsDoc.title,
				description: widgetsDoc.description.full,
				seeMore: widgetsDoc.seeMore,
				table: {
					caption: "Table: Tizen Widgets",
					module: "Widget",
					rows: rows
				},
				breadcrumb: [
					{href: "/dev-guide/2.2.1/org.tizen.web.appprogramming/html/cover_page.htm", title: "Tizen Web App Programming"},
					{href: "/dev-guide/2.2.1/org.tizen.web.appprogramming/html/api_reference/api_reference.htm", title: "API References"},
					{href: "../index.htm", title: "UI Framework Reference"}
				],
				basedir: ".."
			}).on('data', function (data) {
				string += data.toString();
			}).on('end', function () {
				grunt.file.write(newFile + "html/widgets/widget_reference.htm", string);
				grunt.log.ok("Finished generating index for widgets.");
				callback();
			});
		}


		function createClassIndex(newFile, docsStructure, rows, callback) {
			var string = "",
				classDoc = docsStructure;

			grunt.log.ok("Started generating index for classes.");
			rows.sort(function (a, b) {
				return a.namespace > b.namespace ? 1 : -1;
			});
			mu.compileAndRender(templateDir + 'index.mustache', {
				title: classDoc.title,
				namespace: classDoc.name,
				description: classDoc.description && classDoc.description.full,
				seeMore: classDoc.seeMore,
				table: {
					caption: "Table: Tizen Advanced UI Classes",
					module: "Description",
					rows: rows
				},
				breadcrumb: [
					{href: "/dev-guide/2.2.1/org.tizen.web.appprogramming/html/cover_page.htm", title: "Tizen Web App Programming"},
					{href: "/dev-guide/2.2.1/org.tizen.web.appprogramming/html/api_reference/api_reference.htm", title: "API References"},
					{href: "../index.htm", title: "UI Framework Reference"}
				],
				basedir: ".."
			}).on('data', function (data) {
				string += data.toString();
			}).on('end', function () {
				grunt.file.write(newFile + "html/class/class_reference.htm", string);
				grunt.log.ok("Finished generating index for classes.");
				callback();
			});
		}


		function createIndex(newFile, docsStructure, rows, callback) {
			var string = "",
				classDoc = docsStructure;

			grunt.log.ok("Started generating index.");
			rows.sort(function (a, b) {
				return a.name > b.name ? 1 : -1;
			});

			mu.compileAndRender(templateDir + 'index.mustache', {
				title: classDoc.title,
				description: classDoc.description && classDoc.description.full,
				seeMore: classDoc.seeMore,
				table: {
					caption: "Table: Tizen Advanced UI",
					module: "Description",
					rows: rows
				},
				breadcrumb: [
					{href: "/dev-guide/2.2.1/org.tizen.web.appprogramming/html/cover_page.htm", title: "Tizen Web App Programming"},
					{href: "/dev-guide/2.2.1/org.tizen.web.appprogramming/html/api_reference/api_reference.htm", title: "API References"}
				],
				basedir: "."
			}).on('data', function (data) {
				string += data.toString();
			}).on('end', function () {
				grunt.file.write(newFile + "html/index.htm", string);
				grunt.log.ok("Finished generating index.");
				callback();
			});
		}

		function prepareNote(string) {
			return string.replace(/!!!(.*)!!!/gm, function (match, p1) {
				return "<div class='note'>" + p1 + "</div>";
			});
		}

		function deleteBR(string) {
			return string.replace(/<br \/>/gm, " ");
		}

		function copyObject(object) {
			var newObject,
				value,
				i;
			if (object instanceof Array) {
				newObject = [];
			} else {
				newObject = {};
			}
			for (i in object) {
				value = object[i];
				newObject[i] = (typeof value === "object") ? copyObject(value) : value;
			}
			return newObject;
		}

		function parseDox(file) {
			var docs,
				doxFile = file.replace('dist', 'tmp/dox'),
				structureFile = 'docs/js/' + profile + "/tau.js",
				newFile = 'docs/' + templateDir + '/' + profile + '/',
				modules = [],
				i,
				next,
				jsContent,
				rowsWidgets = [],
				rowsClasses = [],
				namespaceArray,
				series = [],
				filename,
				name,
				description;

			jsContent = grunt.file.read(file);
			docs = dox.parseComments(jsContent);
			grunt.file.write(doxFile, JSON.stringify(docs));

			docs.forEach(function (block) {
				block.tags.filter(function (tag) {
					return tag.type === 'page';
				}).forEach(function (tag) {
					var pageObj = {
						name: tag.string
					};
					docsStructure[tag.string] = pageObj;
					pageObj.authors = block.tags.filter(function (tag) {
						return tag.type === 'author';
					}).map(function (tag) {
						return tag.string;
					});
					pageObj.title = block.tags.filter(function (tag) {
						return tag.type === 'title';
					}).map(function (tag) {
						return tag.string;
					})[0];
					pageObj.type = 'page';
					pageObj.description = block.description;
					pageObj.seeMore = block.tags.filter(function (tag) {
						return tag.type === 'seeMore';
					}).map(function (tag) {
						var valueArray = tag.string.split(" "),
							file = valueArray.shift(),
							name = valueArray.join(" ");
						return {file: file, name: name};
					});
				});
				block.tags.filter(function (tag) {
					return tag.type === 'class';
				}).forEach(function (tag) {
					var classObj = {
							name: tag.string
						},
						descriptionArray;
					docsStructure[tag.string] = classObj;
					classObj.authors = block.tags.filter(function (tag) {
						return tag.type === 'author';
					}).map(function (tag) {
						return tag.string
					});
					classObj.extends = block.tags.filter(function (tag) {
						return tag.type === 'extends';
					}).map(function (tag) {
						return tag.string;
					})[0];
					classObj.override = block.tags.filter(function (tag) {
						return tag.type === 'override';
					}).map(function (tag) {
						return tag.string;
					})[0];
					descriptionArray = (block.description.summary || "").split("\n");
					classObj.title = descriptionArray[0].replace(/\<.*?\>/g, "");
					classObj.brief = descriptionArray[2] && descriptionArray[2].replace(/\<.*?\>/g, "") || "";
					classObj.description = prepareNote(deleteBR(block.description.body));

					classObj.isPrivate = block.isPrivate;
					classObj.isInternal = !!(block.tags.filter(function (tag) {
						return tag.type === 'internal';
					})[0]);
					classObj.since = block.tags.filter(function (tag) {
						return tag.type === 'since';
					}).map(function (tag) {
						return tag.string;
					})[0];
					classObj.code = block.code;
					classObj.properties = [];
					classObj.events = [];
					classObj.options = [];
					classObj.methods = [];
					if (classObj.extends && docsStructure[classObj.extends]) {
						classObj.methods = docsStructure[classObj.extends].methods.map(function (method) {
							var newMethod = copyObject(method);
							newMethod.inherited = classObj.extends;
							return newMethod;
						});
						classObj.events = docsStructure[classObj.extends].events.map(function (event) {
							event.inherited = classObj.extends;
							return event;
						});
					}
					if (classObj.override && docsStructure[classObj.override]) {
						classObj.methods = docsStructure[classObj.override].methods.map(function (method) {
							method.inherited = classObj.extends;
							return method;
						});
					}

				});
				block.tags.filter(function (tag) {
					return tag.type === 'property';
				}).forEach(function (tag) {
					var classObj,
						property,
						name,
						type, description,
						propertiesArray,
						defaultValue,
						memberOf = block.tags.filter(function (tag) {
							return tag.type === 'member';
						}).map(function (tag) {
							return tag.string;
						})[0],
						canBeNull = false;
					classObj = docsStructure[memberOf];
					if (classObj) {
						propertiesArray = tag.string.split(" ");
						type = propertiesArray.shift().replace(/[{}]/g, '').replace(/\|/g, " | ").replace(/^\?/, function replacer() {
							canBeNull = true;
							return "";
						});
						if (canBeNull) {
							type += " | null";
						}
						name = propertiesArray.shift();
						description = propertiesArray.join(" ");
						if (name) {
							name = name.replace(/[\[\]]/g, '');

							propertiesArray = name.split('=');
							name = propertiesArray.shift();
							defaultValue = propertiesArray.shift();

							property = {};

							property.types = type;
							property.defaultValue = defaultValue;
							property.tags = block.tags;
							property.description = description || block.description.full;
							property.isPrivate = !!(block.tags.filter(function (tag) {
								return tag.type === 'private';
							})[0]);
							property.isInternal = !!(block.tags.filter(function (tag) {
								return tag.type === 'internal';
							})[0]);
							property.isProtected = !!(block.tags.filter(function (tag) {
								return tag.type === 'protected';
							})[0]);
							property.isPublic = !(property.isPrivate || property.isProtected || (property.isInternal && (template !== 'dld')));
							property.code = block.code;
							if (name.match(/^options/)) {
								name = name.substring(8);
								property.name = "data-" + name.replace(/[A-Z]/g, function (c) {
									return "-" + c.toLowerCase();
								});
								classObj.options.push(property);
							} else {
								property.name = name;
								classObj.properties.push(property);
							}
						}
					} else {
						grunt.log.error('no memberOf for property ', tag.string);
					}
				});
				block.tags.filter(function (tag) {
					return tag.type === 'event';
				}).forEach(function (tag) {
					var classObj,
						event,
						name,
						description,
						eventArray,
						memberOf = block.tags.filter(function (tag) {
							return tag.type === 'member';
						}).map(function (tag) {
							return tag.string;
						})[0];
					classObj = docsStructure[memberOf];
					if (classObj) {
						eventArray = tag.string.split(" ");
						name = eventArray.shift();
						description = eventArray.join(" ");
						if (name) {
							event = {};
							event.name = name;
							event.tags = block.tags;
							event.description = description || block.description.full;
							event.code = block.code;
							classObj.events.push(event);
						}
					} else {
						grunt.log.error('no memberOf for event ', tag.string);
					}
				});
				block.tags.filter(function (tag) {
					return tag.type === 'method';
				}).forEach(function (tag) {
					var classObj,
						method,
						inherited,
						name = tag.string,
						memberOf = block.tags.filter(function (tag) {
							return tag.type === 'member';
						}).map(function (tag) {
							return tag.string
						})[0] || "";
					classObj = docsStructure[memberOf];
					inherited = block.tags.filter(function (tag) {
						return tag.type === 'inherited';
					}).map(function (tag) {
						return tag.string || true;
					})[0];
					if (inherited) {
						method = classObj.methods.filter(function (_method) {
							return _method.name !== name;
						})[0] || {};
					} else {
						method = {};
					}
					method.params = block.tags.filter(function (tag) {
						return tag.type === 'param';
					}).map(function (tag) {
						var type = tag.types.join("|"),
							name = tag.name,
							canBeNull = false,
							isOptional = false,
							nameArray;
						tag.types = type.replace(/\|/g, " | ").replace(/^\?/, function replacer() {
							canBeNull = true;
							return "";
						}).replace(/\=$/, function replacer() {
							isOptional = true;
							return "";
						});
						tag.name = name.replace(/[\[\]]/g, function replacer() {
							isOptional = true;
							return "";
						});
						nameArray = tag.name.split('=');
						tag.name = nameArray.shift();
						tag.defaultValue = nameArray.shift();
						tag.isOptional = isOptional;
						return tag;
					});
					if (method.params.length) {
						method.params[method.params.length - 1].isLast = true;
					}
					method.hasParams = !!method.params.length;
					method.return = block.tags.filter(function (tag) {
						return tag.type === 'chainable';
					}).map(function () {
						return {types: [memberOf.replace("ns.widget.mobile.", "")], description: "return this"}
					}).concat(block.tags.filter(function (tag) {
						return tag.type === 'return' || tag.type === 'returns';
					}))[0];
					method.since = block.tags.filter(function (tag) {
						return tag.type === 'since';
					}).map(function (tag) {
						return tag.string;
					})[0];
					method.deprecated = block.tags.filter(function (tag) {
						return tag.type === 'deprecated';
					}).map(function (tag) {
						return tag.string;
					})[0];
					method.name = name;
					method.tags = block.tags;
					method.examples = [];
					method.brief = block.description.summary;
					method.description = deleteBR(prepareNote(block.description.body.replace(/@example/g, "").replace(/(<h[0-9]>(.*?)<\/h[0-9]>(\t|\r| |\n)*?)?<pre><code>((.|\n)*?)<\/code><\/pre>/mg, function (match, p1, p2, p3, p4) {
						method.examples.push({name: p2 || "", code: p4.replace(/\n*[ \t]*\n*<\/?(pre|code)>\n*[\t ]*\n*/gm, "")});
						return "";
					})));
					method.isPrivate = !!(block.tags.filter(function (tag) {
						return tag.type === 'private';
					})[0]);
					method.isInternal = !!(block.tags.filter(function (tag) {
						return tag.type === 'internal';
					})[0]);
					method.isProtected = !!(block.tags.filter(function (tag) {
						return tag.type === 'protected';
					})[0]);
					method.isPublic = !(method.isPrivate || method.isProtected || (method.isInternal && (template !== 'dld')) || (method.deprecated && (template === 'dld')));
					method.code = block.code;
					if (classObj) {
						classObj.methods = classObj.methods.filter(function (_method) {
							return _method.name !== method.name;
						});
						classObj.methods.push(method);
					} else {
						grunt.log.error('no memberOf for method ', tag.string);
					}
				});
			});

			next = files.pop();
			if (next) {
				parseDox(next);
			} else {
				for (i in docsStructure) {
					if (docsStructure.hasOwnProperty(i)) {
						modules.push(docsStructure[i]);
						namespaceArray = docsStructure[i].name.split(".").slice(1);
						namespaceArray.unshift("tau");
						docsStructure[i].name = namespaceArray.join(".");
						if (docsStructure[i].name.match(/^ns\.widget/) && !(docsStructure[i].isInternal && (template !== 'dld')) && docsStructure[i].type !== "page") {
							file = docsStructure[i].name.replace(/\./g, "_") + ".htm";
							filename = docsStructure[i].name.replace(/\./g, "/") + ".js";
							name = docsStructure[i].title;
							description = docsStructure[i].brief || "";
							rowsWidgets.push({file: file,
									namespace: docsStructure[i].name,
									name: name,
									filename: filename,
									description: description}
							);
							series.push(createWidgetDoc.bind(null, newFile, file, name, docsStructure[i]));
						} else if (docsStructure[i].type !== "page") {
							file = docsStructure[i].name.replace(/\./g, "_") + ".htm";
							filename = docsStructure[i].name.replace(/\./g, "/") + ".js";
							name = docsStructure[i].title;
							description = docsStructure[i].brief || "";
							rowsClasses.push({file: file,
									name: name,
									namespace: docsStructure[i].name,
									filename: filename,
									description: description}
							);
							series.push(createClassDoc.bind(null, newFile, file, name, docsStructure[i]));
						}
					}
				}

				series.push(createWidgetIndex.bind(null, newFile, docsStructure, rowsWidgets));
				series.push(createClassIndex.bind(null, newFile, docsStructure, rowsClasses));
				series.push(createIndex.bind(null, newFile, {
					title: "Tizen Advanced UI Framework",
					description: "The Web UI framework provides tools, such as widgets, events, effects, and animations, for Web application development. You can leverage these tools by just selecting the required screen elements and creating applications."
				}, [
					{
						file: "widgets/widget_reference.htm",
						name: "Widgets reference",
						namespace: "widgets",
						description: "Full list of widgets"
					},
					{
						file: "class/class_reference.htm",
						name: "Classes reference",
						namespace: "classes",
						description: "Full list of classes"
					}
				]));
				series.push(done);

				grunt.file.write(structureFile, "window.tauDocumentation = " + JSON.stringify(modules) + ";");
				async.series(series);


			}

		}

		this.files.forEach(function (f) {
			f.src.forEach(function (file) {
				files.push(file);
			});
		});
		next = files.pop();
		if (next) {
			parseDox(next);
		}
	});

};
