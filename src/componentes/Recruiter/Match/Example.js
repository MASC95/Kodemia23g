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
import MyTable from './MyTable';

// import 'datatables.net-responsive';

const Example = () => {
  const [dataCandidate,setDataCandidate,dataRecruiter,setDataRecruiter, dataLocalStorage, setDataLocalStorage]=useJob()
  const [dataInformation, setDataInformation]=useState([]);
  const [dataStatusEditing, setDataStatusEditing] = useState({});
  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);


  const queryMatch= async(page,newPerPage)=>{
      try {
        setLoading(true)
        const allVacancies=await axios.get(`${endpointsGral.vacancyURL}?page=${page}&limit=${newPerPage}`)
        const datas=allVacancies.data['item']
        console.log('backend Response:..',datas);
          setDataInformation(datas['docs'])
          console.log('PAGINATION',datas["totalDocs"])
         setTotalRows(datas["totalDocs"])
         setLoading(false)
      } catch (error) {
          console.log(error) 
      }
  }
  useEffect(()=>{
      queryMatch(1,10)
  },[])
  useEffect(()=>{
    console.log('Nuevo valor de limit:..',perPage)
  },[perPage])

  useEffect(()=>{
    if(dataStatusEditing) console.log('dataStatusEditing:..',dataStatusEditing);
  },[dataStatusEditing])

    // pagination
    const handlePageChange = page => {
      queryMatch(page,perPage);
      setCurrentPage(page)
    };

    const handlePerRowsChange = async (newPerPage, page) => {
      console.log('Cambiando limit:...',newPerPage);
      queryMatch(page,newPerPage)
      setPerPage(newPerPage)
    };
    // pagination

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
          html: 'Estado: ' + result.value
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
      })
      .catch(error => {
        console.log(error.response);
      });   
  }

  

  
   const data= dataInformation?.map((vacante, index) => {
     

    /* const outDataDuplex=vacante.applicants?.filter((idUserAplicant, indice)=>{
       const objetoString = JSON.stringify(idUserAplicant);
       return (
         vacante.applicants.findIndex((aplicante, i)=>{
           return JSON.stringify(aplicante) === objetoString;
         }) === indice
       ); 


     });*/
     const tempArray=[];
     const aplicantes= [...vacante.applicants];
     aplicantes.forEach((idAplicante)=>{
        const isFounded = tempArray.find((id)=>id===idAplicante);
        if(!isFounded){
          tempArray.push(idAplicante);
        }
     })



     return(
       {
         id:vacante._id,
         qty: index,
         title: vacante.title,
         status: vacante.status,
         candidato: tempArray?.length||0,
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
      name: "APLICANTES",
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
    <div className="row m-3">
      {/* <MyTable/> */}
      <DataTableExtensions  
      export={false}
      print={false}
      {...tableData}>
        <DataTable {...tableData}
          columns={columns}
          data={data}
          progressPending={loading}
          pagination
          paginationServer
          paginationTotalRows={totalRows}
          paginationDefaultPage={currentPage}
          onChangeRowsPerPage={handlePerRowsChange}
          onChangePage={handlePageChange}
          highlightOnHover
          dense
        />
      </DataTableExtensions>
    </div>
  )
};

export default Example;

