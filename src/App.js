// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <header>
          <h3> JANOB JORCH1 </h3>
          <ul>
            <li>Features</li>
            <li>Enterprise</li>
            <li>Support</li>
            <li>Pricing</li>
            <button className="kirish"> Sign Up</button>
          </ul>

        </header>

            </header>
      <main>
        <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 class="display-4">Pricing</h1>
          <p class="lead">Quickly build an effective pricing table for your potential customers with this <br />
            Bootstrap example. It's built with default Bootstrap components and utilities with <br />
            little customization.</p>
        </div>

        <div className='div'>
          <div className='Bir'>
            <span>Free</span>
            <h1 className='s1'>$0 / mo</h1>
            <p>10 users included
              2 GB of storage
              Email support
              Help center access</p>
            <button className='btn1'>Sign up for free</button>
          </div>

          <div className='Ikki'>
            <span>Pro</span>
            <h1 className='s1'>$15 / mo</h1>
            <p>20 users included
              10 GB of storage
              Priority email support
              Help center access</p>
            <button className='btn2'>Get started</button>
          </div>

          <div className='Uch'>
            <span>Enterprise</span>
            <h1 className='s1'>$29 / mo</h1>
            <p>30 users included
              15 GB of storage
              Phone and email support
              Help center access</p>
            <button className='btn3'>Contact us</button>
          </div>
        </div>
      </main>
      <h1> Assalomu alaykum</h1>
    </div>
  );
}

export default App;
