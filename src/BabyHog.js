import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import normalBaby from './assets/unadulterated-hoglette.png'
import SunBaby from './assets/sun-eyes.png'
import BlueBaby from './assets/blue-eyes.png'
import GlowingBaby from './assets/glowing-eyes.png'

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

export default class BabyHog extends Component {

    state = {
      weight: 0,
      eyeColorMapper: {
        blue: BlueBaby,
        sun: SunBaby,
        glowing: GlowingBaby
      },
      height: 200
    }

  changeWeight = (e) => {
    // nothing needs to change here
    const newWeight = e.target.name === "+" ? (this.state.weight + 10) : (this.state.weight - 10)
    this.setState({
      weight: newWeight
    })
  }

  changeSize = (e) => {
    let newHeight = e.target.name === "+" ? (this.state.height + 10) : (this.state.height - 10)
    this.setState({
      height: newHeight
    })
  }


  render() {
    const height = this.state.height + 'px'
    const baby = this.props.offspring
    return (
      <li className="hogbabies">
        <h1>Name: {baby.name}</h1>
        <h3>Weight: {this.state.weight} </h3>
        <h3>Hobby: {baby.hobby}</h3>
        <h4>Eye Color: {this.props.eyeColor}</h4>

        <Button onClick={(event) => {
            this.changeWeight(event)
            this.changeSize(event)
          }} name="+">
          Increase Weight
        </Button>
        <Button onClick={(event) => {
            this.changeWeight(event)
            this.changeSize(event)
          }}name="-">
          Decrease Weight
        </Button>

        <div className="hb-wrap">
          <img src={this.state.eyeColorMapper[this.props.eyeColor]} style={{height: height }} alt="MasterBlasterJrJr" />
        </div>

      </li>
    )
  }
}
