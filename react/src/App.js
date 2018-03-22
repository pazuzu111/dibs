import React, { Component } from 'react';
import Items from './Items'
import './App.css';

export default class App extends Component {
  constructor() {
    super()

    this.state = {
        dataLoaded: false,
        data: [],
        item: [],
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
                start: state.start + 10
            }))
        })
    }

    loadMore = () => {
        this.getData()
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


  render() {

    let items = []

        items.push(<Items
                    key={0}
                    dataLoaded={this.state.dataLoaded}
                    data={this.state.data}
                    item={this.state.item}
                    view={this.state.view}
                    showItem={this.showItem}/>)

    let button = (this.state.view !== 'item') ?
                        <button onClick={this.loadMore}> LOAD MORE </button>
                        :
                        <button onClick={this.home}><i class="fas fa-long-arrow-alt-left fa-2x"></i></button>

    return (
        <div>
            <nav>
                <ul>
                    <li><img src='./dibs.png' /></li>
                    <li><button id="favs"><i class="fa fa-heart"></i></button></li>
                </ul>
            </nav>
            <div className="container">
                {items}
            </div>
            {button}
        </div>
    );
  }
}
