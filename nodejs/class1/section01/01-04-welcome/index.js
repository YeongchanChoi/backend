export const getWelcomeTemplate = (name, age) => {
  const template = `
        <html>
            <body>
                <h1>congrats</h1>
                <hr />
                <div>name : ${name}</div>
                <div>age : ${age}</div>
            </body>
        </html>
    `;
  aa();
  console.log(template);
};

const aa = () => {
  console.log("aa");
};
