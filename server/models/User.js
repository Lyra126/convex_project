import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    tree_type: { type: String, required: true },
    current_points: { type: Number, required: false, default: 0  },
    food_waste: { type: Number, required: false, default: 0  },
    compost_made: { type: Number, required: false, default: 0  },
    saved_locations: { type: [String], required: false },
    email_address: { type: String, required: true },
    name: { type: String, required: false },
    user_name: { type: String, required: false },
    password: { type: String, required: true }
}); 

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;
