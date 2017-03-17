import React, { Component } from 'react';
import { Grid, Label, Segment, Container, Input, Table, Statistic } from 'semantic-ui-react'
import MenuBasic from './components/Menu';
//import AppFooter from './components/AppFooter';
//import TestThing from './components/test';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    const nokbps = "-";

    this.state = {
      numberOfPhones: "",
      numberOfPhoneSessions: "",
      numberOfUCSessions: "",
      numberVMSessions: "",
      numberPageSessions: "",
      numberAWCSessions: "",
      numberStandardAgents: "",
      numberMultiAgents: "",
      numberTrunks: "",
      numberOfPhonesBandwidth: nokbps,
      numberOfUCSessionsBandwidth: nokbps,
      numberOfPhoneSessionsBandwidth: nokbps,
      numberVMSessionsBandwidth: nokbps,
      numberPageSessionsBandwidth: nokbps,
      numberStandardAgentsBandwidth: nokbps,
      numberMultiAgentsBandwidth: nokbps,
      numberAWCSessionsBandwidth: nokbps,
      numberTrunksBandwidth: nokbps,
      totalBandwidths: nokbps
      };

      this.calculateBandwidth = this.calculateBandwidth.bind(this);
  }

  calculateTotal = () => {
    var totalKorM;
    var totalBandwidth = (this.state.numberOfPhones*0.02 +
      this.state.numberOfPhoneSessions*90 +
      this.state.numberOfUCSessions*30 +
      this.state.numberVMSessions*100 +
      this.state.numberPageSessions*40 +
      this.state.numberStandardAgents*300 +
      this.state.numberMultiAgents*350 +
      this.state.numberAWCSessions*130 +
      this.state.numberTrunks*100)
      if (totalBandwidth < 1024) {
        totalBandwidth = (totalBandwidth).toFixed(3);
        totalKorM = "Kbps";
      } else {
        totalBandwidth = (totalBandwidth / 1024).toFixed(3);
        totalKorM = "Mbps";
      }

    this.setState({
      totalBandwidths: totalBandwidth,
      totalBandwidthSpeed: totalKorM
    });
  }

//  Calculate the bandwidth as the form is changed
  calculateBandwidth(calcValue, event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
// Create a constant that calculates the bandwidth and updates the state
    const bandwidth = name + 'Bandwidth';
    const bandwidthSpeed = name + 'Speed';
    var bandwidthValue = value * calcValue;
    var speed;


// Calculate if the bandwidth is Kbps or Mbps and add the appropriate tag
    if (bandwidthValue < 1024) {
      bandwidthValue = (bandwidthValue).toFixed(3);
      speed = "Kbps";
    } else {
      bandwidthValue = (bandwidthValue / 1024).toFixed(3);
      speed = "Mbps";
    }

    this.setState({
      [name]: value,
      [bandwidth]: bandwidthValue,
      [bandwidthSpeed]: speed
    }, function () {this.calculateTotal();
      }
    );
  }

  render() {
    return (
      <div className="App">
        <div className="inverted masthead segment">
          <Container><MenuBasic /></Container>
          <Container>
            <Segment raised>
              <h1 className="ui header">UCaaS Bandwidth Calculator</h1>
              <Label color='grey' attached='top right' size="massive">{this.state.totalBandwidths} {this.state.totalBandwidthSpeed}</Label>
              <p className="subspan">Total Estimated Busy Scenario</p>
              <Grid centered>
                <Grid.Column width={14}>
                  <Table singleLine className="very basic compact fixed">
                    <Table.Body>
                      <Table.Row>
                        <Table.Cell width="5"><h4>Total Number of Phones</h4></Table.Cell>
                        <Table.Cell width="3">
                          <Input
                            name='numberOfPhones'
                            value={this.state.numberOfPhones}
                            onChange={(event) => this.calculateBandwidth(.02, event)}
                            type='number'
                            size='mini'
                          />
                        </Table.Cell>
                        <Table.Cell className="center aligned" width="4">
                          <Statistic
                            horizontal
                            size='small'
                            value={this.state.numberOfPhonesBandwidth}
                            label={this.state.numberOfPhonesSpeed}>
                          </Statistic>
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell><h4>Number of Active UC Sessions</h4></Table.Cell>
                        <Table.Cell width="3">
                          <Input
                            name='numberOfUCSessions'
                            value={this.state.numberOfUCSessions}
                            onChange={(event) => this.calculateBandwidth(30, event)}
                            placeholder=''
                            type='number'
                            size='mini' />
                        </Table.Cell>
                        <Table.Cell className="center aligned" width="4">
                          <Statistic
                            horizontal
                            size='small'
                            value={this.state.numberOfUCSessionsBandwidth}
                            label={this.state.numberOfUCSessionsSpeed}>
                          </Statistic>
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell><h4>Number of Active Voice Sessions</h4></Table.Cell>
                        <Table.Cell width="3">
                          <Input
                            name='numberOfPhoneSessions'
                            value={this.state.numberOfPhoneSessions}
                            onChange={event => this.calculateBandwidth(90, event)}
                            placeholder=''
                            type='number'
                            size='mini' />
                        </Table.Cell>
                        <Table.Cell className="center aligned" width="4">
                          <Statistic
                            horizontal
                            size='small'
                            value={this.state.numberOfPhoneSessionsBandwidth}
                            label={this.state.numberOfPhoneSessionsSpeed}>
                          </Statistic>
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell><h4>Simultaneous VM Sessions</h4></Table.Cell>
                        <Table.Cell width="3">
                          <Input
                            name='numberVMSessions'
                            value={this.state.numberVMSessions}
                            onChange={event => this.calculateBandwidth(100, event)}
                            placeholder=''
                            type='number'
                            size='mini' />
                        </Table.Cell>
                        <Table.Cell className="center aligned" width="4">
                          <Statistic
                            horizontal
                            size='small'
                            value={this.state.numberVMSessionsBandwidth}
                            label={this.state.numberVMSessionsSpeed}>
                          </Statistic>
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell><h4>Simultaneous Paging Sessions</h4></Table.Cell>
                        <Table.Cell width="3">
                          <Input
                            name='numberPageSessions'
                            value={this.state.numberPageSessions}
                            onChange={event => this.calculateBandwidth(40, event)}
                            placeholder=''
                            type='number'
                            size='mini' />
                        </Table.Cell>
                        <Table.Cell className="center aligned" width="4">
                          <Statistic
                            horizontal
                            size='small'
                            value={this.state.numberPageSessionsBandwidth}
                            label={this.state.numberPageSessionsSpeed}>
                          </Statistic>
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell><h4>Number of Standard Agents</h4></Table.Cell>
                        <Table.Cell width="3">
                          <Input
                            name='numberStandardAgents'
                            value={this.state.numberStandardAgents}
                            onChange={event => this.calculateBandwidth(300, event)}
                            placeholder=''
                            type='number'
                            size='mini' />
                        </Table.Cell>
                        <Table.Cell className="center aligned" width="4">
                          <Statistic
                            horizontal
                            size='small'
                            value={this.state.numberStandardAgentsBandwidth}
                            label={this.state.numberStandardAgentsSpeed}>
                          </Statistic>
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell><h4>Number of Multimedia Agents</h4></Table.Cell>
                        <Table.Cell width="3">
                          <Input
                            name='numberMultiAgents'
                            value={this.state.numberMultiAgents}
                            onChange={event => this.calculateBandwidth(350, event)}
                            placeholder=''
                            type='number'
                            size='mini' />
                        </Table.Cell>
                        <Table.Cell className="center aligned" width="4">
                          <Statistic
                            horizontal
                            size='small'
                            value={this.state.numberMultiAgentsBandwidth}
                            label={this.state.numberMultiAgentsSpeed}>
                          </Statistic>
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell><h4>Simultaneous AWC Sessions</h4></Table.Cell>
                        <Table.Cell width="3">
                          <Input
                            name='numberAWCSessions'
                            value={this.state.numberAWCSessions}
                            onChange={event => this.calculateBandwidth(130, event)}
                            placeholder=''
                            type='number'
                            size='mini' />
                        </Table.Cell>
                        <Table.Cell className="center aligned" width="4">
                          <Statistic
                            horizontal
                            size='small'
                            value={this.state.numberAWCSessionsBandwidth}
                            label={this.state.numberAWCSessionsSpeed}>
                          </Statistic>
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell><h4>Active Trunks/Lines</h4></Table.Cell>
                        <Table.Cell width="3">
                          <Input
                            name='numberTrunks'
                            value={this.state.numberTrunks}
                            onChange={event => this.calculateBandwidth(100, event)}
                            placeholder=''
                            type='number'
                            size='mini' />
                        </Table.Cell>
                        <Table.Cell className="center aligned" width="4">
                          <Statistic
                            horizontal
                            size='small'
                            value={this.state.numberTrunksBandwidth}
                            label={this.state.numberTrunksSpeed}>
                          </Statistic>
                        </Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table>
                </Grid.Column>
              </Grid>
            </Segment>
          </Container>
        </div>
        <div className="mercy">
          <Container>
            <Grid columns={2} stackable>
              <Grid.Column>
                <Segment raised>
                  <Label color='grey' attached='top right' size="massive">{this.state.numberOfPhonesBandwidth} {this.state.numberOfPhonesSpeed}</Label>
                  <span className="spantitle">Total Number of Phones</span><br/>
                  <span className="subspan">0.02 Kbps per phone</span>
                  <br/><br/>
                  <p>
                    Lorem ipsum dolor sit amet, alterum referrentur ea est, mei at sanctus patrioque vituperata. In populo dissentias vis,
                    in his odio soleat reprehendunt, ex tale error evertitur vim. Sea te elit prodesset, at mel quod maiestatis, eu vix
                    autem dicit nobis. Vel quot erant admodum et, ei pro case malis suavitate. Cu pri duis falli vituperata. Nam nemore dolorem
                    suscipiantur ei. Vis ad elitr probatus, eu sea iusto graece, sed ne dicta legere invenire.
                  </p>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment raised>
                  <Label color='grey' attached='top right' size="massive">{this.state.numberOfUCSessionsBandwidth} {this.state.numberOfUCSessionsSpeed}</Label>
                  <span className="spantitle">Number of Active UC Sessions</span><br/>
                  <span className="subspan">30 Kbps per session</span>
                  <br/><br/>
                  <p>
                    Lorem ipsum dolor sit amet, alterum referrentur ea est, mei at sanctus patrioque vituperata. In populo dissentias vis,
                    in his odio soleat reprehendunt, ex tale error evertitur vim. Sea te elit prodesset, at mel quod maiestatis, eu vix
                    autem dicit nobis. Vel quot erant admodum et, ei pro case malis suavitate. Cu pri duis falli vituperata. Nam nemore dolorem
                    suscipiantur ei. Vis ad elitr probatus, eu sea iusto graece, sed ne dicta legere invenire.
                  </p>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment raised>
                  <Label color='grey' attached='top right' size="massive">{this.state.numberOfPhoneSessionsBandwidth} {this.state.numberOfPhoneSessionsSpeed}</Label>
                  <span className="spantitle">Number of Active Voice Sessions</span><br/>
                  <span className="subspan">90 Kbps per session</span>
                  <br/><br/>
                  <p>
                    Lorem ipsum dolor sit amet, alterum referrentur ea est, mei at sanctus patrioque vituperata. In populo dissentias vis,
                    in his odio soleat reprehendunt, ex tale error evertitur vim. Sea te elit prodesset, at mel quod maiestatis, eu vix
                    autem dicit nobis. Vel quot erant admodum et, ei pro case malis suavitate. Cu pri duis falli vituperata. Nam nemore dolorem
                    suscipiantur ei. Vis ad elitr probatus, eu sea iusto graece, sed ne dicta legere invenire.
                  </p>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment raised>
                  <Label color='grey' attached='top right' size="massive">{this.state.numberVMSessionsBandwidth} {this.state.numberVMSessionsSpeed}</Label>
                  <span className="spantitle">Simultaneous VM Sessions</span><br/>
                  <span className="subspan">100 Kbps per session</span>
                  <br/><br/>
                  <p>
                    Lorem ipsum dolor sit amet, alterum referrentur ea est, mei at sanctus patrioque vituperata. In populo dissentias vis,
                    in his odio soleat reprehendunt, ex tale error evertitur vim. Sea te elit prodesset, at mel quod maiestatis, eu vix
                    autem dicit nobis. Vel quot erant admodum et, ei pro case malis suavitate. Cu pri duis falli vituperata. Nam nemore dolorem
                    suscipiantur ei. Vis ad elitr probatus, eu sea iusto graece, sed ne dicta legere invenire.
                  </p>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment raised>
                  <Label color='grey' attached='top right' size="massive">{this.state.numberPageSessionsBandwidth} {this.state.numberPageSessionsSpeed}</Label>
                  <span className="spantitle">Simultaneous Paging Sessions</span><br/>
                  <span className="subspan">40 Kbps per session</span>
                  <br/><br/>
                  <p>
                    Lorem ipsum dolor sit amet, alterum referrentur ea est, mei at sanctus patrioque vituperata. In populo dissentias vis,
                    in his odio soleat reprehendunt, ex tale error evertitur vim. Sea te elit prodesset, at mel quod maiestatis, eu vix
                    autem dicit nobis. Vel quot erant admodum et, ei pro case malis suavitate. Cu pri duis falli vituperata. Nam nemore dolorem
                    suscipiantur ei. Vis ad elitr probatus, eu sea iusto graece, sed ne dicta legere invenire.
                  </p>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment raised>
                  <Label color='grey' attached='top right' size="massive">{this.state.numberStandardAgentsBandwidth} {this.state.numberStandardAgentsSpeed}</Label>
                  <span className="spantitle">Number of Standard Agents</span><br/>
                  <span className="subspan">300 Kbps per agent</span>
                  <br/><br/>
                  <p>
                    Lorem ipsum dolor sit amet, alterum referrentur ea est, mei at sanctus patrioque vituperata. In populo dissentias vis,
                    in his odio soleat reprehendunt, ex tale error evertitur vim. Sea te elit prodesset, at mel quod maiestatis, eu vix
                    autem dicit nobis. Vel quot erant admodum et, ei pro case malis suavitate. Cu pri duis falli vituperata. Nam nemore dolorem
                    suscipiantur ei. Vis ad elitr probatus, eu sea iusto graece, sed ne dicta legere invenire.
                  </p>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment raised>
                  <Label color='grey' attached='top right' size="massive">{this.state.numberMultiAgentsBandwidth} {this.state.numberMultiAgentsSpeed}</Label>
                  <span className="spantitle">Number of Multimedia Agents</span><br/>
                  <span className="subspan">350 Kbps per agent</span>
                  <br/><br/>
                  <p>
                    Lorem ipsum dolor sit amet, alterum referrentur ea est, mei at sanctus patrioque vituperata. In populo dissentias vis,
                    in his odio soleat reprehendunt, ex tale error evertitur vim. Sea te elit prodesset, at mel quod maiestatis, eu vix
                    autem dicit nobis. Vel quot erant admodum et, ei pro case malis suavitate. Cu pri duis falli vituperata. Nam nemore dolorem
                    suscipiantur ei. Vis ad elitr probatus, eu sea iusto graece, sed ne dicta legere invenire.
                  </p>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment raised>
                  <Label color='grey' attached='top right' size="massive">{this.state.numberAWCSessionsBandwidth} {this.state.numberAWCSessionsSpeed}</Label>
                  <span className="spantitle">Simultaneous AWC Sessions</span><br/>
                  <span className="subspan">130 Kbps per session</span>
                  <br/><br/>
                  <p>
                    Lorem ipsum dolor sit amet, alterum referrentur ea est, mei at sanctus patrioque vituperata. In populo dissentias vis,
                    in his odio soleat reprehendunt, ex tale error evertitur vim. Sea te elit prodesset, at mel quod maiestatis, eu vix
                    autem dicit nobis. Vel quot erant admodum et, ei pro case malis suavitate. Cu pri duis falli vituperata. Nam nemore dolorem
                    suscipiantur ei. Vis ad elitr probatus, eu sea iusto graece, sed ne dicta legere invenire.
                  </p>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment raised>
                  <Label color='grey' attached='top right' size="massive">{this.state.numberTrunksBandwidth} {this.state.numberTrunksSpeed}</Label>
                  <span className="spantitle">Active Trunks/Lines</span><br/>
                  <span className="subspan">100 Kbps per trunk</span>
                  <br/><br/>
                  <p>
                    Lorem ipsum dolor sit amet, alterum referrentur ea est, mei at sanctus patrioque vituperata. In populo dissentias vis,
                    in his odio soleat reprehendunt, ex tale error evertitur vim. Sea te elit prodesset, at mel quod maiestatis, eu vix
                    autem dicit nobis. Vel quot erant admodum et, ei pro case malis suavitate. Cu pri duis falli vituperata. Nam nemore dolorem
                    suscipiantur ei. Vis ad elitr probatus, eu sea iusto graece, sed ne dicta legere invenire.
                  </p>
                </Segment>
              </Grid.Column>
            </Grid>
          </Container>
        </div>
      </div>
    );
  }
}

export default App;
