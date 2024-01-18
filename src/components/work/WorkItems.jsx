import React from 'react'

const WorkItems = ({item}) => {
  return (
    <div className='work__card' key={item.id}>
        <img className='work__img' src={item.image} alt="" />
        <h3 className="work__title">{item.title}</h3>

        <a href={item.href} target='_blank' className="work__button">
            Demo <i className='bx bx-right-arrow-alt work__button-icon'></i>
        </a>
    </div>
  )
}

export default WorkItems