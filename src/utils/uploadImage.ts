import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from "../firebase/init";

const uploadImage = (file: File | null): Promise<string> => {
    return new Promise((resolve, reject) => {
        if (!file) {
            reject("No file provided");
            return;
        }

        const storage = getStorage(app);
        const name = new Date().getTime() + file.name;
        const storageRef = ref(storage, 'images/' + name);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed',
            (snapshot) => {
                // Manejar progreso de carga si lo necesitas
            },
            (error) => {
                reject(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref)
                    .then((downloadURL) => {
                        resolve(downloadURL);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            }
        );
    });
};

export default uploadImage;
