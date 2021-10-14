import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <span className="ml-1">&copy; 2021 PT. Ethos Kreatif Indonesia</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a href="https://www.instagram.com/sandhyaacala/" target="_blank" rel="noopener noreferrer">Sandhya Acala</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
