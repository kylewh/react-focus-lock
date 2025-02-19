import React, {Component} from "react";
import FocusLock from "../src/index";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  fontSize: "16px"
};

const bg = {
  backgroundColor: '#FEE'
};

class Trap extends Component {
  state = {
    disabled: true
  }

  toggle = () => this.setState({disabled: !this.state.disabled});

  render() {
    const {disabled} = this.state;
    return (
      <FocusLock disabled={this.state.disabled}>
        {disabled && <div>
          ! this is a <b>real trap</b>.<br/>
          We will steal your focus ! <br /><br />
          <button onClick={this.toggle}>!ACTIVATE THE TRAP!</button>
          <br />
          <br />
        </div>
        }
        You will cycle over this. Never leaving <br/>
        <input placeholder="input1"/>

        <iframe src="/" style={{width:'100%', height: '60%'}}/>

        <input placeholder="input2"/>

        { !disabled && <div>
          <br /><br />PRESS this to end the trial.<br/><br/>
          <button onClick={this.toggle}>ESCAPE!!!</button>
          <br/>
          All your focus belongs to us!
        </div>}
      </FocusLock>
    )
  }
}

const App = () =>
  <div style={styles}>
    <input placeholder="input1"/>
    <div style={bg}> Inaccessible <a href='#'>Link</a> outside</div>
    <Trap />
    <div style={bg}> Inaccessible <a href='#'>Link</a> outside</div>
    <input placeholder="input1"/>
  </div>;

export default App;