import { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState(''); 

    useEffect(() => {
        const fetchUsers = async () => {
        try{
            const response = await axios.get('http://localhost:3000/api/v1/users');
            setUsers(response.data);
            setloading(false);
        } catch (error){
            seterror('データの取得に失敗しました')
            setloading(false);
        }
        };

        fetchUsers();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">OB/OG一覧</h1>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="border px-4 py-2">名前</th>
                  <th className="border px-4 py-2">卒業年度</th>
                  <th className="border px-4 py-2">内定先企業</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="border px-4 py-2">{user.name}</td>
                    <td className="border px-4 py-2">{user.graduation_year}</td>
                    <td className="border px-4 py-2">{user.company_name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    };
    
    export default UserList;