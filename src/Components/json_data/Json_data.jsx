import React from 'react'
import Data from './data.json'

const JsonData = () => {
    return (
        <>
            {
                Data.map ( ( items, key ) => {
                    const { Name, Position } = items
                    return (
                        <div key={ key }>
                            <h2> { Name } </h2>
                            <p>{ Position }</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default JsonData