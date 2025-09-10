import React from 'react';
import { SECTIONS_DATA } from './constants.js';
import WorksAnimation from './WorksAnimation';
import Cursor from './Cursor.jsx';

const WorksAnoAni = () => {
    return (
        <div className='bg-[#050505]' style={{ perspective: '1000px' }}>
            {/* <Cursor /> */}
            {SECTIONS_DATA.map((data, index) => (
                <WorksAnimation key={index} data={data} />
            ))}
        </div>
    );
};

export default WorksAnoAni;
