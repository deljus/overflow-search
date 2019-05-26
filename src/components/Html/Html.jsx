import React from 'react';



function Html({children, ...rest}){
    return(
        <div {...rest}
             dangerouslySetInnerHTML={{ __html: children.replace(/\n/g, '<br />')}} />
    )
}

export default Html;
