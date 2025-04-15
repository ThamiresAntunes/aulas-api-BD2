import User from "./model/user.js";

async function salvarUser() {
    const user = await User.create({
        firstName: "Jose",
        lastName: "Silva"
    });
    console.log(user.toJSON());
    console.log('User saved successfully!');
}

salvarUser();