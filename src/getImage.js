import { getDownloadURL, getStorage, ref } from "firebase/storage";

export async function getImage(name){
    const filePath = `gs://odin-library-b02bc.appspot.com/${name}`
    
    console.log(`filepath: ${filePath}`)

    const imageRef = ref(getStorage(), filePath)

    console.log(imageRef)

    const publicImageURL = await getDownloadURL(imageRef)

    console.log(publicImageURL)

    return publicImageURL
}

export default getImage