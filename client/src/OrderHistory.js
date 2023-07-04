import React from 'react'
import Nav from './components/Nav';
const OrderHistory = () => {
  return (
    <>
    <Nav/>
    <h1 >Order History</h1>
    <table>
        <thead>
            <tr>
            <th>ID</th>
            <th>Tracking No</th>
            <th>Price</th>
            <th>Date</th>
            <th>View</th>
        </tr>
         </thead>
         
         <tbody>
            <tr>
                <td>1</td>
                <td>ram4567gfg</td>
                <td>45000</td>
                <td>2023-03-14</td>
                <td><input type="button" class="btn" value="View details"/></td>
            </tr>

            <tr>
                <td>2</td>
                <td>shyam4567gfg</td>
                <td>45000</td>
                <td>2023-03-14</td>
                <td><input type="button" class="btn" value="View details"/></td>
            </tr>

            <tr>
                <td>3</td>
                <td>raju4567gfg</td>
                <td>45000</td>
                <td>2023-03-14</td>
                <td><input type="button" class="btn" value="View details"/></td>
            </tr>

        </tbody>
    </table>
    </>
  )
}

export default OrderHistory;
