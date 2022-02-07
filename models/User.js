import mongoose from 'mongoose'

/* PetSchema will correspond to a collection in your MongoDB database. */

// name
// :
// "Waqas Khalid Obeidy"
// email
// :
// "waqasobeidy@gmail.com"
// image
// :
// "https://avatars.githubusercontent.com/u/20006026?v=4"
// emailVerified
// :
// null
const UserSchema = new mongoose.Schema({
  name: {

    type: String,
    required: [true, 'Please provide a name for this driver.'],
    maxlength: [40, 'Name cannot be more than 60 characters'],
  },
  email: {

    type: String,
    required: [true, "Please provide the driver's email"],
  },
  
  
  image: {

    required: [true, 'Please provide an image url for this driver.'],
    type: String,
  },
  email_verified: {

    type: Boolean,
  },

})

export default mongoose.models.User || mongoose.model('User', UserSchema)