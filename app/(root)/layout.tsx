import { Sidebar } from 'lucide-react'
import React from 'react'

type Props = {
    children:React.ReactNode
}

const Layout = ({children}: Props) => {
  return (
    <div className='root'>
        <Sidebar/>
        <div className="root-container">
            <div className="wrapper">
                {children}
            </div>
        </div>
    </div>
  )
}

export default Layout