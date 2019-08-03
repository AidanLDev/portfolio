import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import Tooltip from 'components/Tooltip/Tooltip'

import styles from './Style'

const Card = props => {

  // const [active, setActive] = useState(false);

  // const handleMouseOver = () => setActive(true)

  // const handleMouseLeave = () => setActive(false);

  const transitionStyle = {
    ':hover': {
      width: `calc(${props.imgWidth ? props.imgWidth.toString().concat('px') : '0px'} + 20px)`,
      height: `calc(${props.imgHeight ? props.imgHeight.toString().concat('px') : '0px'} + 20px)`
    }
  }
  
  return (
    <div className={styles.CardWrapper}>
      <h1>{props.title}</h1>
      {props.imgLink
      ? <a
          href={props.imgLinkLocation}
          rel="noopener noreferrer"
          target="_blank"
        >
          
          <img
            src={props.img}
            alt={props.imgAlt}
            width={props.imgWidth}
            height={props.imgHeight}
            style={props.transition ? transitionStyle : null}
            // onMouseOver={handleMouseOver}
            // onMouseLeave={handleMouseLeave}
            /></a>
      : <img
          src={props.img}
          alt={props.imgAlt}
          width={props.imgWidth}
          height={props.imgHeight}
          style={props.transition ? transitionStyle : null}/>
      }
      <Tooltip text={`Click to navigate to ${props.imgAlt}`} active={true}/>
      <br />
      {props.content}
     
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string
}

export default Radium(Card);