import React, {Component} from 'react';
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";
import Card from "@material-ui/core/Card/Card";
import CardActionArea from "@material-ui/core/CardActionArea/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import CardContent from "@material-ui/core/CardContent/CardContent";
import Typography from "@material-ui/core/Typography/Typography";
import CardActions from "@material-ui/core/CardActions/CardActions";

class ItemPage extends Component {
  
  state = {
    form: {
      id: ''
    },
    item: {
      name: '',
      sprite: '',
      id: '',
      text: '',
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
      id: parseInt(this.state.item.id) + 1,
    };
    
    this.search(next)
  };
  
  search = (param) => {
    let that = this;
    fetch(`https://pokeapi.co/api/v2/item/${param.id ? param.id : this.state.form.id}`)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        that.setState({
          item: {
            name: myJson.name,
            text: myJson.effect_entries[0].effect,
            sprite: myJson.sprites.default,
            id: myJson.id,
          }
        });
      });
  };
  
  render() {
    const { name, sprite, text } = this.state.item;
  
    return (
      <>
        <form noValidate autoComplete="off">
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
                  {text}
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

export default ItemPage;