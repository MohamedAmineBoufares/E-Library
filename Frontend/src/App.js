import './App.css';
import Card from './Card'


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Description from './Description';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Switch>
          <Route path="/next">
              <Description/>
          </Route>

          <Route path="/">
            <div className='card'>
              <Card 
              title='bookname'
              imageUrl='https://pngimg.com/uploads/book/book_PNG2105.png'
              body='description and summary fklqjlqflqjlqsfj'/>
              </div>
              <div className='card'>
              <Card 
              title='bookname'
              imageUrl='https://pngimg.com/uploads/book/book_PNG2105.png'
              body='description and summary fklqjlqflqjlqsfj'/>
              </div>
              <div className='card'>
              <Card 
              title='bookname'
              imageUrl='https://pngimg.com/uploads/book/book_PNG2105.png'
              body='description and summary fklqjlqflqjlqsfj'/>
              </div>
              <div className='card'>
              <Card 
              title='bookname'
              imageUrl='https://pngimg.com/uploads/book/book_PNG2105.png'
              body='description and summary fklqjlqflqjlqsfj'/>
              </div>
              <div className='card'>
              <Card 
              title='bookname'
              imageUrl='https://pngimg.com/uploads/book/book_PNG2105.png'
              body='description and summary fklqjlqflqjlqsfj'/>
              </div>
              <div className='card'>
              <Card 
              title='bookname'
              imageUrl='https://pngimg.com/uploads/book/book_PNG2105.png'
              body='description and summary fklqjlqflqjlqsfj'/>
              </div>
            
              
              
          </Route>
        </Switch>
      </div>
    </Router>
  
  );
}

export default App;