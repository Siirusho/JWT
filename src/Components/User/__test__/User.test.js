import React from "react";
import User from "../User";
import { render } from "@testing-library/react";

describe("User Component", () => {
    it("Should render current user info", () => {
        const userId = "50cdbc81-2c8a-47bf-b642-eb7e6562feec";
        const { asFragment } = render(<User userId={userId} />);
        expect(asFragment(<User userId={userId} />));
    });
})