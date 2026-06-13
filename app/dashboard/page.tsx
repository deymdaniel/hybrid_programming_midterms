export const dynamic = 'force-dynamic';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

interface Cart {
  id: number;
  total: number;
  userId: number;
  totalProducts: number;
}

export default async function DashboardPage() {
  const [usersRes, cartsRes] = await Promise.all([
    fetch('https://dummyjson.com/users?limit=5', { cache: 'no-store' }),
    fetch('https://dummyjson.com/carts?limit=5', { cache: 'no-store' })
  ]);

  const usersData = await usersRes.json();
  const cartsData = await cartsRes.json();

  const users: User[] = usersData.users;
  const carts: Cart[] = cartsData.carts;

  return (
    <div className="flex items-center justify-center flex-col gap-10">
      <h1>User Dashboard (SSR)</h1>
      <section style={{ display: 'flex', gap: '40px', marginTop: '20px' }}>
        <div>
          <h3>System Users</h3>
          <table className="border-collapse border border-gray-400">
            <thead>
              <tr>
                <th className="border border-gray-400 px-4 py-2">ID</th>
                <th className="border border-gray-400 px-4 py-2">Name</th>
                <th className="border border-gray-400 px-4 py-2">Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map(u => (
                <tr key={u.id}>
                  <td className="border border-gray-400 px-4 py-2">{u.id}</td>
                  <td className="border border-gray-400 px-4 py-2">{u.firstName} {u.lastName}</td>
                  <td className="border border-gray-400 px-4 py-2">{u.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <h3>Active Cart Invoices</h3>
          <table className="border-collapse border border-gray-400">
            <thead>
              <tr>
                <th className="border border-gray-400 px-4 py-2">Cart ID</th>
                <th className="border border-gray-400 px-4 py-2">User ID</th>
                <th className="border border-gray-400 px-4 py-2">Items Count</th>
                <th className="border border-gray-400 px-4 py-2">Total Value</th>
              </tr>
            </thead>
            <tbody>
              {carts.map(c => (
                <tr key={c.id}>
                  <td className="border border-gray-400 px-4 py-2">{c.id}</td>
                  <td className="border border-gray-400 px-4 py-2">{c.userId}</td>
                  <td className="border border-gray-400 px-4 py-2">{c.totalProducts}</td>
                  <td className="border border-gray-400 px-4 py-2">${c.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}