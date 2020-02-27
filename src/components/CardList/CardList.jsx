import React from 'react';
import Card from '../Card/Card';
import emojipedia from '/Users/chiragaghera/Documents/ALL_WEB_PROJECT/web_dev/React_Project/for_pra/src/emojipedia.js';

const CardList = () => {
    return(
        <div>
             <h1>
                <span>emojipedia</span>
            </h1>
            <dl className="dictionary">

            {emojipedia.map((el) => {
                
                    return   <Card name={el.name} emoji={el.emoji} meaning={el.meaning} />
                
                
                } )}
            
            </dl>
        </div>
           
    )
}

export default CardList;