import React from "react";
import RightBar from "../RightBar";
import { render } from "@testing-library/react";


describe("Right side bar", () => {
    it("should render correct RightBar component and match with snapshot", () => {
        const { asFragment } = render(<RightBar />);
        expect(asFragment(<RightBar />)).toMatchSnapshot();
    })
});