import React from "react";
import { Link } from "react-router-dom";


export default function ContactCard(props) {
  console.log(props.contact)
  return (
    <div>
      <ol className="list-group  my-3">
        <li className="list-group-item d-flex justify-content-between align-items-start">
        <Link className="text-decoration-none" to={`/contact/${props.contact.id}`}   state={{contact:props.contact}} >
          <div className="ms-2 me-auto">
            <div className="fw-bold">{props.contact.name}</div>
            {props.contact.email}
          </div>
          </Link>

         
          <button
            type="button"
            className="btn btn-outline-danger"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-trash"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
              <path
                fillRule="evenodd"
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
              ></path>
            </svg>
            Delete
          </button>
          <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">Confirm action</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        {`Do you want to delete ${props.contact.name} parmanently ?`}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
        <button type="button" className="btn btn-primary" 
        data-bs-dismiss="modal"
          onClick={() => {
            props.clickHandler(props.contact.id);
          }} >
            Delete</button>
      </div>
    </div>
  </div>
</div>

         
      
         
        </li>
      </ol>
    </div>
  );
}
