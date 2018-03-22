import React, { Component } from 'react';


export default class LikeButton extends Component {
    constructor(props) {
        super(props)

        this.state = {
          liked: 'false'
        }
    }

    componentDidMount() {
      console.log(this.state.liked)
    }

    //toggle liked state to true or false
    toggleLike = () => {
        this.setState({
            liked: !this.state.liked
        })
    }

    //onClick save item to favorites
    like = (data) => {
        this.toggleLike()

        fetch('/browse/favs', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => {
            // console.log(name)
            // console.log("POST")
            // console.log(this.state.liked, "after click")
        })
    }

    //onClick remove item from favorites
    unlike = (id) => {
        this.toggleLike()

        fetch(`browse/favs/${id}`, {
                method: 'DELETE',
              })
              .then(res => res.json())
              .then(res => {
                  // console.log('*************');
                  // console.log('DELETE');
                  // console.log(this.state.liked, "after click")
              }).catch(err => console.log(err))

    }

    //if state of liked is false make a POST request else make a DELETE request
    methodHandle = (props) => {
        return  (this.state.liked === 'false') ?
                        this.like(this.props.des)
                        :
                        this.unlike(this.props.id)

    }

    render () {

        // const on = {
        //     background: 'red',
        //     color: 'white',
        //     outline: 'none',
        //     transition: '1s',
        //     cursor: 'pointer'
        // }

        // const off = {
        //     background: 'transparent',
        //     color: 'grey',
        //     outline: 'none',
        //     transition: '1s',
        //     cursor: 'pointer',
        // }

        return (
                <i
                   className={this.state.liked ? "far fa-heart" : "fa fa-heart"}
                   onClick={e => this.methodHandle(this.props)}>
                </i>

          )

    }

}
