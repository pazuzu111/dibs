import React, { Component } from 'react';
import Items from './Items';
import Favorites from './Favorites';

import './App.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      dataLoaded: false,
      data: [],
      item: [],
      favs: [],
      view: '',
      start: 0,
    };
  }

  componentDidMount() {
    this.getData();
  }

  home = () => {
    this.setState({ view: '' });
  };

  getData = () => {
    fetch(`https://firstdibs.herokuapp.com/browse/?start=${this.state.start}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState((state) => ({
          data: [...state.data, ...res.items],
          dataLoaded: true,
          start: state.start + 12,
        }));
      });
  };

  showItem = (id) => {
    fetch(`https://firstdibs.herokuapp.com/item/${id}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          item: res,
          view: 'item',
        });
      });
  };

  showFavs = () => {
    fetch(`https://firstdibs.herokuapp.com/browse/favs`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          favs: res,
          view: 'favs',
        });
      });
  };

  render() {
    return (
      <div>
        <nav>
          <ul>
            <li onClick={this.home}>
              <img id="diblogo" src="../dibs.png" alt="diblogo" />
            </li>
            <li>
              <button id="favs" onClick={this.showFavs}>
                <i className="fa fa-heart"></i>
              </button>
            </li>
          </ul>
        </nav>

        <div className="container">
          {this.state.view === 'favs' ? (
            <Favorites
              favs={this.state.favs}
              showFavs={this.showFavs}
              view={this.state.view}
            />
          ) : (
            <Items
              key={0}
              dataLoaded={this.state.dataLoaded}
              data={this.state.data}
              item={this.state.item}
              view={this.state.view}
              showItem={this.showItem}
              showFavs={this.showFavs}
            />
          )}
        </div>
        {this.state.view !== 'item' && this.state.view !== 'favs' ? (
          <button onClick={this.getData}> LOAD MORE </button>
        ) : (
          <button onClick={this.home}>
            <i className="fas fa-long-arrow-alt-left fa-2x"></i>
          </button>
        )}
      </div>
    );
  }
}
