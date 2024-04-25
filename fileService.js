// export * as uuid from 'uuid';
import { v4 as uuidv4 } from 'uuid';
import * as path from 'path';

class FileService {
  saveFile(file) {
    try {
      const fileName = uuidv4() + '.jpg';
      const filePath = path.resolve('static');

      file.mv(path.join(filePath, fileName));


      return fileName;
    } catch (e) {
      console.log(e)
    }
  }

}

export default new FileService();