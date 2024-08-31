import UserModel from "../models/User.js";

const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.json(users);
    } catch (error) {
        // Handle any errors
        res.status(500).json({ error: 'Failed to fetch users' });
    }
};

const getUserByEmailAndPassword = async (req, res) => {
    try {
        const { email, password } = req.query;
        const user = await UserModel.findOne({ email, password });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        // Handle any errors
        res.status(500).json({ error: 'Failed to fetch user' });
    }
};

const createUser = async (req, res) => {
    try {
        const { tree_type, email_address, name, password } = req.body;
        
        // Create a new user instance
        const user = new UserModel({ 
            tree_type,
            email_address,
            name,
            password
        });

        // Save the user to the database
        await user.save();

        // Send the newly created user object as a response
        res.json(user);
    } catch (error) {
        // Handle any errors
        console.error(error);
        res.status(500).json({ error: 'Failed to create user' });
    }
};

const getUserById = async (req, res) => {};

const getUserByEmail = async (req, res) => {
    try {
        const { email } = req.query;
        const user = await UserModel.findOne({ email_address: email });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        // Handle any errors
        res.status(500).json({ error: 'Failed to fetch user' });
    }
};

// Update the existing function to use query parameters
const addSavedLocation = async (req, res) => {
    try {
        const { email, address } = req.query; // Using query parameters now
        const user = await UserModel.findOne({ email_address: email });

        // Log incoming request for debugging
        console.log("Received query:", { email, address });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        

        // Update the saved_locations array with the new address
        user.saved_locations.push(address);
        await user.save();

        res.json({ message: 'Saved location added successfully', saved_locations: user.saved_locations });
    } catch (error) {
        console.error("Error adding saved location:", error);
        res.status(500).json({ error: 'Failed to add saved location' });
    }
};

const addWaste = async (req, res) => {
    try {
        const { email, wasteAmount } = req.query; // Using query parameters now
        const user = await UserModel.findOne({ email_address: email });

        // Log incoming request for debugging
        console.log("Received query:", { email, wasteAmount });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        
        user.compost_made += parseInt(wasteAmount);
        user.current_points = parseInt(user.compost_made);
        await user.save();

        res.json({ message: 'Waste amount added successfully', waste: user.compost_made });
    } catch (error) {
        console.error("Error adding waste amount:", error);
        res.status(500).json({ error: 'Failed to add waste amount' });
    }
};

const updatePoints = async (req, res) => {
    try {
        const { email, points } = req.query; // Using query parameters now
        const user = await UserModel.findOne({ email_address: email });

        // Log incoming request for debugging
        console.log("Received query:", { email, points });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        
        user.current_points = parseInt(points);
        await user.save();

        res.json({ message: 'Points updated successfully', points: user.current_points });
    } catch (error) {
        console.error("Error updating points:", error);
        res.status(500).json({ error: 'Failed to update points' });
    }
};



export{
    getAllUsers,
    createUser,
    getUserById,
    getUserByEmailAndPassword,
    getUserByEmail,
    addSavedLocation,
    addWaste,
    updatePoints
}