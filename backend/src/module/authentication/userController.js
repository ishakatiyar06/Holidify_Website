// import { Request, Response } from "express";
// import userModel, { User } from "./userModel";
// import httpStatus from "http-status";
import bcrypt from "bcrypt";
import userModal from "./userModal.js";
import jwt from "jsonwebtoken";
//=================================Register=================================//

export async function signUp(req, res) {
  try {
    let { fullName, email, password } = req.body;
    console.log(fullName, email, password);

    // Check if the email already exists in the database
    const existingUser = await userModal.findOne({ email });
    if (existingUser) {
      return res.status(403).json({
        status: false,
        message: "Email already exists",
      });
    }

    let encryptedPassword = await bcrypt.hash(password, 8);
    password = encryptedPassword;

    let data = await userModal.create({ email, password, fullName });
    return res.status(200).send({
      status: true,
      message: "User logged in successfully",
      data: { data },
    });

    // return res.status(httpStatus.CREATED)
    //   .send({ status: true, message: "Successfully Registered", data: data })
  } catch (error) {
    console.log(error);
    res.send({ message: error.message });
  }
}

//===============================login =====================================//

export async function login(req, res) {
  try {
    let { email, password } = req.body;
    console.log(email, password);

    let user = await userModal.findOne({ email });

    if (!user) {
      return res.status(404).send({ status: false, message: "User not found" });
    } else {
      let comparePassword = bcrypt.compareSync(password, user.password);

      if (!comparePassword) {
        return res
          .status(401)
          .send({ status: false, message: "Incorrect Password" });
      }
    }
    const JWT_SECRET = "adCreativeqwe123456ygfdnmkuy";

    const JWT_EXPIRATION = 12000000;

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRATION,
    });
    //save token database
    // user.token = token
    await userModal.findByIdAndUpdate(user._id, { token: token });

    // await user.save();
    user = await userModal.findById({ _id: user._id });

    return res.status(200).send({
      status: true,
      message: "User logged in successfully",
      data: { user: user },
    });
  } catch (error) {
    console.log("login error", error);
  }
}
