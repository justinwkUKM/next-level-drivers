import mongoose from 'mongoose'

/* PetSchema will correspond to a collection in your MongoDB database. */
const DriverSchema = new mongoose.Schema({
  name: {

    type: String,
    required: [true, 'Please provide a name for this driver.'],
    maxlength: [20, 'Name cannot be more than 60 characters'],
  },
  company_name: {

    type: String,
    required: [true, "Please provide the driver's company name"],
    maxlength: [20, "Owner's Name cannot be more than 60 characters"],
  },
  
  age: {
    type: Number,
  },
  
  image_url: {
    /* Url to pet image */

    required: [true, 'Please provide an image url for this driver.'],
    type: String,
  },
  vehicles: {
    /* List of things your pet likes to do */

    type: Array,
  },

})

export default mongoose.models.Driver || mongoose.model('Driver', DriverSchema)