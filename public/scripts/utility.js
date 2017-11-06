var utility = (function() {
    function removeAllElements(elementToEmpty) {
        while (elementToEmpty.firstChild) {
            elementToEmpty.removeChild(elementToEmpty.firstChild);
        }
    }

    return {
        createButton: function(buttonText, buttonFunction) {
            var btn = document.createElement("BUTTON");
            var btnText = document.createTextNode(buttonText);
            btn.appendChild(btnText);
            btn.onclick = buttonFunction;
            return btn;
        },

        replaceElements: function(parentElement, replacementElement) {
            removeAllElements(parentElement);
            parentElement.appendChild(replacementElement);
        },

        addToElement: function(originalElementName, elementToAdd) {
            var originalElement = document.getElementById(originalElementName);
            var newElement = document.createElement('div')
            newElement.innerHTML = elementToAdd;
            originalElement.appendChild(newElement);
        }
    }
})();
