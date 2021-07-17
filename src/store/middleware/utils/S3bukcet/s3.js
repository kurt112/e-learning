/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 17/07/2021, Saturday
 **/

import AWS from 'aws-sdk'
import {v4 as uuidv4} from 'uuid'

const s3 = new AWS.S3({
    region: 'us-west-2',
    secretAccessKey:'qqmP0UW6jbwgE04dtyF6qFwDZuANFZvJ5rWsNzyi',
    accessKeyId:'AKIAZLLQ4CZH7WXYWU2E'
})

const bucketName = 'g-learn-files'

export const uploadToS3 = async (data) => {

    const extension = data.name.split('.').pop()
    const name = `${uuidv4()}.${extension}`
    const type = data.type

    await s3.putObject({
        Key: name,
        Bucket: bucketName,
        ContentType: type,
        Body: data,
        ACL: 'public-read',
    }).promise();


    return name
}

export const deleteToS3 = async (key) => {
    const params = {  Bucket: bucketName, Key: key };
    s3.deleteObject(params, function(err) {
        if (err) console.log(err, err.stack);  // error
        else     console.log();                 // deleted
    });
}



