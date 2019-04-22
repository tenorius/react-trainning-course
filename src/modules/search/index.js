import React, { Component } from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Background from "../common/components/layout/Background";
import Content from "../common/components/layout/Content";
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import Typography from "@material-ui/core/Typography";
import PokemonCard from "../common/components/PokemonCard";
import PokemonCardList from "../common/components/PokemonCardList";
import { connect } from 'react-redux';
import { operations } from './ducks/searchDuck';

const Styled = {};
Styled.SearchContainer = styled.div`
  background-color: ${props => props.theme.palette.background.default};
  padding: 16px;
  margin-bottom: 1.5rem;

`;

Styled.SearchInput = styled(TextField)`
  flex: 1!important;
`;

Styled.SearchButton = styled(Button)`
  flex: none;
  height: 56px;
  color: white;
  margin: 4px 0 0 8px!important;
`;

Styled.PaginationButton = styled.a`
  text-align: center;
  flex: 1 1 33%;
  text-decoration: underline;
  color: ${props => props.theme.palette.text.secondary};

`;

Styled.PaginationContainer = styled(Grid)`
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  
  p{
    color: ${props => props.theme.palette.text.secondary};
    font-size: 0.8rem;
    margin: 0;
  }
  
  
`;

const PaginationComponent = (
  <Styled.PaginationContainer container justify="space-around">
    <Styled.PaginationButton  color="secondary" size="small">
      Previous
    </Styled.PaginationButton>
    <p>
      1 - 20
    </p>
    <Styled.PaginationButton  color="secondary" size="small">
      Next
    </Styled.PaginationButton>
  </Styled.PaginationContainer>
);

class Index extends Component {
  
  state = {
    searchInput: {
      value: '',
      type: 'text',
      label: 'Name or ID',
    },
    searchType: 'pokemon',
  };
  
  componentDidMount() {
  
  }
  
  handleSearchInput = (event) => {
    const { value } = event.target;
    this.setState( prevState => ({
      ...prevState,
        searchInput: {
          ...prevState.searchInput,
          value: value
        }
      })
    )
  };
  
  search = (e) => {
    e.preventDefault();
    this.props.searchByPokemonRequest(this.state.searchInput.value, this.state.searchType)
  };
  
  render() {
    return (
      <>
        {/*<Background/>*/}
        <Content>
          <Styled.SearchContainer>
            <form noValidate onSubmit={this.search} autoComplete="off">
              <Grid
                container
                direction="row"
                justify=""
                alignItems="center"
              >
                <Styled.SearchInput
                  id="outlined-name"
                  label="Name or ID"
                  value={this.state.searchInput.value}
                  onChange={this.handleSearchInput}
                  margin="normal"
                  variant="outlined"
                />
                <Styled.SearchButton
                  onClick={this.search}
                  variant="contained"
                  color="secondary"
                >
                  <SearchIcon />
                </Styled.SearchButton>
                <Styled.SearchButton variant="contained" color="primary">
                  <MoreVertIcon />
                </Styled.SearchButton>
              </Grid>
              <Typography variant="body2" color="textSecondary">
                Use the Advanced Search to explore Pokémon by type, weakness, Ability, and more!
              </Typography>
            </form>
          </Styled.SearchContainer>
          {PaginationComponent}
          <PokemonCardList>
            {this.props.search.results.map((id)=>(
              <PokemonCard id={id} key={id}/>
            ))}
          </PokemonCardList>
          {PaginationComponent}
        </Content>
      </>
    );
  }
}


function mapStateToProps(state) {
  return {
    search: state.search,
  };
}
const actions = { ...operations };

export default connect(mapStateToProps, actions)(Index);

