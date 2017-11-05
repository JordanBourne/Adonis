function createButton(buttonText, buttonFunction) {
    var btn = document.createElement("BUTTON");
    var btnText = document.createTextNode(buttonText);
    btn.appendChild(btnText);
    btn.onclick = buttonFunction;
    return btn;
}

function removeAllElements(elementToEmpty) {
    while (elementToEmpty.firstChild) {
        elementToEmpty.removeChild(elementToEmpty.firstChild);
    }
}

function replaceElements(parentElement, replacementElement) {
    removeAllElements(parentElement);
    parentElement.appendChild(replacementElement);
}
