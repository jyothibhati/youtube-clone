import './App.css';
import AppHeader from './components/header';
import AppSidebar from './components/sidebar';
import AppDashboard from './components/dashboard';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className="app-body-items">
         <AppSidebar />
        <AppDashboard />

      </div>
      
     
    </div>
  );
}

export default App;
