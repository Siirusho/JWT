import React from "react";
import HomePage from "../HomePage";
import { render } from "@testing-library/react";
import listReducer, {listState} from "../../../store/List/_reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";

function renderWithProviders(ui, { reduxState } = {}) {
    const store = createStore(listReducer, reduxState || listState);
    return render(<Provider store={store}>{ui}</Provider>);
};


describe("Home page", () => {
    it("should render correct HomePage component and match with snapshot", () => {
        const { asFragment } = renderWithProviders(<HomePage />);
        expect(asFragment(<HomePage />)).toMatchSnapshot();
    })
});