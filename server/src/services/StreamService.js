import aws from 'aws-sdk'

const s3 = new aws.S3()

const bucket = {Bucket: 'talkin-tricks.episodes'}

export default class StreamService {
  static fetchStreams = () => {
    return new Promise((resolve, reject) => {
      s3.listObjectsV2(bucket, (error, data) => {
        if (error) reject(error)

        resolve(data)
      })
    })
  }
}