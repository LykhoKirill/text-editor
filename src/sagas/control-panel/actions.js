import { createStandartAction } from "Utils";

export const handleStyleButtonClick = createStandartAction("handleStyleButtonClick", "controlPanel");
export const handleSynonymsButtonClick = createStandartAction("handleSynonymsButtonClick", "controlPanel");
export const handleSelectSynonym = createStandartAction("handleSelectSynonym", "controlPanel");
export const handleCloseSynonymsPopup = createStandartAction("handleCloseSynonymsPopup", "controlPanel");
export const handleCheckStyles = createStandartAction("handleCheckStyles", "controlPanel");
