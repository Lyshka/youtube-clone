import {initializeApp} from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
	apiKey: "AIzaSyCgj-2DKk8nv-yNqNut3B9dK4JU9tthF4I",
	authDomain: "video-9e1fc.firebaseapp.com",
	projectId: "video-9e1fc",
	storageBucket: "video-9e1fc.appspot.com",
	messagingSenderId: "702011580123",
	appId: "1:702011580123:web:3364d95ccc35f1f90af6fe"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const provider = new GoogleAuthProvider()
export default app