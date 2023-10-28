function TableRow({id,owner_name,number_plate,driver_name,driver_contact,route,ondelete,updating}){
    function DeleteRow(){
        ondelete(id)
    }
    function Update(){
        const newDriver = prompt('Enter the new Driver:');
        if (newDriver !== null && newDriver !== '') {
          updating(id, String(newDriver));
        }
    }
    return(
        <>
         <tr key={id}>
              <td style={{width:"5%"}}>{id}</td>
              <td>{owner_name}</td>
              <td>{number_plate}</td>
              <td>{driver_name}</td>
              <td>{driver_contact}</td>
              <td>{route}</td>
              
              <td>
                <button style={{backgroundColor:"rgb(13, 226, 155)"}} onClick={Update}>
                  Update
                </button>
              </td>
              <td>
                <button style={{backgroundColor:"red"}} onClick={DeleteRow}>
                  Delete
                </button>
              </td>
            </tr>
        </>
    )
}
export default TableRow;