
import { useState } from "react";
import { FirebaseProvider, db, storage, useFirebase } from "../context/Firebase";
import "./dummy_inbox.css";
import 'firebase/storage';
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import Submit from "../admin/components/Submit";

export default function Dummyinbox() {

  const [Post_textarea, setPost_textarea] = useState("");
  const TxtChange = (event) => {
    setPost_textarea(event.target.value);
  };

  const [Post_txtTitle, setPost_txtTile] = useState("");
  const TxtTitle = (event) => {
    setPost_txtTile(event.target.value);
  };

  const [ImgUpload, setImgUpload] = useState([])
  const [uploadstatus, setuploadstatus] = useState(false)
  const [uploadno, setuploadno] = useState('')
  const [lengths, setlength] = useState('')
  let URLS = ''
  const firebase = useFirebase();


  const postDatas = async () => {
    let currentDate = new Date();
    let monthNames = [
      "January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"
    ];
    let monthIndex = currentDate.getMonth();
    let monthName = monthNames[monthIndex];
    let day = currentDate.getDate();
    let year = currentDate.getFullYear();
    day = day < 10 ? '0' + day : day;
    let formattedDate = `${day} ${monthName} ${year.toString().slice(-2)}`;
    let time = Date.now();

    if (((Post_txtTitle || Post_textarea) === '') || (ImgUpload.length === 0)) {
      alert("Please Fill all ");
      if (window.confirm) {
        window.location.reload()
      }
    } else {
      setlength(ImgUpload.length)

      for (let i = 0; i < ImgUpload.length; i++) {
        setuploadno(i + 1)
        const imgref = ref(storage, `post/${time}/${ImgUpload[i].name}`)
        await uploadBytes(imgref, ImgUpload[i])//For uploading (kuta upload,kai upload)
          .then(async (snapshot) => {//  "snapshot" tyat sagala astay [items,prefixes,extra]
            await getDownloadURL(snapshot.ref)//url download karaylo ref cha, ref kai ahe tar "ImageUrls/"
              .then((url) => {//snapshot madla url
                URLS += url + '>>>'
              })
          });
      }
      firebase.putData(`post/${time}`, {
        description: Post_textarea,
        imglist: URLS,
        postuploadedon: formattedDate,
        title: Post_txtTitle
      })
    }
  }

  const status = () => {
    setuploadstatus(!uploadstatus)
  }
  const posthandler = () => {
    postDatas();
    status()
  }

  return (
    <>
      <div className="postUpload_body">
        <div className="postUpload_container">
          <textarea
            placeholder="Type Title"
            value={Post_txtTitle}
            onChange={TxtTitle}
            className="postUpload_title"
          ></textarea>
          <textarea
            placeholder="Type here"
            value={Post_textarea}
            onChange={TxtChange}
            className="postUpload_textarea"
          >
            {" "}
          </textarea>
          <div className="postUploadBrowse">
            <img
              className="postUpload_img"
              src="./tabler_photo-up.svg"
              alt="/"
            />
            <input type="file" multiple onChange={(event) => { setImgUpload(event.target.files) }} />
            <button className="postUploadbtn" onClick={posthandler}>
              Post
            </button>
          </div>
          {uploadstatus && (
            <div>
              {uploadno <= lengths ? (
                <p>Uploaded...{uploadno}/{lengths}</p>
              ) : (
                <p>Uploaded All</p>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );

}