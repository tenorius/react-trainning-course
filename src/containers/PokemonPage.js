import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


class PokemonPage extends Component {
  
  state = {
    form: {
      id: ''
    },
    pokemon: {
      name: '',
      sprite: '',
      id: '',
      flavorText: '',
      type: ''
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
  
  getNext = () => {
    let next = {
      id: parseInt(this.state.pokemon.id) + 1,
    };
    
    this.search(next)
  };
  
  search = (param) => {
    let that = this;
    fetch(`https://pokeapi.co/api/v2/pokemon/${param.id ? param.id : this.state.form.id}`)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        that.setState({
          pokemon: {
            name: myJson.name,
            sprite: myJson.sprites.front_default,
            id: myJson.id,
            type: myJson.types[0].type.name
          }
        });
        
        that.getFlavorText();
      });
  };
  
  getFlavorText = () => {
    const that = this;
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${this.state.pokemon.id}`)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        that.setState(prevState => ({
          pokemon: {
            ...prevState.pokemon,
            flavorText: myJson.flavor_text_entries.filter((flavorTextObject)=>(flavorTextObject.language.name === 'en'))[0].flavor_text
          }
        }))
      });
  };
  
  render() {
    
    const { name, sprite } = this.state.pokemon;
    
    return (
        <>
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
                    {this.state.pokemon.flavorText}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions style={{justifyContent: 'space-around'}}>
                <Button size="small" color="primary">
                  previous
                </Button>
                <Button size="small" color="primary" onClick={this.getNext}>
                  next
                </Button>
              </CardActions>
            </Card>
          </section>
        </>
    );
  }
}

export default PokemonPage;
