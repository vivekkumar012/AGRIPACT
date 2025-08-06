import React, { useState } from 'react'
import AccountNav from '../components/AccountNav';

function Account() {
  const [redirect, setRedirect] = useState(null);

  return (
    <div>
      <AccountNav />
      <div>
        This is the frnt pagah
      </div>
    </div>
  )
}

export default Account
