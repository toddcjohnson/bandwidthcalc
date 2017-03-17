import React, { Component } from 'react';
import { Menu, Segment, Image, Input, Form, Button } from 'semantic-ui-react';

function multiplyBy() {
  const num1 = document.getElementById("firstNumber").value;
  const num2 = document.getElementById("secondNumber").value;
  console.log(num1);
  document.getElementById("result").innerHTML = num1;
}

function divideBy() {
  const num1 = document.getElementById("firstNumber").value;
  const num2 = document.getElementById("secondNumber").value;
  document.getElementById("result").innerHTML = num1 / num2;
}

export default class TestThing extends Component {
  render() {
    return (
      <div>
        <Form>
          1st Number : <Input type="text" id="firstNumber"></Input><br/>
          2nd Number: <Input type="text" id="secondNumber"></Input><br/>
          <Button onClick={multiplyBy} Value="Multiply">Multiply</Button>
          <Button onClick={divideBy} Value="Divide">Divide</Button>
        </Form>
        <p>The Result is : <br/>
          <span id = "result"></span>
        </p>
      </div>
    );
  }
}
