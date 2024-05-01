import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">
            Description
        </div>
        <div className="descriptionbox-nav-box fade">
            Reviews(122)
        </div>
      </div>
      <div className="descriptionbox-description">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum autem veritatis repellendus nobis voluptatum explicabo quibusdam minus, aliquid perferendis ipsum dignissimos odit asperiores culpa beatae ullam maiores sint, ad excepturi?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ut neque, debitis consectetur accusantium quaerat totam quibusdam temporibus alias quam sequi unde, nisi officia laboriosam commodi odit praesentium. Repellat, modi.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
