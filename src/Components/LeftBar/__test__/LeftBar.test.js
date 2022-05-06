import React from "react";
import LeftBar from "../LeftBar";
import { render } from "@testing-library/react";


describe("Left side bar", () => {
    it("should render correct LeftBar component and match with snapshot", () => {
        const { asFragment } = render(<LeftBar />);
        expect(asFragment(<LeftBar />)).toMatchSnapshot();
    })
});