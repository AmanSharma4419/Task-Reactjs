import React from "react";

import io from "socket.io-client";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      chat: [],
      message: "",
      username: "",
    };
  }
  toUpdate = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  socket = io("http://localhost:5000/");

  componentDidMount() {
    this.socket.on("init", (data) => {
      this.setState((state) => ({
        chat: [...state.chat, data],
      }));
    });

    this.socket.on("push", (data) => {
      this.setState((state) => ({
        chat: [...state.chat, data],
      }));
    });
  }
  handleClick = (socket) => {
    socket.emit("message", {
      name: this.state.username,
      des: this.state.message,
    });
  };
  render() {
    return (
      <div className="App">
        {this.state.chat[0] &&
          this.state.chat[0].messages.map((val, index) => {
            return (
              <>
                <h1>{val.content}</h1>
                <h2>{val.name}</h2>
              </>
            );
          })}

        <input
          type="text"
          placeholder="entername"
          name="username"
          value={this.state.username}
          onChange={this.toUpdate}
          className="input"
        />
        <input
          type="text"
          placeholder="message"
          name="message"
          value={this.state.message}
          onChange={this.toUpdate}
          className="input"
        />
        <button
          onClick={() => {
            this.handleClick(this.socket);
          }}
        >
          click
        </button>
      </div>
    );
  }
}

export default App;
