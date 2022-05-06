import listReducer, {listState} from "../../store/List/_reducer";
import {listTypes} from "../../store/List/listTypes";

describe("List reducer", () => {
    it("should return the initial state", () => {
        expect(listReducer(undefined, {list:null})).toStrictEqual(listState);
    });
    it("should handle 'SET_LIST' action", () => {
        expect(listReducer(undefined, {
            type:listTypes.SET_LIST,
            payload: ["0d4e4c2d-b0a9-41c0-9824-9b17cada0b1d", "dfe4ac45-abc7-4056-9b5d-07223173ceb2"],
        })).toEqual({list:["0d4e4c2d-b0a9-41c0-9824-9b17cada0b1d", "dfe4ac45-abc7-4056-9b5d-07223173ceb2"]})
    });
})