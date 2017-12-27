var utility = (function() {
	function removeAllElements(elementToEmpty) {
		while (elementToEmpty.firstChild) {
			elementToEmpty.removeChild(elementToEmpty.firstChild);
		}
	}

	return {
		addToElement: function(originalElementName, elementToAdd) {
			var originalElement = document.getElementById(originalElementName);
			var newElement = document.createElement('div')
			newElement.innerHTML = elementToAdd;
			originalElement.appendChild(newElement);
		},

		createButton: function(buttonText, buttonFunction) {
			var btn = document.createElement('BUTTON');
			var btnText = document.createTextNode(buttonText);
			btn.appendChild(btnText);
			btn.onclick = buttonFunction;
			return btn;
		},

		nameCase: function(string) {
			return string
				.replace(/([a-z])([A-Z])/g, '$1 $2')
				.replace(/\b([A-Z]+)([A-Z])([a-z])/, '$1 $2$3')
				.replace(/^./, function(str){ return str.toUpperCase(); });
		},

		replaceElements: function(parentElement, replacementElement) {
			removeAllElements(parentElement);
			parentElement.appendChild(replacementElement);
		}
	};
})();
