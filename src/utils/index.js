import { createAction } from "redux-actions";

export const createStandartAction = (type, namespace) => createAction(
    type,
    payload => payload,
    () => ({ namespace }),
);

export const stateSetter = prop => (state, { payload }) => ({ ...state, [prop]: payload });
