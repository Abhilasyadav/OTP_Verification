import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "abhichunnooya@gmail.com",
    pass: "zfno srpn pbfw zovi",

}  });


  