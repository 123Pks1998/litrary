import React from 'react'

const AdminHome = () => {
    return (
        <div>
            <div className='adminHome'>
                <div className='admin_text'>
                    <p >admin panel</p></div>

                <div className='admin_text2'><p>admin panel to add the data into the database for literature website</p></div>

                <p className='components_list'>list of components</p>
                <ul className='components'>
                    <li>poet</li>
                    <li>gazal</li>
                    <li>shyari</li>
                    <li>poems</li>
                </ul>
            </div>
        </div>
    )
}

export default AdminHome
