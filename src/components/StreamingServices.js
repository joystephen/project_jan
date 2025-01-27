import React from "react";
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import { makeStyles } from '@material-ui/core/styles';
import netflixLogo from "../assests/logos/Netflix.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));


const streamingServices = [
  { name: "Netflix", logo: netflixLogo},
  { name: "Amazon Prime Video", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png" },
  { name: "Disney+", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg" },
  { name: "Hulu", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg" },
  { name: "HBO Max", logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg" },
  { name: "Apple TV+", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Apple_TV_Plus_Logo.svg" },
  { name: "Peacock", logo: "https://upload.wikimedia.org/wikipedia/commons/4/42/Peacock_Logo.svg" },
  { name: "Paramount+", logo: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Paramount_Plus_logo.svg" },
  { name: "YouTube", logo: "https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png" },
  { name: "Crunchyroll", logo: "https://upload.wikimedia.org/wikipedia/commons/6/67/Crunchyroll_Logo.svg" }
];


function StreamingServices() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ImageList className={classes.imageList} cols={7}>
        {streamingServices.map((item)=>(
          <ImageListItem>
            <img src={item.logo} alt={item.name} style={{width: "150px", height: "100px", alignItems:"center"}} />
            <ImageListItemBar
              title={item.name}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

export default StreamingServices;
