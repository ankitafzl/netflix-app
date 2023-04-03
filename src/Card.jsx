import Images from './Images';

function Card(props){
    console.log(props)
    return(
       <>
        <div className="cards">
          <div className="card">
            <Images imgsrc={props.imgsrc}/>
            <div className="card__info">
              <span className="card_category">{props.title}</span>
              <h3 className="card_title">{props.link}</h3>
              <a href={props.link} target="">
                <button>Watch Now</button>
              </a>
            </div>
          </div>
        </div>
       </>
    );
  }
export default Card;  