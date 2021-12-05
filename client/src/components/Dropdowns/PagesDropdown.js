import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
import { createPopper } from "@popperjs/core";
import axios from 'axios';

const PagesDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const [companiest,setCompaniest] = useState([])
  const [companiesnt,setCompaniesnt] = useState([])

  useEffect(()=>{
    axios.get('http://127.0.0.1:5000/getQuestionCompany')
        .then(response => {
            setCompaniest(response.data.datat)
            setCompaniesnt(response.data.datant)
        })
        .catch(error => {
          console.log(error)
        })
  },[])


  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

 return (
    <>
      <a
        className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        Questions
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
          }
        >
          Tech
        </span>

        {companiest?
          companiest.map((item,index)=>{
            var link = `/questions/${item}`
            return(
              <Link
              to={link}
              className={
                "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
              } key={index}
            >
              {item}
            </Link>
            )

          })
          :<></>}

        {/* <Link
          to="/admin/settings"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
        >
          Settings
        </Link>
        <Link
          to="/admin/tables"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
        >
          Tables
        </Link>
        <Link
          to="/admin/maps"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
        >
          Maps
        </Link> */}

        <div className="h-0 mx-4 my-2 border border-solid border-blueGray-100" />
        <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
          }
        >
          Non Tech
        </span>
        
        {companiesnt?
          companiesnt.map((item,index)=>{
            return(
              <Link
              to="/auth/login"
              className={
                "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
              } key={index}
            >
              {item}
            </Link>
            )

          })
          :<></>}
        {/* <Link
          to="/auth/register"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
        >
          Register
        </Link> */}
        {/* <div className="h-0 mx-4 my-2 border border-solid border-blueGray-100" />
        <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
          }
        >
          No Layout
        </span>
        <Link
          to="/landing"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
        >
          Landing
        </Link>
        <Link
          to="/profile"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
        >
          Profile
        </Link> */}
      </div>
    </>
  );
};

export default PagesDropdown;
