(function (document) {
	var page = document.getElementById("test_inputs_page");
	page.addEventListener("pageshow", function() {
		"use strict";

		var tau = window.tau,
			engine = tau.engine;

		module("profile/tv/widget/TextInput", {
			setup: function () {
				engine.createWidgets(document);
			},
			teardown: function () {
				engine._clearBindings();
			}
		});

		function testInput(id, isDisabled) {
			var input = document.getElementById(id),
				textLine = input.nextSibling;

			//after build
			equal(input.getAttribute("data-tau-bound"), "TextInput", "Input widget is created");
			equal(input.getAttribute("aria-disabled"), isDisabled, "Input widget is enabled");
			ok(input.classList.contains("ui-input-text"), "Input has ui-input-text class");
			ok(input.classList.contains("ui-body-a"), "Input has ui-body-a class");
			//Check if text line was created
			ok(textLine.classList.contains("ui-text-line"), "Text line has ui-text-line class");
		}

		function triggerKeyboardEvent(el, keyCode) {
			var eventObj = document.createEvent("Events");

			if (eventObj.initEvent) {
				eventObj.initEvent("keyup", false, true);
			}

			eventObj.keyCode = keyCode;
			el.dispatchEvent(eventObj);
		}

		test("Input type='text'", function () {
			testInput("in1", "false");
		});

		test("Disabled input type='text'", function () {
			testInput("in1-dis", "true");
		});

		test("Input type='textarea'", function () {
			testInput("in2", "false");
		});

		test("Disabled input type='textarea'", function () {
			testInput("in2-dis", "true");
		});

		test("Input type='password'", function () {
			testInput("in3", "false");
		});

		test("Disabled input type='password'", function () {
			testInput("in3-dis", "true");
		});

		test("Input type='email'", function () {
			testInput("in4", "false");
		});

		test("Disabled input type='email'", function () {
			testInput("in4-dis", "true");
		});

		test("Input type='url'", function () {
			testInput("in5", "false");
		});

		test("Disabled input type='url'", function () {
			testInput("in5-dis", "true");
		});

		test("Input type='tel'", function () {
			testInput("in6", "false");
		});

		test("Disabled input type='tel'", function () {
			testInput("in6-dis", "true");
		});

		test("Input type='number'", function () {
			var input = document.getElementById("in7"),
				wrapper = input.parentNode;

			//after build
			equal(input.getAttribute("data-tau-bound"), "TextInput", "Input widget is created");
			equal(input.getAttribute("aria-disabled"), "false", "Input widget is enabled");
			ok(input.classList.contains("ui-input-text"), "Input has ui-input-text class");
			ok(input.classList.contains("ui-body-a"), "Input has ui-body-a class");
			ok(wrapper.classList.contains("ui-number-input"), "Input wrapper has ui-number-input class");
		});

		test("Disabled input type='number'", function () {
			var input = document.getElementById("in7-dis"),
				wrapper = input.parentNode;

			//after build
			equal(input.getAttribute("data-tau-bound"), "TextInput", "Input widget is created");
			ok(input.classList.contains("ui-input-text"), "Input has ui-input-text class");
			ok(input.classList.contains("ui-body-a"), "Input has ui-body-a class");
			ok(input.classList.contains("ui-disabled"), "Input has ui-disabled class");
			ok(input.classList.contains("tv-textinput-disabled"), "Input has tv-textinput-disabled class");
			ok(input.classList.contains("ui-state-disabled"), "Input has ui-state-disabled class");
			ok(wrapper.classList.contains("ui-number-input"), "Input wrapper has ui-number-input class");
		});

		test("Input type='number' keyup events", function () {
			var input = document.getElementById("in7"),
				wrapper = input.parentNode;

			tau.engine.instanceWidget(input, "TextInput");

			wrapper.addEventListener("focus", function() {
				ok(true, "Focus triggered on parent element");
			}, true);

			//Set input as active element
			input.focus();
			ok(document.activeElement === input, "Input is an active element");

			//Keyup event moves focus from input to wrapper
			window.tau.event.trigger(input, "keyup");
			ok(document.activeElement === wrapper, "Focus moved to a wrapper after keyup");
		});

		test("Input type='number' destroy method", 2, function () {
			var input = document.getElementById("in7"),
				wrapper = input.parentNode,
				instance = tau.engine.instanceWidget(input, "TextInput");

			instance._destroy(input);
			//Set input as active element
			input.focus();
			ok(document.activeElement === input, "Input is an active element");
			//Keyup event doesn't' move focus from input to wrapper because event listener is removed.
			tau.event.trigger(input, "keyup");
			ok(document.activeElement === input, "Input is still active element");
		});

		test("Textarea destroy method", 2, function () {
			var input = document.getElementById("in2"),
				wrapper = input.parentNode,
				instance = tau.engine.instanceWidget(input, "TextInput");

			instance._destroy(input);
			//Set input as active element
			input.focus();
			ok(document.activeElement === input, "Input is an active element");
			//Keyup event doesn't' move focus from input to wrapper because event listener is removed.
			tau.event.trigger(input, "keyup");
			ok(document.activeElement === input, "Input is still active element");
		});

		test("Input type='textarea' keyup event", function () {
			var input = document.getElementById("in2"),
				value,
				linesNumber,
				currentLineNumber;

			//Set input as active element
			input.focus();
			ok(document.activeElement === input, "Input is an active element");
			input.value = "hello \n hello";
			triggerKeyboardEvent(input, 40); //down
			triggerKeyboardEvent(input, 40); //down
			value = input.value;
			linesNumber = value.split("\n").length;
			currentLineNumber = value.substr(0, input.selectionStart).split("\n").length;
			equal(currentLineNumber, 2, "Current line number is 2");

			ok(document.activeElement === input, "Input is an active element");
			triggerKeyboardEvent(input, 38); //up
			triggerKeyboardEvent(input, 38); //up
			ok(document.activeElement === input, "Input is an active element");
			triggerKeyboardEvent(input, 39); //right
			triggerKeyboardEvent(input, 39); //right
			ok(document.activeElement === input, "Input is an active element");
			triggerKeyboardEvent(input, 37); //left
			triggerKeyboardEvent(input, 37); //left
			ok(document.activeElement === input, "Input is an active element");
		});

		test("Input in popup", function () {
			testInput("in-popup", "false");
		});

		test("Input type='number' getLabel, setLabel - label does not exist on startup", function () {
			var input = document.getElementById("in9"),
				widget = window.tau.engine.instanceWidget(input, "TextInput"),
				labelText = "label_text",
				label,
				parentId = "inputParentId";

			equal(widget.getLabel(), null, "Input doesn`t have label");

			widget.setLabel(labelText);

			equal(widget.getLabel(), labelText, "Label added");

			// check if label is put in a proper place
			input.parentElement.id = parentId;
			label = input.parentNode.querySelector("#" + parentId + " > label[for='" + input.id + "']");
			ok(label !== null, "Label is set as a child of input parent");
		});

		test("Input type='number' getLabel, setLabel - label exists on startup", function () {
			var input = document.getElementById("in8"),
				widget = window.tau.engine.instanceWidget(input, "TextInput"),
				labelText = "label_text";

			ok(widget.getLabel() != null, "Input has label");

			widget.setLabel(labelText);

			equal(widget.getLabel(), labelText, "Label properly set");
		});

		test("Input type other than 'number' getLabel, setLabel - label does not exist on startup", function () {
			var input = document.getElementById("in11"),
				widget = window.tau.engine.instanceWidget(input, "TextInput"),
				labelText = "label_text",
				label,
				parentId = "inputParentId";

			equal(widget.getLabel(), null, "Input doesn`t have label");

			widget.setLabel(labelText);

			equal(widget.getLabel(), labelText, "Label added");

			// check if label is put in a proper place
			input.parentElement.id = parentId;
			label = input.parentNode.querySelector("#" + parentId + " > label[for='" + input.id + "']");
			ok(label !== null, "Label is set as a child of input parent");
		});

		test("Input type other than 'number' getLabel, setLabel - label exists on startup", function () {
			var input = document.getElementById("in10"),
				widget = window.tau.engine.instanceWidget(input, "TextInput"),
				labelText = "label_text";

			ok(widget.getLabel() != null, "Input has label");

			widget.setLabel(labelText);

			equal(widget.getLabel(), labelText, "Label properly set");
		});
	});
}(document));
