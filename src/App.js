import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  state = {
    form: {
      id: ''
    },
    pokemon: {
      name: '',
      sprite: '',
    }
  };
  
  handleChange = (e) => {
    // e.preventDefault();
    const { value } = e.target;
    this.setState({
      form: {
        id: value,
      }
    })
  };
  
  search = () => {
    let that = this;
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.form.id}`)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        that.setState({
          pokemon: {
            name: myJson.name,
            sprite: myJson.sprites.front_default
          }
        })
      });
  }
  
  render() {
    
    const { name, sprite } = this.state.pokemon;
    
    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <IconButton  color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" >
              Pokedex
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          <a href="https://fontmeme.com/pokemon-font/"><img src="https://fontmeme.com/permalink/190424/fa6a7341a255fa8880557289cc2a2708.png" alt="pokemon-font" border="0"></a>
        <Paper className="content">
          <form  noValidate autoComplete="off">
            <div className="form-control">
              <TextField
                id="standard-name"
                label="Name"
                value={this.state.form.id}
                onChange={this.handleChange}
                margin="normal"
              />
              <Button
                variant="contained"
                color="primary"
                className="button"
                onClick={this.search}
              >
                Search
              </Button>
            </div>
          </form>
          
          
          <section className="pokemon-container">
  
            <Card className="card">
              <CardActionArea>
                <CardMedia
                  className="media"
                  image={sprite}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {name}
                  </Typography>
                  <Typography component="p">
                    ????
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </section>
        </Paper>
        </main>
      </div>
    );
  }
}

export default App;
