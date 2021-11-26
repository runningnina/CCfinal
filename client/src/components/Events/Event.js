import React from 'react'

const Event = (props) => {
    const colour=['red','blue','green','yellow']
    const ChangeDate=(props)=>{
        var year = props.date.slice(0,4)
        var month = props.date.slice(5,7)
        var day = props.date.slice(8,10)
        // var final
        return(<><i className="fas fa-calendar-alt mr-2"></i>{props.date}</>)
    }
    return (
        <>
        {props.arr.map((item,key)=>{
            return (<article key={key} className={`postcard dark ${colour[key%4]}`} style={{paddingBottom:'20px'}}>
                <a className="postcard__img_link" href="#">
                    <img className="postcard__img" src="https://picsum.photos/1000/1000" alt="Image Title" />
                </a>
                <div className="postcard__text">
                    <h1 className={`postcard__title ${colour[key%4]}`}>{item.name}</h1>
                    <div className="postcard__subtitle small">
                        <time dateTime="2020-05-25 12:00:00">
                            <ChangeDate date={item.date}/>
                        </time>
                    </div>
                    <div className="postcard__bar"></div>
                    <div className="postcard__preview-txt">{item.details}</div>
                    <ul className="postcard__tagbox">
                        <li className="tag__item" onClick={()=>{console.log("yes")}}><i className="fas fa-tag mr-2" ></i>Resources</li>
                        {/* <li className="tag__item"><i className="fas fa-clock mr-2"></i>55 mins.</li>
                        <li className={`tag__item play ${colour[key]}`}>
                            <a href="#"><i className="fas fa-play mr-2"></i>Play Episode</a>
                        </li> */}
                    </ul>
                </div>
            </article>)
        })}
            
        </>
    )
}

export default Event
