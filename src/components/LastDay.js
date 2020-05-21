import React from 'react';
const LastDay=(props)=>{
    
    const year = props.year || new Date().getFullYear();
    switch (new Date().getMonth())  {
        case 0:
            return(<tr><td>29</td> <td> 30 </td> <td> 31 </td></tr>)
           
        case 1:
            if (year % 4 === 0 || (year % 100 !== 0 || year % 400 === 0))
            return(<tr><td>29</td></tr>)
            else 
            return('')
           
        case 2:
            return(<tr><td>29</td> <td> 30 </td> <td> 31 </td></tr>)
           
        case 3:
            return(<tr><td>29</td> <td> 30 </td></tr>)
           
        case 4:
            return(<tr><td>29</td> <td> 30 </td> <td> 31 </td></tr>)
           
        case 5:
            return(<tr><td>29</td> <td> 30 </td></tr>)
           
        case 6:
            return(<tr><td>29</td> <td> 30 </td> <td> 31 </td></tr>)
           
        case 7:
            return(<tr><td>29</td> <td> 30 </td> <td> 31 </td></tr>)
           
        case 8:
            return(<tr><td>29</td> <td> 30 </td></tr>)
           
        case 9:
            return(<tr><td>29</td> <td> 30 </td> <td> 31 </td></tr>)
           
        case 10:
            return(<tr><td>29</td> <td> 30 </td></tr>)
           
        case 11:
            return(<tr><td>29</td> <td> 30 </td> <td> 31 </td></tr>)
           
            default: return(<tr><td>29</td> <td> 30 </td> <td> 31 </td></tr>)
    }   
}
export default LastDay