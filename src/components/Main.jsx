import PropTypes from 'prop-types';

const Main = ({descripcion, hijo , name, url}) => {

        console.log(descripcion)
    return(    
        <div  style={{   
                padding:'20px',
                margin:'10px auto',
                justifyContent:'center',
                textAlign:'center',
                alignItems:'center',
                border:' 1px solid black',
                width:'300px',
                height: 'auto',
            }}>
            <img src={url} alt='vaca no funca' style={{height:'100px'}}/>
            <h1> {name}</h1>
            <p>{descripcion}</p>
            <p>tiene hijo : {hijo}</p>
            <button>no hace nada</button>
            
        </div>
    )
}


export default Main;


Main.propTypes = {

    url : PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    hijo: PropTypes.string.isRequired,
    
    
};

Main.defaultProps = {
    url : "https://thumbs.dreamstime.com/b/vaca-27073663.jpg",
    name:'lola',
    descripcion: 'hola vaca default',
    hijo: "no ",
}