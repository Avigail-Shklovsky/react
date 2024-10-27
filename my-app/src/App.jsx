import logo from './logo.svg';
import Header from './components/Header'; 
import Paragraph from './components/Paragraph';
import Link from './components/Link';
import Button from './components/Button';
import Image from './components/Image';

function App() {
  return (
    <div className="App">
     <Header text="hello world"></Header>
     <Header text="hello universe"></Header>
     <Paragraph/>
     <Link/>
     <Button></Button>
     <Image></Image>
    </div>
  );
}

export default App;
