import './App.css'
import Content from './component/Content'
import Heading from './component/Heading'
import Buttons from './component/Buttons'
import Modal from './component/Modal'


function App() {
  return (  
    <Modal>
      <div className="px-4 py-5 my-5 text-center">
        <Heading />
          <div className="col-lg-6 mx-auto">
            <Content />
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <Buttons />
            </div>
          </div>
        </div>
  </Modal>
  )
}

export default App
