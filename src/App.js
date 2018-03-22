import React, { Component } from 'react';
import Items from './Items'
import Favorites from './Favorites'

import './App.css';

export default class App extends Component {
  constructor() {
    super()

    this.state = {
        dataLoaded: false,
        data: [],
        item: [],
        favs: [],
        view: '',
        start: 0
    }
  }

    componentDidMount() {
        this.getData()
    }


    home = () => {this.setState({view: ''})}

    getData = () => {

        fetch(`/browse/?start=${this.state.start}`)
        .then(res => res.json())
        .then(res => {
            this.setState(state => ({
                data: [...state.data, ...res.items],
                dataLoaded: true,
                start: state.start + 12
            }))
        })
    }

    showItem = (id) => {
        fetch(`/item/${id}`)
        .then(res => res.json())
        .then(res => {
            this.setState({
                item: res,
                view: 'item'
            })
        })
    }

    showFavs = () => {
        fetch(`/browse/favs`)
        .then(res => res.json())
        .then(res => {
            this.setState({
                favs: res,
                view: 'favs'
            })
        })
    }


  render() {

    let items = []

        items.push(<Items
                    key={0}
                    dataLoaded={this.state.dataLoaded}
                    data={this.state.data}
                    item={this.state.item}
                    view={this.state.view}
                    showItem={this.showItem}
                    showFavs={this.showFavs}/>)

    let button = ((this.state.view !== 'item') && (this.state.view !== 'favs')) ?
                        <button onClick={this.getData}> LOAD MORE </button>
                        :
                        <button onClick={this.home}><i className="fas fa-long-arrow-alt-left fa-2x"></i></button>

    let renderPage = this.state.view === 'favs' ?
                        <Favorites favs={this.state.favs} showFavs={this.showFavs} />
                        :
                        items
    return (
        <div>
            <nav>
                <ul>
                    <li onClick={this.home}><img id="diblogo" src='./dibs.png' alt='diblogo' /></li>
                    <li><button id="favs" onClick={this.showFavs}><i className="fa fa-heart"></i></button></li>
                </ul>
            </nav>
            <div className="container">
                {renderPage}
            </div>
            {button}
        </div>
    );
  }
}
