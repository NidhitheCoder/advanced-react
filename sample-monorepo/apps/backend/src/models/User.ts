import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';

export interface UserDoc extends mongoose.Document {
  name: string;
  password: string;
  email: string;
  createJWT: () => string;
  comparePassword: (userPassword: string) => string;
}

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide name'],
    minLength: 3,
    maxLength: 50,
  },
  email: {
    type: String,
    required: [true, 'Please provide email'],
    // eslint-disable-next-line no-useless-escape
    match: [/[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/, 'Please provide valid email'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
    maxLength: 14,
  },
});

UserSchema.pre('save', async function () {
  const salt = await bcryptjs.genSalt(10);
  this.password = await bcryptjs.hash(this.password, salt);
});

UserSchema.methods.createJWT = function () {
  const token = jwt.sign(
    {
      userId: this.id,
      name: this.name,
    },
    process.env.VITE_JWT_SECRET || 'jwtSecret',
    {
      expiresIn: process.env.VITE_EXPIRE_ON,
    }
  );

  return token;
};

UserSchema.methods.comparePassword = async function (userPassword: string) {
  const isMatch = bcryptjs.compare(userPassword, this.password);

  return isMatch;
};

const User = mongoose.model<UserDoc>('User', UserSchema);

export default User;
