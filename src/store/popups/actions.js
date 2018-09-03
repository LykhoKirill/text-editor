import { createStandartAction } from "Utils";

const namespace = "popups";

export const showPopup = createStandartAction("showPopup", namespace);
export const hidePopup = createStandartAction("hidePopup", namespace);
