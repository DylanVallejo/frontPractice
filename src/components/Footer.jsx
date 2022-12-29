
const Footer =({name,contact,mail})=> {
  return (
    <>
      <footer style={{   
            width: '99%',
            height: 'auto',
            position: 'absolute',
            bottom: 0,
            left: 0,
            backgroundColor: 'red',
            margin:'auto',
            justifyContent:'center',
            textAlign:'center',
            alignItems:'center',
            // display:"flex"
          }}>
          
          <p>creado por {name}</p>
          <p>Mi contato es {contact}</p>
          <p>Mi email es {mail}</p>
      </footer>
    </>
  )
}

export default Footer

