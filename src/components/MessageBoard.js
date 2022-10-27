import { useState } from "react";

function MessageBoard() {
  const [inputMessage, setInputMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const addTodoList = (e) => {
    setInputMessage(e.target.value);
  };

  const addButtonList = (e) => {
    const newMessageList = [...messageList, inputMessage];
    if (e.target.value !== inputMessage) setMessageList(newMessageList);
    setInputMessage(() => "");
  };

  const addDeleteButton = (index) => {
    let temp = [...messageList];
    temp.splice(index, 1);
    setMessageList(temp);
  };

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label htmlFor="message-text" hidden>
          Message
        </label>
        <input
          id="message-text"
          name="message-text"
          type="text"
          placeholder="Enter message here"
          value={inputMessage}
          onChange={addTodoList}
        />
        <button className="submit-message-button" onClick={addButtonList}>
          Submit
        </button>
      </div>
      {messageList.map((message, index) => {
        return (
          <div key={index} className="board">
            <div className="message">
              <h1>{message}</h1>
              <button
                className="delete-button"
                onClick={() => addDeleteButton(index)}
              >
                x
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MessageBoard;
