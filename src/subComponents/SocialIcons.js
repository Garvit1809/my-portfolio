import React from 'react'
import { NavLink } from 'react-router-dom'
import { Github, GoogleScholar, LinkedIn, Twitter } from '../components/AIISvgs'
import styled from 'styled-components'
import { darkTheme } from '../components/Themes'
import { motion } from 'framer-motion'


const Icons = styled.div`
display: flex;
flex-direction: column;
align-items: center;

// position: absolute;
position: fixed;
bottom: 0;
left: 2rem;
z-index: 3;
/* transform: scale(1); */

&>*:not(last-child){
    margin: 0.5rem 0;
}

svg{
    transition: all 0.2s ease;
    &:hover{
        transform: scale(1.4);
    }

    &:active{
        transform: scale(0.9);
    }
}
`

const Line = styled(motion.span)`
width: 2px;
height: 8rem;
background-color: ${props => props.color === 'dark' ? darkTheme.text : darkTheme.body};
`

const SocialIcons = (props) => {
    return (
        <Icons>
            <motion.div
                initial={{ transform: "scale(0)" }}
                animate={{ scale: [0, 1, 1, 5, 1] }}
                transition={{ type: 'spring', duration: 1, delay: 1 }}
            >
                <NavLink style={{ color: 'inherit' }} target="_blank" to={{ pathname: "//scholar.google.com/citations?user=JHbcUFgAAAAJ" }}>
                    {/* <Github width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body} /> */}
                    <GoogleScholar width={29} height={29} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body} />
                </NavLink>
            </motion.div>
            <motion.div
                initial={{ transform: "scale(0)" }}
                animate={{ scale: [0, 1, 1, 5, 1] }}
                transition={{ type: 'spring', duration: 1, delay: 1.2 }}
            >
                <NavLink style={{ color: 'inherit' }} target="_blank" to={{ pathname: "//www.linkedin.com/in/yash-pratap-singh-879181212/" }}>
                    <LinkedIn width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body} />
                </NavLink>
            </motion.div>
            <motion.div
                initial={{ transform: "scale(0)" }}
                animate={{ scale: [0, 1, 1, 5, 1] }}
                transition={{ type: 'spring', duration: 1, delay: 1.4 }}
            >
                <NavLink style={{ color: 'inherit' }} target="_blank" to={{ pathname: "//twitter.com/Yash92122071" }}>
                    <Twitter width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body} />
                </NavLink>
            </motion.div>

            <Line color={props.theme}
                initial={{ height: 0 }}
                animate={{ height: '8rem' }}
                transition={{ type: 'spring', duration: 1, delay: 0.8 }}
            />
        </Icons>
    )
}

export default SocialIcons
