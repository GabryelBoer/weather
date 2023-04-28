import * as C from './App.styles'
import { InputArea } from './components/InputArea'
import { ResultArea } from './components/ResultArea'

const App = () => {
  return (
    <C.Container>
      <C.Area>
        <InputArea />
        <ResultArea />
      </C.Area>
    </C.Container>
  )
}

export default App