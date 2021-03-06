import React from "react";
import {create}  from "react-test-renderer"
import ProfileStatus from "./ProfileStatus";

describe("Profile status component", () => {
    test("status from props should be in state", () =>{
        const component = create(<ProfileStatus status={"test component"}/>)
        const instance = component.getInstance();
        expect(instance.state.status).toBe("test component")
    })
})