import userReducer, { userState } from "../../store/User/_reducer";
import { userTypes } from "../../store/User/userTypes";

describe("User reducer", () => {
    let expectedData;
    beforeEach(() => {
        expectedData = {
            firstName: "John",
            lastName: "Doe",
            gender: "Male",
            country: "USA",
            id: "dfe4ac45-abc7-4056-9b5d-07223173ceb2",
            age: 150,
        };
    })
    it("should return the initial state", () => {
        expect(userReducer(undefined, { currentUser: null })).toStrictEqual(userState);
    });
    it("should handle 'SET_USER' action", () => {
        expect(userReducer(undefined, {
            type: userTypes.SET_USER,
            payload: {
                firstName: "John",
                lastName: "Doe",
                gender: "Male",
                country: "USA",
                id: "dfe4ac45-abc7-4056-9b5d-07223173ceb2",
                age: 150,
            },
        })).toStrictEqual({ currentUser: expectedData })
    });
})