import "./datatable.scss";
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../datatablesource";


const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            {/* <Link to="/users/test" style={{ textDecoration: "none" }}> */}
              <div className="viewButton">View</div>
            {/* </Link> */}
            <div
              className="deleteButton"
            //   onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
const Datatable = ()=>{
    return <div className="datatable"><DataGrid
    rows={userRows}
    columns={userColumns.concat(actionColumn)}
    pageSize={10}
    rowsPerPageOptions={[10]}
    checkboxSelection
  /></div>
}


export default Datatable;