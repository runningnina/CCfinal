import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router'
import Navbar from "../Navbars/AuthNavbar";
import Container from '@material-ui/core/Container';
import Footer from "../Footers/Footer.js";
import QuestionCard from './QuestionCard';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
      
    }
  }));


const QuestionMain = () => {
    const classes = useStyles();
    let {name} = useParams()
    const [message,setMessage] = useState([])

    useEffect(()=>{
        axios.post('http://127.0.0.1:5000/getQuestionCompanyName', {'name':name})
         .then(function(response) {
            console.log(response.data.data);
            setMessage(response.data.data)
         })
         .catch(function(error) {
            console.log(error);
         });
    },[])

    return (
        <>
        <Navbar transparent />
        <main>
          <div style={{backgroundImage:"url(" + require("assets/img/comapnybackgif.gif").default + ")",backgroundColor:'black'}}>
            <Container className={classes.cardGrid} maxWidth="lg">
              {message ? <QuestionCard data={message} name={name}/>:<></>}
            </Container>
          </div>
        </main>
        <Footer/>
        </>
    )
}

export default QuestionMain
