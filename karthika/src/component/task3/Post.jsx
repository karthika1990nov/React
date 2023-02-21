const Post =(props)=>{
    const { list} = props;
    return(
        <>
        <ul>
                {
                    list && list.map((post) => {
                        return <li key={post.id}>{post.title}</li>
                    })
                }
            </ul>
        
        </>
    )
}
export {Post};