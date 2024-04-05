import React, { useState, useEffect } from "react";
import './Mainboard.css'
import MainBoardLists from '../../users/components/MainBoardLists'
import { database } from "../../context/Firebase";
import { child, get, ref } from "firebase/database";
import MemLists from "../../users/components/MemLists";


export default function Mainboard() {



  const MainMembers = [
    { id: 'm1', name: 'Vivek', image: './profile-pic.png', role: 'Tester', course: 'BCA', selectYear: '2024-25' },
    { id: 'm1', name: 'Vivek', image: './profile-pic.png', role: 'Tester', course: 'BCA', selectYear: '2024-25' },
  ];
  return<>
    <MainBoardLists MboardItems={MainMembers} />
</>
}
