const createTokenOfPhone = (phone) => {
  if (phone.length == 11) {
    createToken(phone);
    return;
  } else {
    console.log("Not proper phone number");
  }
};

const createToken = (phone) => {
  const tok = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  console.log(`sended ${tok} to ${phone}`);
};

createTokenOfPhone("01092652543");
