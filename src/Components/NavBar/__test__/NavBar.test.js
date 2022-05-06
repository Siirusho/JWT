import React from "react";
import NavBar from "../NavBar";
import { render } from "@testing-library/react";


describe("NavBar", () => {
    it("should render correct NavBar component and match with snapshot", () => {
        const { asFragment } = render(<NavBar />);
        expect(asFragment(<NavBar />)).toMatchSnapshot();
    })
});