import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import UsersList from "../UsersList";
import { render } from "@testing-library/react";
import listReducer, {listState} from "../../../store/List/_reducer";

function renderWithProviders(ui, { reduxState } = {}) {
    const store = createStore(listReducer, reduxState || listState);
    return render(<Provider store={store}>{ui}</Provider>);
};


test("User List component should be wrapped inside the provider", () => {
    const list = ["50cdbc81-2c8a-47bf-b642-eb7e6562feec", "50cdbc81-2c8a-47bf-b642-eb7e6562feec", "50cdbc81-2c8a-47bf-b642-eb7e6562feec"];
    renderWithProviders(<UsersList />, {
        store: { list }
    });
});