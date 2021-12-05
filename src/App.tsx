import { ReactElement } from 'react'
import FormGenerator from './form/FormGenerator'
import { formData } from './form/FormData'

function App(): ReactElement {
  return (
    <div className="container mx-auto">
      <FormGenerator formData={formData} />
    </div>
  )
}

export default App
