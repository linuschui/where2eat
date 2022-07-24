import React, { useState } from 'react'
import fire from "../../fire";
import { Button, List, ListItem, ListItemText, Modal } from '@material-ui/core';
import "./Favourites4.css";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Favourites4(props) {
  const classes = useStyles();
  const db = fire.firestore();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState();

  const handleOpen = () => {
    setOpen(true);
  }

  const updateFavourite = () => {
    db.collection('favourites').doc(props.favourite.id).set({
      favourite: input
    }, {merge: true})
    setOpen(false)
  }

  return (
    <>
    <Modal 
      open={open}
      onClose={e => setOpen(false)}
    >
      <div className={classes.paper}>
        <h1>Modal</h1>
        <input placeholder={props.favourite.favourite} value={input} onChange={e => setInput(e.target.value)} />
        <Button onClick={updateFavourite}>Edit</Button>
      </div>
    </Modal>
    <List>
      <ListItem>
        <ListItemText primary={props.favourite.favourite} secondary="" />
      </ListItem>
      <Button onClick={e => setOpen(true)}>Edit</Button>
      <Button 
        onClick={e => db.collection('favourites').doc(props.favourite.id).delete()}>
          DELETE <i class="fa fa-trash"></i>
      </Button>
    </List>
    </>
  )
}

export default Favourites4