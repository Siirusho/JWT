import React from "react";
import Loading from "../Loading";
import { render } from "@testing-library/react";


describe("Loading component", () => {
    it("should render correct Loading component and match with snapshot", () => {
        const { asFragment } = render(<Loading />);
        expect(asFragment(<Loading />)).toMatchSnapshot();
    })
});