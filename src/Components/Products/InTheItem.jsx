import React from 'react';
import { useParams } from 'react-router-dom';
import Shoes from '../dummyData/shoes.json';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    textAlign: 'center',
    width: '400px',
    margin: '10px',
    overflow: 'hidden',
  },
});

export const InTheItem = () => {
  const { productId } = useParams();
  const classes = useStyle();
  const shoe = Shoes[productId];

  if (!shoe) return <h1>Product not found</h1>;

  return (
    <div className={classes.container}>
      <h4>{shoe.name}</h4>
      <img src={shoe.img} alt="" height={500} />
    </div>
  );
};
