import React from 'react';


import { Paper , Iconbutton, IconButton } from '@material-ui/core'
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { ClassNames } from '@emotion/react';
const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));





    
function Scroll() {
  const [items, setItems] = React.useState(getItems);
  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);
  const classes = useStyles();
  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick =
    (id) =>
    ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id)
      );
    };

  return (
    <ScrollMenu  className={classes.scroll_root} LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {items.map(({ id }) => (
        <Paper
          className={classes.grid_paper}
          itemId={id} // NOTE: itemId is required for track items
          title={id}
          key={id}
          onClick={handleClick(id)}
          selected={isItemSelected(id)}
        />
      ))}
    </ScrollMenu>
  );
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <IconButton>
    <ArrowBackRoundedIcon disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      Left
    </ArrowBackRoundedIcon>
    </IconButton>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <IconButton>
    <ArrowForwardRoundedIcon disabled={isLastItemVisible} onClick={() => scrollNext()}>
      Right
    </ArrowForwardRoundedIcon></IconButton>
  );
}

function Card({ onClick, selected, title, itemId }) {
  const visibility = React.useContext(VisibilityContext);
  const classes = useStyles();
  return (
    <div
    className={classes.scroll_root}
      onClick={() => onClick(visibility)}
      style={{
        width: '160px',
      }}
      tabIndex={0}
    >
      <div className={classes.root}>
        <Paper className={classes.grid_paper} elevation={0}>
            <div>{title}</div>
            <div>visible: {JSON.stringify(!!visibility.isItemVisible(itemId))}</div>
            <div>selected: {JSON.stringify(!!selected)}</div>
        </Paper>
        
      </div>
      <div
        style={{
          height: '200px',
        }}
      />
    </div>
  );
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height:'24vh',
      margin:16,

      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
      scroll_root:{
        height:'24vh',

      },
      grid_paper:{
        height:128,
        width:128,
        border:'1px solid #fff',
        borderRadius:50,
        backgroundColor:'#324234'
      },
    },
  }),
);


export default Scroll;