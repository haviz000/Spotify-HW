import React from 'react';
import { render, screen } from "@testing-library/react";
import Tracks from './index';

it("render tracks page", () => {
    render(<Tracks/>);
    const track = screen.getByTestId("track");
    expect(track).toBeInTheDocument();
})
