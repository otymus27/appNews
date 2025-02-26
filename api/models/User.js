import mongoose from 'mongoose';


const UserSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  login: {
    type: String,
    required: true,
    unique: true,
  },
  senha: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  foto: {
    type: String,
    required: true,
  },
  background: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('User', UserSchema);

export default User;