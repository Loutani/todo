import React from 'react'

import PropTypes from "prop-types"

import './typography.css'

/**
 * Componet for render the typography with its className and childrens
 * 
 * @component
 * 
 * @param {object} props containt all the typography props
 * @param {string} props.varient the typography name
 * @param {string} props.classname the class prop for the typography
 * @param {string|React.ReactElement}
 * @returns {React.ReactElement}
 * 
 * @example
 * 
 * const varient = 'h1'
 * const classname = 'typography-class'
 * const children = 'typography content as text'
 * 
 * return (
 *  <Typography varient={varient} classname={classname}>
 *      {children}
 *  </Typography>
 * )
 * 
 */
function Typography({varient = '', classname = '', children = ''}) {
    const VarientTag = varient

    return (
        <VarientTag className={classname}>
            {children}
        </VarientTag>
    )
}

Typography.propTypes = {
    /**
     * Typography type
     */
    varient: PropTypes.string.isRequired,
    /**
     * Tyopgraphy className
     */
    classname: PropTypes.string,
    /**
     * Typography children
     */
    children: PropTypes.string
}

Typography.defaultProps = {
    classname: '',
    children: ''
}

export default Typography