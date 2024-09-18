import express from 'express'
import { Register, VerfiyEmail } from '../controllers/Auth.js'

const AuthRoutes=express.Router()

AuthRoutes.post('/register',Register)
AuthRoutes.post('/verifyEmail',VerfiyEmail)
export default AuthRoutes;