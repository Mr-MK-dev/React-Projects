import './App.css';
import List from './List'
import styled from 'styled-components'


function App()
{
  return (
    <div className="App">
      <MyComponent>
        {/* <h1>Hello</h1>  */}
        <List />
      </MyComponent>
    </div>
  );
}

export default App;

const MyComponent = styled.div`
background-color:#FF00BF;
width:100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`