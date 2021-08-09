import express from 'express';
import {promises as fsPromises} from 'fs';

const app = express();
const port = 3000;
const sharp = require('sharp');
const path = require('path');

const resizeImage = async(image: Buffer, filename: string, width: number, height: number): Promise<void> => {
  try {
    const resizedImage = await sharp(image)
      .resize(width, height)
      .toFile(`assets/thumb/${filename}`);
    return resizedImage;
  } catch (error) {
    console.log(error);
  }
}
app.get('/api/images', (req, res) => {
    var url = new URL(req.protocol + '://' + req.get('host') + req.originalUrl);
    const urlParams = url.searchParams;
    const filename = urlParams.get('fileName') || "";
    const width = parseInt(urlParams.get('width') || "");
    const height = parseInt(urlParams.get('height') || "");
    (async () => {
      try {
        const myFile = await fsPromises.readFile(`assets/full/${filename}`);
        await resizeImage(myFile, filename, width, height);
        res.sendFile(path.join(__dirname, '../', `assets/thumb/${filename}`));
        console.log('Your image processed!');
      } catch (error) {
        res.send('Image processing is failed or image file does not exist');
        console.log(error);
    }
  })();
});

app.listen(port, () => {
  console.log('Server has started.')
});

export default {
  app,
  resizeImage
};