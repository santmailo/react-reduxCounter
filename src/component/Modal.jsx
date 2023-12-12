
function Modal({children}) {
  return (
        <div className="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" tabIndex="-1" role="dialog" id="modalSheet">
          {children}
    </div>
  )
}

export default Modal;