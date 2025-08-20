import React from 'react'
import Products from './Products'

function AdminBox() {
    return (
        <div>
    
            <Admin />
                <Routes>
                    
                    
                    <Route path='/Product' element={<Products />} />
                </Routes>
      

        </div>
    )
}

export default AdminBox