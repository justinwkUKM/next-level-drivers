import dbConnect from '../../../lib/dbConnect'
import Driver from '../../../models/Driver'

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const drivers = await Driver.find({}) /* find all the data in our database */
        res.status(200).json({ success: true, data: drivers })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const driver = await Driver.create(
          req.body
        ) /* create a new model in the database */
        res.status(201).json({ success: true, data: driver })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}