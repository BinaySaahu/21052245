const { default: axios } = require("axios");

module.exports = async (req,res,next) => {
  try {
    const response = await axios.post("http://20.244.56.144/test/auth", {
      companyName: "goMART",
      clientID: process.env.clientID,
      clientSecret: process.env.clientSecret,
      ownerName: "Binay kumar Sahu",
      ownerEmail: "21052245@kiit.ac.in",
      rollNo: "21052245",
    });
    console.log(response)
    res.locals.accessData = {
        token_type: response.token_type,
        access_token: response.access_token,
        expires_in: response.expires_in
    };
    next();
  } catch (e) {
    return res.status(500).json({message: e.message});
  }
};
