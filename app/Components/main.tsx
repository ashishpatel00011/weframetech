import React from 'react'
import SignUpBanner from './maincontent/seller'
import ServiceBanner from './maincontent/servicebanner'
import TableCard from './maincontent/cart'
import Bigcard from './maincontent/bigcard'
import Content from './maincontent/content'

const Maincontent = () => {
    return (
        <div className=''>
            <Content/>
            <TableCard/>
            <Bigcard/>
            <ServiceBanner/>
            <SignUpBanner/>
        </div>
    )
}

export default Maincontent
