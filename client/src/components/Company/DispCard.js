import React,{useEffect, useState} from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import job from '../../assets/img/job.png'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Details from './Details';

const useStyles = makeStyles((theme) => ({
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
  }));


const DispCard = (props) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [ret,setRet] = useState(false)
    const [long,setLong] = useState()
    const [link,setLink] = useState()

    function handleClickOpen(long,formLink){
        setLong(long)
        setLink(formLink)
        setRet(true)
    };
    const handleClose = () => {
        setRet(false);
    };
    

    return (
        <>
        <Grid container spacing={4} style={{'marginBottom':'70px','marginTop':'70px'}}>
            {props.data.map((item,key)=>{
                return <>
                <Grid key={key} item xs={3}>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.cardMedia}
                            image={job}
                            title="Image title"
                        />
                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" component="h2" style={{'fontFamily':'inherit'}}>
                            {item.name}
                            </Typography>
                            <Typography style={{'fontFamily':'inherit'}}>
                            {item.short}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="medium" target="_blank" onClick={()=>{handleClickOpen(item.long,item.formLink)}} color="primary" style={{'fontFamily':'inherit','backgroundColor':'#082032','color':'white'}} >
                                Details
                            </Button>
                            {ret&&long&&link?<Details key={key} funcClose={handleClose} long={long} open='true'/>:<></>}
                            <Button size="medium" color="primary" style={{'fontFamily':'inherit','backgroundColor':'#082032','color':'white'}} target="_blank" href={item.formLink}>
                                Apply
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                
            </>
            })}
        </Grid>
        </>
    )
}

export default DispCard
