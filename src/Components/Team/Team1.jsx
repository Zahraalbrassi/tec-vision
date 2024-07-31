import React from 'react'
import './Team.css'
import user1 from '../../assets/user-5.jpg'
import user2 from '../../assets/mohamed.jpg'
import user3 from '../../assets/user-5.jpg'
import user4 from '../../assets/Abdalwahid.jpg'

const teamMembers = [
    {
        imgUrl: user1,
        name: 'Abdullah Something',
        position: 'Chairman of Roaya company'
    },

    {
        imgUrl: user2,
        name: 'Muhammad Al-Qatani',
        position: 'Executive Director of Benghazi Branch'
    },

    {
        imgUrl: user3,
        name: 'Abdullah Budbous',
        position: 'Executive Director of Tripoli Branch'
    },

    {
        imgUrl: user4,
        name: 'Abdul Wahed Al-Hindawi',
        position: 'Executive Director of Al Bayda  Branch'
    },
]
function Team1() {
    return (
        <section className='our__team'>
            <div className='container'>

                <div className='team__wrapper'>
                    {
                        teamMembers.map((item, index) => (
                            <div className='team__item' key={index}>
                                <div className='team__img'>
                                    <img src={item.imgUrl} alt='' />
                                </div>
                                <div className='team__details'>
                                    <h4>{item.name}</h4>
                                    <p className='description'>{item.position}</p>


                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Team1