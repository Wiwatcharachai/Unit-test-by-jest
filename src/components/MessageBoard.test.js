import {render, screen, fireEvent} from "@testing-library/react"
import MessageBoard from "./MessageBoard"

test("Message board should work correctly", () => {
    // BDD
    //Given
    render(<MessageBoard />);

    //Select "Sumit buttom"
    let submitButton = screen.getByText("Submit");

    //Select "Input"
    let messageInput = screen.getByPlaceholderText("Enter Message here");

    //When
    //Type text into input
    fireEvent.change(messageInput, { target: { value: "Hello"}});

    // Click "Submit"
    fireEvent.click(submitButton);

    //Then
    let helloMessage = screen.getByText("Hello");
    expect(helloMessage).toBeInTheDocument();


});