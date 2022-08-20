import React from 'react';

function Tbody(props) {
    return (
            <tr>
                <td className=' border border-coloborder w-[12.90%]'><img className='w-[49px] h-[49px]' src={props.image}/></td>
                <td className='text-sm text-[#333333] font-semibold heading-[18px] py-[3px] px-[8px] border border-coloborder w-[27.83%]'>{props.name}</td>
                <td className='text-sm text-[#de1e33] text-center font-semibold heading-[18px] py-[3px] px-[8px] border border-coloborder w-[10.18%]'>{props.price}</td>
                <td className='text-sm text-[#333333] heading-[18px] py-[3px] px-[8px] border border-coloborder w-[41.47%]'>{props.note}</td>
            </tr>
    );
}

export default Tbody;