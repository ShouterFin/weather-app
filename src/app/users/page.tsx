import React from 'react'

// Luodaan User-rajapinta, joka määrittelee käyttäjän id:n ja nimen
// Auttaa tyypittämään fetch-pyynnön vastauksen
interface User {
    id: number
    name: string
    email: string
}

// Luodaan UsersPage-komponentti, joka hakee käyttäjät jsonplaceholderista
// ja renderöi käyttäjien nimet listaan
// next: { revalidate: 10 } määrittää datan uudelleenlatauksen 10 sekunnin välein
// Muuten data tallennetaan välimuistiin ja käytetään sieltä
const UsersPage = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/users', 
    { next: { revalidate: 10 } })
  const users: User[] = await res.json()

  return (
    <>
        <h1>Users</h1>
        <p>{new Date().toLocaleTimeString()}</p>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user =><tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    </tr>)}
            </tbody>
        </table>
    </>
  )
}

export default UsersPage
