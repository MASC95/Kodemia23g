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
import useJob from '../../../hooks/useJob'


// import 'datatables.net-responsive';

const Example = () => {
  const [dataCandidate,setDataCandidate,dataRecruiter,setDataRecruiter, dataLocalStorage, setDataLocalStorage]=useJob()
  const [dataInformation, setDataInformation]=useState([]);
  const [dataShow, setDataShow] = useState([]);
  const [dataStatusEditing, setDataStatusEditing] = useState({});



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

  useEffect(()=>{
    if(dataStatusEditing) console.log('dataStatusEditing:..',dataStatusEditing);
  },[dataStatusEditing])

  const handleClick = (index) => {
    const editState= dataInformation[index]
    
    Swal.fire({
      title: 'Cambiar estado: ',
      input: 'select',
      inputOptions: {
        'Cerrado': 'Cerrado',
        'Iniciado': 'Iniciado',
      },
      inputPlaceholder: 'required',
      showCancelButton: true,
      inputValidator: function (value) {
        return new Promise(function (resolve, reject) {
          if (value !== '') {
            
            const newValues={
              status:value
            }
            editStatus(newValues,editState);
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
        if(result.value==='Iniciado'){
          
          setDataStatusEditing({
            ...editState,
            status:'Iniciado'
          })
        }
        if(result.value==='Cerrado'){
          setDataStatusEditing({
            ...editState,
            status:'Cerrado'
          })
        }
      }
    });
    console.log(`You clicked me! ${index}`);
  };  

  const editStatus=(values,editState)=>{
    console.log('value',values)
    //console.log('dataStatusEditing:..',dataStatusEditing);
    const arrVacancy=dataInformation.map(item=>{
      if(item._id===editState._id){
        item.status=values.status
      }
      return item
    })
    setDataInformation([...arrVacancy])

    console.log(arrVacancy)
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer: ${dataRecruiter.accessToken}`;
    
  
    axios.patch(`${endpointsGral.vacancyURL}${editState._id}`, values) 
      .then(response => {
        console.log(response);
        // swal({
        //   title: "Skill editada!!",
        //   icon: "success",
        //   button: "ok!",
        //  });
      })
      .catch(error => {
        console.log(error.response);
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
         qty: index,
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
        <button type="button" className="buttons btn btn-outline-success" onClick={handleClick.bind(this,d.qty)} ><FaEdit className="icon_edit1"/></button> 
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

