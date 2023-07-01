const nodemailer = require("nodemailer")

module.exports = async (email) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: 'edgarrios412@gmail.com',
          pass: 'scefolxtxfuqtgqy'
        }
      });

      await transporter.sendMail({
        from: '"Viaja Ya!" <viajaya@gmail.com>', // sender address
        to: email, // list of receivers
        subject: "Comprobante de pago", // Subject line
        html: "<b>Aqui deberia ir el comprobante y los pasajeros</b>", // html body
      });
}