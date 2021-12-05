import React,{useState} from 'react'
import Grid from '@material-ui/core/Grid';
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
// import CardMedia from '@mui/material/CardMedia';
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest
  })
}));

const QuestionCard = (props) => {
    // const [expanded, setExpanded] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState("")

    // const handleExpandClick = () => {
    //     setExpanded(!expanded);
    // };
    
    const handleClick = index => {
        if (selectedIndex === index) {
          setSelectedIndex("")
        } else {
          setSelectedIndex(index)
        }
      }

    return (
        <Grid container spacing={4} style={{'marginBottom':'70px','marginTop':'70px'}}>
            {props.data.map((item,key)=>{
                return <>
                <Grid key={key} item xs={3}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardHeader
                            avatar={
                            <Avatar sx={{ bgcolor: blue[200] }} aria-label="recipe">
                                {props.name[0].toUpperCase()}
                            </Avatar>
                            }
                            action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                            }
                            title={props.name}
                            subheader="September 14, 2016"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                            {item.question}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <ExpandMore
                            key={key}
                            expand={key === selectedIndex}
                            onClick={()=>handleClick(key)}
                            aria-expanded={key === selectedIndex}
                            aria-label="show more"
                            >
                            <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={key === selectedIndex} timeout="auto" unmountOnExit>
                            <CardContent>
                            <Typography paragraph>Answer:</Typography>
                            <Typography paragraph>
                                {item.answer}
                            </Typography>
                            
                            <Typography>
                                Set aside off of the heat to let rest for 10 minutes, and then
                                serve.
                            </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                </Grid>
                
            </>
            })}
        </Grid>
    )
}

export default QuestionCard
