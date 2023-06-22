import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import { useRef,useState, useEffect } from 'react';
import axios from 'axios';
import { endpointsGral } from '../services/vacancy';
import {FaEdit, FaEye} from 'react-icons/fa'
import Swal from 'sweetalert2'
import "react-data-table-component-extensions/dist/index.css";
import { myId } from '../../lib/myLib';
import { Link } from 'react-router-dom';

// import 'datatables.net-responsive';

const Example = () => {
  const [dataInformation, setDataInformation]=useState([]);
  const [dataShow, setDataShow] = useState([]);



  const queryMatch= async()=>{
      try {
          const response= await axios.get(endpointsGral.vacancyURL)
          const datas=response.data['item']
          setDataInformation(datas['docs'])
          console.log(response.data)
      } catch (error) {
          console.log(error) 
      }
  }
  useEffect(()=>{
      queryMatch()
  },[])

  const handleClick = (title) => {
    Swal.fire({
      title: 'Cambiar estado: ',
      input: 'select',
      inputOptions: {
        '1': 'Cerrado',
        '2': 'Abierto',
      },
      inputPlaceholder: 'required',
      showCancelButton: true,
      inputValidator: function (value) {
        return new Promise(function (resolve, reject) {
          if (value !== '') {
            resolve();
          } else {
            resolve('You need to select a Tier');
          }
        });
      }
    }).then(function (result) {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          html: 'You selected: ' + result.value
        });
      }
    });
    console.log(`You clicked me! ${title}`);
  };
  const changeStatus=()=>{
    Swal.fire({
        title: 'Cambiar estado: ',
        input: 'select',
        inputOptions: {
          '1': 'Cerrado',
          '2': 'Abierto',
        },
        inputPlaceholder: 'required',
        showCancelButton: true,
        inputValidator: function (value) {
          return new Promise(function (resolve, reject) {
            if (value !== '') {
              resolve();
            } else {
              resolve('You need to select a Tier');
            }
          });
        }
      }).then(function (result) {
        if (result.isConfirmed) {
          Swal.fire({
            icon: 'success',
            html: 'You selected: ' + result.value
          });
        }
      });
    }  
  

   const data= dataInformation?.map((item, index) => {
     const outDataDuplex=item.applicants?.filter((objeto, indice)=>{
       const objetoString = JSON.stringify(objeto);
       return (
         item.applicants.findIndex((obj, i)=>{
           return JSON.stringify(obj) === objetoString;
         }) === indice
       );
     });
     return(
       {
         id:item._id,
         qty: `${index+1}`,
         title: item.title,
         status: item.status,
         candidato: outDataDuplex?.length||'',
       }
     )
   })

   const columns = [
    {
      name:'rowId',
      selector: (row) => row.id,
      sortable: true, hide:true,
      omit:true,

    },
    {
      name: "#",
      selector: (row,i) => i + 1,
      sortable: true
    },
    {
      name: "TITULO",
      selector: (row, i) =>`${row.title}`,
      sortable: true
    },
    {
      name: "STATUS",
      selector: (row, i) => row.status,
      sortable: true
    },
    {
      name: "CANDIDATO",
      selector: (row, i) => row.candidato,
      sortable: true,
    },
    {
      name: "OPCIONES",
      sortable: false,
      selector: (row, i) => row.null,
      cell: (d) =>[
        <Link to={`/Dashboard-Recruiter/details-match/?m=${d.id}`}>
        <button type="button" className="buttons btn btn-outline-info" ><FaEye className="icon_eye1"/></button>
        </Link>,
        <button type="button" className="buttons btn btn-outline-success" onClick={handleClick.bind(this,d.status)} ><FaEdit className="icon_edit1"/></button> 
  ]
 }
];

  // const data = dataShow;


const tableData = {
  columns,
  data
};


  return(
    <div className="main">
      <DataTableExtensions  
      export={false}
      print={false}
      {...tableData}>
        <DataTable {...tableData}
        key={myId()}
          columns={columns}
          data={data}
          noHeader
          defaultSortField="#"
          defaultSortAsc={true}
          pagination
          highlightOnHover
          dense
        />
      </DataTableExtensions>
    </div>
  )
};

export default Example;

