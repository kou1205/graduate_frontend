// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// パスを ./components から正しいパスに修正
import UserList from './components/UserList';
import YearList from './components/YearList';
import CompanyList from './components/CompanyList';
import UserForm from './components/UserForm';


function App() {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <nav className="mb-4">
          <ul className="flex gap-4">
            <li><Link to="/">全体一覧</Link></li>
            <li><Link to="/by-year">年度別</Link></li>
            <li><Link to="/by-company">企業別</Link></li>
            <li><Link to="/new">新規登録</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/by-year" element={<YearList />} />
          <Route path="/by-company" element={<CompanyList />} />
          <Route path="/new" element={<UserForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;