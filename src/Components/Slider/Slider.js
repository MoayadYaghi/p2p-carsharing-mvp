import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Slider.scss'
import '../../Components/Slider/Slider.scss'

function CarsSlider({ images, text, id, location, price }) {  
  const length = images.length
  const CarLink = '/CarDetails/'
  const [index, setIndex] = useState(0)


  const goLeft = () => {
    const nextIndex = index - 1
    if (nextIndex < 0) {
      setIndex(images.length - 1)
    } else {
      setIndex(nextIndex)
    }
  }

  const goRight = () => {
    setIndex((index + 1) % images.length)
  }

  function clickHandler(input) {
    if (index === 0 && input < 0) {
      setIndex(length - 2)
    } else if (index === 0 && input === -1) {
      setIndex(length)
    } else if (index === 1 && input === -2) {
      setIndex(length - 1)
    } else {
      setIndex((index + input) % length)
    }
  }

  return (
    images.length > 0 && (
      <div className="DESIGNTextField">
        <div className="SliderComplete">
          <div className="leftSideDiv">
            <div className="leftSideDivBlock2">
              {
                <img
                  className="leftSideSliderImage2"
                  alt=""
                  src={
                    index === 0 || index === 1
                      ? index === 0
                        ? require(`../../Assets/Cars${images[length - 2]}`)
                        : require(`../../Assets/Cars${images[length - 1]}`)
                      : require(`../../Assets/Cars${images[index - 2]}`)
                  }
                  onClick={() => clickHandler(-2)}
                />
              }
              {
                <div className="TextDisplay">
                  <div key={index + 2} className="slide">
                    {index === 0 || index === 1
                      ? index === 0
                        ? text[length - 2].substring(0, 12) + '...'
                        : text[length - 1].substring(0, 12) + '...'
                      : text[index - 2].substring(0, 12) + '...'}
                  </div>
                </div>
              }
            </div>
          </div>

          <div className="leftSideDiv">
            <div className="leftSideDivBlock">
              {
                <img
                  className="leftSideSliderImage"
                  alt=""
                  src={
                    index === 0
                      ? length !== 0
                        ? require(`../../Assets/Cars${images[length - 1]}`)
                        : null
                      : require(`../../Assets/Cars${images[index - 1]}`)
                  }
                  onClick={() => clickHandler(-1)}
                />
              }
              {
                <div className="TextDisplay">
                  <div key={index + 2} className="slide">
                    {index === 0
                      ? length !== 0
                        ? text[length - 1].substring(0, 15) + '...'
                        : null
                      : text[index - 1].substring(0, 15) + '...'}
                  </div>
                </div>
              }
            </div>
          </div>

          <div className="flexboxContainer">
            <div className="slider">
              <Link className="slider" to={CarLink + id[index]}>
                <img className="image" alt="" src={require(`../../Assets/Cars${images[index]}`)} />
              </Link>
              <button id="goLeft" onClick={goLeft}>
                <div className="leftButton">{'<'}</div>
              </button>
              <button id="goRight" onClick={goRight}>
                <div className="leftButton">{'>'}</div>
              </button>
            </div>
            <Link className="TextDisplayMiddle" to={CarLink + id[index]}>
              <div key={index} className="slide">
                {text[index]}
              </div>
            </Link>
          </div>

          <div className="rightSidediv">
            {/* <Link className="rightSidedivBlock" to={CarLink + id[(index+1)%length]}> */}
            <div className="rightSidedivBlock">
              {
                <img
                  className="rightSideSliderImage"
                  alt=""
                  src={require(`../../Assets/Cars${images[(index + 1) % length]}`)}
                  onClick={() => clickHandler(1)}
                />
              }
              <div className="TextDisplay">
                <div key={index + 1} className="slide">
                  {text[(index + 1) % length].substring(0, 15) + '...'}
                </div>
              </div>
            </div>
          </div>

          <div className="rechteSeitediv">
            {/* <Link className="rightSidedivBlock2" to={CarLink + id[(index+2)%length]}> */}
            <div className="rightSidedivBlock2">
              {/* {console.log(CarLink + id[(index + 2) % length])} */}
              {
                <img
                  className="rightSideSliderImage2"
                  alt=""
                  src={require(`../../Assets/Cars${images[(index + 2) % length]}`)}                  
                  onClick={() => clickHandler(2)}
                />
              }
              <div className="TextDisplay">
                <div key={index + 2} className="slide">
                  {text[(index + 2) % length].substring(0, 12) + '...'}
                </div>
              </div>
            </div>
            {/*</Link>*/}
          </div>
        </div>
      </div>
    )
  )
}

export default CarsSlider
