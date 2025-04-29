import React from 'react'
import './Case.css'
import logo from '../../images/bg4.png'
// import circle from '../../images/circle.png'
import arrow from '../../images/left-arrows.png'
import { Link } from 'react-router-dom'

export default function Case() {
  return (
    <div className='case-container'>
        <div className='arrow'>
            <Link to='/'>
            <img src={arrow} alt='back'/>
            </Link>
        </div>
        <div className='case-left'>
            <img src={logo} className='case-image' alt='logo'/>
            {/* <img src={circle} className='circle1' alt='circle'/> */}
        </div>
        <div className='case-right'>
            <div className='case-items'>
                <p className='case-title'>Case</p>
                <p className='case-subtitle'>Justice for Sara Saleem: A Fight Against Corruption and Impunity</p>
                <p className='case-text'>
                    Sara Saleem, an Iraqi-American businesswoman, was kidnapped and tortured in 2014 by Iran-backed militias 
                    allegedly acting on behalf of her former business partners—the Nasri brothers—who sought to steal her 
                    $100 million real estate company.
                    <br /><br />
                    Despite their criminal convictions, Iraq's judiciary, led by Supreme Court Chief Justice Faiq Zaidan 
                    (a U.S.-designated "tool of Iranian influence"), is now poised to acquit them in a rigged process.
                    <br /><br />
                    Her case exposes the deep corruption and Iranian infiltration of Iraq's legal system. A landmark 
                    London School of Economics (LSE) report confirms judicial politicization under Zaidan, validating 
                    Sara's claims.
                    <br /><br />
                    <strong>We demand:</strong>
                    <br /><br />
                    • Accountability for those who orchestrated Sara's kidnapping.
                    <br />
                    • Restoration of her stolen assets.
                    <br />
                    • U.S. intervention to uphold justice in Iraq.
                </p>
            </div>
        </div>
    </div>
  )
}
