import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AuthenticationError, ForbiddenError } from "apollo-server-express";
import dotenv from "dotenv";
import gravatar from "../util/gravatar.js";

const Note = {
  newNote: async (parent, args, { models }) => {
    return await models.Note.create({
      content: args.content,
      author: "Adam Scott",
    });
  },
  deleteNote: async (parent, { id }, { models }) => {
    try {
      await models.Note.findOneAndRemove({ _id: id });
      return true;
    } catch (err) {
      return false;
    }
  },
  updateNote: async (parent, { content, id }, { models }) => {
    return await models.Note.findOneAndUpdate(
      {
        _id: id,
      },
      {
        $set: {
          content,
        },
      },
      {
        new: true,
      }
    );
  },

  signUp: async (parent, { username, email, password }, { models }) => {
    //normalize email address
    email = email.trim().toLowerCase();
    //hash the password
    const hashed = await bcrypt.hash(password, 10);
    //create the gravatar url
    const avatar = gravatar(email);
    try {
      const user = await models.User.create({
        username,
        email,
        avatar,
        password: hashed,
      });
      //create and return the json and json web tokem
      return jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    } catch (err) {
      console.log(err);
      //if theres a problem creating account throw and error
      throw new Error("Error creating account");
    }
  },

  signIn: async (parent, { username, email, password }, { models }) => {
    if (email) {
      //normmalize email address
      email = email.trim().toLowerCase();
    }

    const user = await models.User.findOne({
      $or: [{ email }, { username }],
    });

    //if no user is found, throw an auth error
    if (!user) {
      throw new AuthenticationError("Error signing in");
    }

    //if passwords dont match throw and authentication error
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new AuthenticationError("Error siging in");
    }
    //create and return json web token
    return jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  },
};

export default Note;
