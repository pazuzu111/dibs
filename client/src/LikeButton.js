import React, { Component } from 'react';

export default class LikeButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            liked: false
        }
    }

    componentDidMount() {
        let fav = localStorage.getItem(`${this.props.title}`)

        if(fav == null){fav = false}

        this.setState({
            liked: JSON.parse(fav)
        })
    }

    //toggle liked state to true or false
    toggleLike = (data) => {

        this.setState(prevState => ({
            liked: !prevState.liked
        }),() => {localStorage.setItem(`${this.props.title}`, this.state.liked)})
    }

    //onClick save item to favorites
    like = (data) => {
        this.toggleLike()
        fetch('https://cors-anywhere.herokuapp.com/https://firstdibs.herokuapp.com/browse/favs', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
    }

    //onClick remove item from favorites
    unlike = (id) => {
        this.toggleLike()
        fetch(`https://cors-anywhere.herokuapp.com/https://firstdibs.herokuapp.com/browse/favs/${id}`, {
            method: 'DELETE',
        })
    }

    //if state of liked is false make a POST request else make a DELETE request
    methodHandle = (props) => {
        return  (this.state.liked === false) ?
                    this.like(this.props.des)
                    :
                    this.unlike(this.props.id)
    }

    render () {

        return (
            <i
               className={this.state.liked ? "fa fa-heart fa-2x" : "far fa-heart fa-2x"}
               onClick={e => this.methodHandle(this.props)}>
            </i>
        )
    }
}
