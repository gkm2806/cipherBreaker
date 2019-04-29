import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Input from '@material-ui/core/Input'
import Typography from '@material-ui/core/Typography';

import { questoes } from "./questoes"
import { bullshits } from "./questoes"
import { watcher } from "./pointWatcher"

class SimpleDialog extends React.Component {
  state = {
    random: 1,
    bullShitIndex: 0
  }
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };
  mudaEssaPorra = () => {
    var i = parseInt((Math.random() * 100) / 10, 10)
    var b = Math.floor(Math.random() * bullshits.length)
    this.setState({
      random: i,
      bullShitIndex: b
    })
  }
  handleListItemClick = value => {
    this.props.onClose(value);
  };
  handlePress = () => {
    if (this.state.input == questoes[this.state.random].resposta) {
      this.props.ok()
    } else {
      this.props.nao()
    }
    this.handleClose()
    this.mudaEssaPorra()
  }
  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;

    return (
      <Dialog aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title">{bullshits[this.state.bullShitIndex]}</DialogTitle>
        <br />
        <div style={{ padding: "0.8em" }}>
          <Typography variant="subtitle1">{questoes[this.state.random].tipo}</Typography>
          <p>{questoes[this.state.random].cripta}</p>
          <Input onChange={(e) => { this.setState({ input: e.target.value }) }} placeholder="mensagem"></Input>
          <Button onClick={this.handlePress}> Ok </Button>
        </div>
      </Dialog>
    );
  }
}
SimpleDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
};

const SimpleDialogWrapped = SimpleDialog;

class SimpleDialogDemo extends React.Component {
  state = {
    open: false,
    input: ""
  };
  componentWillReceiveProps() {
    watcher(this.props.clicks) && this.callOpenner()
  }

  callOpenner = () => {
    this.props.addClick()
    this.handleClickOpen()
  }

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = value => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div>
        {
          //<Button onClick={this.handleClickOpen}> alo </Button>
        }
        <SimpleDialogWrapped
          nao={this.props.nao}
          ok={this.props.ok}
          handlePress={this.handleClass}
          open={this.state.open}
          onClose={this.handleClose}
        />
      </div>
    );
  }
}

export default SimpleDialogDemo;