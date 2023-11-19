// eslint-disable-next-line react/prop-types
const ViewContener = ({num ,increase }) => {
  console.log ("view Contener")
  return (
    <div style={{border:'red solid 2px', width:"20%", textAlign:"center", marginBottom:"50px", padding:"20px" }}>
    <p>{num}</p>
    <button  onClick={increase} > increase</button>
    
    
    </div>
  
  )
}

export default ViewContener