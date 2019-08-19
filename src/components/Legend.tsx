import React from 'react';
import legendKeys from '../data/LegendData';

const Legend:React.FC = () => (
<div className='map-overlay' id='legend'>
    {legendKeys.map(legendKey => ([
        <div>
            <span className='legend-key' style={{backgroundColor: legendKey.color}}></span>
            <span>{legendKey.key}</span>
        </div>
    ])
    )}
    
</div>
);

export default Legend;