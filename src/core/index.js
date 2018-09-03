export function setStyling(style) {
    document.execCommand(style, false, null);
}

export function replaceSelectedWord(word) {
    document.execCommand("insertText", false, word);
}


function checkIsSelectionOneWord(selection) {
    if (selection.type !== "Range") return false;
    const selectedText = selection.toString().trim();
    if (RegExp(/[$-/:-?{-~!"^_`[\]]/).test(selectedText) || selectedText.includes(" ")) return false;
    return true;
}

export function getSelectedWord() {
    const selection = document.getSelection();
    const isOneWord = checkIsSelectionOneWord(selection);
    if (!isOneWord) {
        return null;
    }
    return selection.toString().trim();
}

const styles = {
    B: "B",
    I: "I",
    U: "U",
};

const availableStyles = Object.values(styles);

export function getCurrentStyles() {
    const selection = document.getSelection();
    const isOneWord = checkIsSelectionOneWord(selection);
    if (!isOneWord) {
        return null;
    }
    const currentStyles = [];
    const getStyles = (node) => {
        const { parentNode } = node;
        if (parentNode.id !== "textEditor") {
            if (!availableStyles.includes(parentNode.nodeName)) {
                return;
            }
            const currentStyle = styles[parentNode.nodeName];
            if (currentStyles.indexOf(currentStyle) === -1) {
                currentStyles.push(currentStyle);
            }
            getStyles(parentNode);
        }
    };
    getStyles(selection.focusNode);
    return currentStyles;
}
