import React from 'react'
import divina from '../../pages/images/divina.jpg'
import princi from '../../pages/images/principito.jpg'
import levedad from '../../pages/images/levedad.jpg'
import styles from './auxi.css'
class Card extends React.Component{
    render(){
        return(
                <div className="row">
                <div className="col-sm">
                    <div className="card">
                    <img src={divina} width="250px"></img>
                        <div className="info">
                            <h4>
                                La divina comedia
                            </h4>
                            <p> author: Dante </p>
                            <p> pages: 850 </p>
                            <p> price: $35 </p>
                            <p> stock: 4 </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm">
                    <div className="card">
                        <img src={princi} width="250px" className="float-right"></img>
                        <div className="info">
                        <h4>
                            El principito
                        </h4>
                        <p> author: Antoine </p>
                        <p> pages: 220 </p>
                        <p> price: $5 </p>
                        <p> stock: 15 </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm">
                    <div className="card">
                        <img src={levedad} width="280px"></img>
                        <div className="info">
                            <h4>
                                La insoportable levedad del ser
                            </h4>
                            <p> author: Milan Kundera </p>
                            <p> pages: 400 </p>
                            <p> price: $20 </p>
                            <p> stock: 1 </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card