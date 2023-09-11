

export default function ViewList({infor}) {
    console.log(infor)
    
    
   
    

    const styl ={
        border: '2px solid black',
        textAlign: 'start',
        borderRadius:'10px',
        marginBottom: '10px',
        paddingLeft: '10px'
    }
   
    
    return(
        <div style={styl}>
                <h3>ID:</h3>
                <h3>AlbumID:</h3>
                <h3>Title: </h3>
                    
        </div>
    )
}