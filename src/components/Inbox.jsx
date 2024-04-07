
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
    let ccurrentDate = new Date();
    let monthNames = [
      "January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"
    ];
    let monthIndex = ccurrentDate.getMonth();
    let monthName = monthNames[monthIndex];
    let dday = ccurrentDate.getDate();
    let dyear = ccurrentDate.getFullYear();
    dday = dday < 10 ? '0' + dday : dday;
    let formattedDate = `${dday} ${monthName} ${dyear.toString().slice(-2)}`;
    let time = Date.now();

    // Get current date and time
var currentDate = new Date();

// Extract individual components
var year = currentDate.getFullYear();
var month = ('0' + (currentDate.getMonth() + 1)).slice(-2); // Adding 1 to month since it is zero-based
var day = ('0' + currentDate.getDate()).slice(-2);
var hour = ('0' + currentDate.getHours()).slice(-2);
var minute = ('0' + currentDate.getMinutes()).slice(-2);
var second = ('0' + currentDate.getSeconds()).slice(-2);

// Concatenate components into desired format
var currentTime = year + month + day + hour + minute + second;

console.log(currentTime); // Output example: '20240408111630' (April 8, 2024, 11:16:30)


    if (((Post_txtTitle || Post_textarea) === '') || (ImgUpload.length === 0)) {
      alert("Please Fill all ");
      if (window.confirm) {
        window.location.reload()
      }
    } else {
      setlength(ImgUpload.length)

      for (let i = 0; i < ImgUpload.length; i++) {
        setuploadno(i + 1)
        const imgref = ref(storage, `post/${currentTime}/${ImgUpload[i].name}`)
        await uploadBytes(imgref, ImgUpload[i])//For uploading (kuta upload,kai upload)
          .then(async (snapshot) => {//  "snapshot" tyat sagala astay [items,prefixes,extra]
            await getDownloadURL(snapshot.ref)//url download karaylo ref cha, ref kai ahe tar "ImageUrls/"
              .then((url) => {//snapshot madla url
                URLS += url + '>>>'
              })
          });
      }
      firebase.putData(`post/${currentTime}`, {
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