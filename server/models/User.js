import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email_address: { type: String, required: true },
    name: { type: String, required: false },
    user_name: { type: String, required: false },
    password: { type: String, required: true },
    diet_restrictions: { type: String, required: true },
    fitness_goals: { type: String, required: true },
    calorie_goal: { type: Number, required: true },
    fridge: [
        {
          itemName: { type: String, required: true },
          quantity: { type: Number, required: true }
        }
      ],
    
      groceryCart: [
        {
          itemName: { type: String, required: true },
          unitPrice: { type: Number, required: true },
          totalPrice: { type: Number, required: true },
          quantity: { type: Number, required: true }
        }
      ],
    meals: {
        breakfast: {
            name: { type: String, required: true },
            calories: { type: Number, required: true },
            protein: { type: Number, required: true },
            carbs: { type: Number, required: true },
            fat: { type: Number, required: true },
            imageUrl: { type: String, required: true }
        },
        lunch: {
            name: { type: String, required: true },
            calories: { type: Number, required: true },
            protein: { type: Number, required: true },
            carbs: { type: Number, required: true },
            fat: { type: Number, required: true },
            imageUrl: { type: String, required: true }
        },
        dinner: {
            name: { type: String, required: true },
            calories: { type: Number, required: true },
            protein: { type: Number, required: true },
            carbs: { type: Number, required: true },
            fat: { type: Number, required: true },
            imageUrl: { type: String, required: true }
        }
    }
}); 

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;
