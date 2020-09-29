import React from 'react'
import exerciseImg from '../images/c1.png'
import state1Img from '../images/state1.png'
import './styles/Card.css'
class Card extends React.Component {

    constructor(props){
       super(props)
       this.state = {
           image: state1Img
       }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                image: exerciseImg
            })
        },5000)
    }

    render(){
        const { title, description, img, leftColor, rightColor } = this.props
        return (
            <div className="card mx-auto Fitness-Card"
            style={{
                background: `linear-gradient(to right, ${leftColor}, ${rightColor})`
            }}
            >
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={this.state.image} className="float-right"/>
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>    
        )
    }
}

export default Card