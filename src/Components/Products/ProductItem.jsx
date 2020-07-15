import React from 'react'
import { Link } from 'react-router-dom'
import Shoes from '../dummyData/shoes.json'
import { makeStyles } from '@material-ui/core'

const useStyle = makeStyles({
    container:{
        display: "flex",
        flexWrap: "wrap",
    },
    link: {
        margin: 10,
        textAlign: 'center'
    }

    
})

export const ProductItem = () => {
    const classes = useStyle()

    return (
        <div>
           <h1>Welcome to Products </h1>
            <div className={classes.container}>
                {Object.keys(Shoes).map((keyName)=> {
                    const shoe = Shoes[keyName]
                    return(
                        <Link className={classes.link} key={keyName} to={`/products/${keyName}`}>
                            <h4>{shoe.name}</h4>
                            <img src={shoe.img} height={150} alt=''></img>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
