import React from 'react'
import './Members.css'
import MemLists from '../../users/components/MemLists'

export default function Members() {
    const Members=[
        {id:'m1', name:'Vivek', image:'./profile-pic.png'},
        {id:'m1', name:'Vivek', image:'./profile-pic.png'}
    ];
  return <MemLists items={Members} />
}
