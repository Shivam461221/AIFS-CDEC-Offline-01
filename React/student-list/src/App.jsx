import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import studentList from './data'

function App() {
  const [student, setStudent] = useState(studentList);
  const [branch, setBranch] = useState('All');
  const idRef = useRef();
  const nameRef = useRef();
  const courseRef = useRef();
  const branchRef = useRef();

  const addStudent = () => {
    let id = idRef.current.value;
    let name = nameRef.current.value;
    let course = courseRef.current.value;
    let branch = branchRef.current.value;

    if (id && name && course && branch) {
      let newStudent = { id, name, course, branch };
      setStudent([...student, newStudent]);

      idRef.current.value = '';
      nameRef.current.value = '';
      courseRef.current.value = '';
      branchRef.current.value = '';
    }
    else {
      alert('Please insert data first');
    }

  }

  const remove = (id) => {
    let index = student.findIndex(element => element.id === id);
    console.log(index);
    student.splice(index, 1);
    setStudent([...student]);
  }

  const filteredStudents = (branch === 'All') ? student : student.filter((element) => element.branch === branch);

  return (
    <>
      <div className="container">
        <p className='display-6 text-center bg-danger p-2 text-white'>Student App</p>
        <div className="row my-2">
          <div className="col-md-6">
            <label htmlFor="" className="form-label">Id</label>
            <input ref={idRef} type="text" className="form-control" />
          </div>
          <div className="col-md-6">
            <label htmlFor="" className="form-label">Name</label>
            <input ref={nameRef} type="text" className="form-control" />
          </div>
        </div>
        <div className="row my-2">
          <div className="col-md-6">
            <label htmlFor="" className="form-label">Course</label>
            <input ref={courseRef} type="text" className="form-control" />
          </div>
          <div className="col-md-6">
            <label htmlFor="" className="form-label">Branch</label>
            <input ref={branchRef} type="text" className="form-control" />
          </div>
        </div>
        <button className="btn btn-primary" onClick={() => addStudent()}>Add Student</button>
        <button className="btn btn-dark mx-2" onClick={() => setBranch('All')}>All</button>
        <button className="btn btn-warning mx-2" onClick={() => setBranch('CS')}>CS</button>
        <button className="btn btn-info" onClick={() => setBranch('EC')}>EC</button>
        <button className="btn btn-secondary mx-2" onClick={() => setBranch('IT')}>IT</button>

        <table className="table table-bordered table-striped mt-3">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Course</th>
              <th>branch</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((element, index) => <tr key={index}>
              <td>{element.id}</td>
              <td>{element.name}</td>
              <td>{element.course}</td>
              <td>{element.branch}</td>
              <td><button className='btn btn-danger' onClick={() => remove(element.id)}>Remove</button></td>
            </tr>)}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
