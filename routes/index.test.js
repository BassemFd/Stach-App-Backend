var app = require("../app")
var request = require("supertest")

test("Sign In - Password inexistant", async (done) => {
  await request(app).post('/signIn')
    .send({ email: 'qsgkjhgdjqdg@gmail.com' })
    .expect(200)
    .expect({ result: false, error: '"password" is required' });
  done();
 });

