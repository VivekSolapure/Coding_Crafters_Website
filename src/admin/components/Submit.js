import React, { useState } from 'react'
import { FirebaseProvider, db, storage, useFirebase } from "../../context/Firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"


function Submit(props) {
  // console.log("Props: ", props);
  const [name, setname] = useState('')
  console.log(name);
  const [memPhoto, setmemPhoto] = useState('')
  console.log(name);
  const [role, setrole] = useState('')
  console.log(role);
  const [course, setcourse] = useState('')
  console.log(course);
  const [year, setyear] = useState('')
  console.log(year);
  let URLS = ''


  const postMainMemberData=()=>{
    if(((name || role || course || year) === '') || ( memPhoto.length === 0)){
      alert('Please fill all the details')
      if(window.confirm){
        window.location.reload()
      }
    }else{
      const imgref = ref(storage, `MemberFiles/ProfileImage/${memPhoto.length.name}`)
         uploadBytes(imgref, ImgUpload[i])//For uploading (kuta upload,kai upload)
          .then(async (snapshot) => {//  "snapshot" tyat sagala astay [items,prefixes,extra]
            await getDownloadURL(snapshot.ref)//url download karaylo ref cha, ref kai ahe tar "ImageUrls/"
              .then((url) => {//snapshot madla url
                URLS += url + '>>>'
              })
          });
          firebase.putData(``)
      
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    

  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name:</label>
        <input type="text" onChange={(e) => { setname(e.target.value) }} />
        <label htmlFor="">Image:</label>
        <input type="file" multiple onChange={(e) => { setmemPhoto(e.target.files) }} />
        <label htmlFor="">Role:</label>
        <input type="text" onChange={(e) => { setrole(e.target.value) }} />
        <label htmlFor="">Course:</label>
        <input type="text" onChange={(e) => { setcourse(e.target.value) }} />
        <label htmlFor="">Year:</label>
        <input type="text" onChange={(e) => { setyear(e.target.value) }} />
        <input type="submit" />
      </form>
    </>
  );
}

export default Submit