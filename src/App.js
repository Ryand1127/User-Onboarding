
import './App.css';
import Form from './Form.js'
import Styled from 'styled-components';
import Header from './Header.js'

const StyledBackground = Styled.div`

background-image:url('https://cdnb.artstation.com/p/assets/images/images/022/419/201/large/callum-paton-copley-screenshot00017.jpg?1575375857')


`



function App() {

  

  return (
    <div>
    <Header/>
    <StyledBackground>
      <Form/>
    </StyledBackground>
    </div>
  );
}

export default App;
