import React from "react";
import './Omnitrix.css';
import Alien0 from './Imagenes/1.png'
import Alien1 from './Imagenes/2.png'
import Alien2 from './Imagenes/3.png'
import Alien3 from './Imagenes/4.png'
import Alien4 from './Imagenes/5.png'
import Alien5 from './Imagenes/6.png'
import Alien6 from './Imagenes/7.png'
import Alien7 from './Imagenes/8.png'
import Alien8 from './Imagenes/9.png'
import Alien9 from './Imagenes/10.png'
import Seleccion from './Sonido/Seleccion.mp3'

const Omnitrix = () => {

    var index = 0;
    var audio = new Audio(Seleccion);


    let Aliens = [Alien1, Alien2, Alien3, Alien4, Alien5, Alien6, Alien7, Alien8, Alien9, Alien0];

    
    const Foward = () =>{

        index = index + 1;
        audio.play()

        if(index > 9)
        {
            index = 0;
        }
        
        document.getElementById("0").src = Aliens[index]

        console.log(index)
    }

    const Backward = () =>{

        index = index - 1;
        audio.play()

        if(index < 0)
        {
            index = 9;
        }
        
        document.getElementById("0").src = Aliens[index]

        console.log(index)
    }


    return (
        <div className="omnitrix">
        <div className="frame">
            <div className="dial">
                <div className="ring">
                    <img id= "0" className="Aliens" src={Aliens[index]} alt=''></img>
                    <button onClick={Foward} id="1" className="d-left"></button>
                    <button onClick={Backward} id= "2" className="d-right"></button>
                </div>
            </div>
            <div className="hor-sideroll">
                <div className="sideroll-in"></div>
            </div>
            <div className="ver-sideroll"></div>
            <div className="outer-case">
                <div className="covering"></div>
            </div>
        </div>
    </div>
    );
  }
  
  export default Omnitrix;
  