function KeyTakeaway({children}) {
    const mystyle = {
      color: "#E5C6FF",
      backgroundColor: "rgba(212,160,255, 0.2)",
      borderRadius: "0.5rem",
      padding: "10px",
      marginTop: "1.5rem",
      fontFamily: "Arial",
      border: "solid 1px rgba(106,55,148,1)",
    };
	return (
	    <div style={mystyle}>
	    	{children}
	    </div>
	)
}


export default KeyTakeaway;