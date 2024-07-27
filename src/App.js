// import React from 'react';
// import Header from './components/Header';
// import StockContainer from './components/StockContainer';
// import './App.css';

// const App = () => {
//     return (
//         <div className="App">
//             <Header />
//             <main>
//                 <StockContainer />
//             </main>
//         </div>
//     );
// };

// export default App;


// src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import StockContainer from './components/StockContainer';

// const App = () => {
//     return (
//         <Router>
//             <div className="App bg-gray-800 text-white min-h-screen">
//                 <Navbar />
//                 <main className="p-4">
//                     <Routes>
//                         <Route exact path="/" element={Home} />
//                         <Route path="/intraday">
//                             <StockContainer timeSeries="TIME_SERIES_INTRADAY" />
//                         </Route>
//                         <Route path="/daily">
//                             <StockContainer timeSeries="TIME_SERIES_DAILY" />
//                         </Route>
//                         <Route path="/weekly">
//                             <StockContainer timeSeries="TIME_SERIES_WEEKLY" />
//                         </Route>
//                         <Route path="/monthly">
//                             <StockContainer timeSeries="TIME_SERIES_MONTHLY" />
//                         </Route>
//                     </Routes>
//                 </main>
//             </div>
//         </Router>
//     );
// };

// export default App;

// src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import Daily from './pages/Daily';
// import Weekly from './pages/Weekly';
// import Monthly from './pages/Monthly';
// import './App.css';

// const App = () => {
//     return (
//         <Router>
//             <div className="App bg-gray-800 text-white min-h-screen">
//                 <Navbar />
//                 <main className="p-4">
//                     <Routes>
//                         <Route exact path="/" element={Home} />
//                         <Route path="/daily" element={Daily} />
//                         <Route path="/weekly" element={Weekly} />
//                         <Route path="/monthly" element={Monthly} />
//                     </Routes>
//                 </main>
//             </div>
//         </Router>
//     );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Daily from './pages/Daily';
import Weekly from './pages/Weekly';
import Monthly from './pages/Monthly';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="App bg-black text-white min-h-screen">
                <Navbar />
                <main className="p-4">
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/daily" element={<Daily />} />
                        <Route path="/weekly" element={<Weekly />} />
                        <Route path="/monthly" element={<Monthly />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;

