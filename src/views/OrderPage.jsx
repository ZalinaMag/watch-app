const React = require("react");

const Layout = require("./Layout");

module.exports = function Order() {
  return (
    <Layout>
      <link rel="stylesheet" href="./css/style.css" />
      <h2>Пожалуйста, заполните форму заказа</h2>
      <hr />
      <form
        className="orderForm"
        method="POST"
        action="/order/submit"
        encType="multipart/form-data"
      >
        <input type="text" name="name" placeholder="имя" required />
        <input
          type="email"
          name="email"
          placeholder="адрес электронной почты"
          required
        />
        <input type="text" name="phone" placeholder="номер телефона" required />
        <input type="text" name="comment" placeholder="комментарии" required />
        <input type="file" name="image" required />
        <button type="submit">Отправить заказ</button>
      </form>

      <hr />
      <h3 className="orderErrMsg"></h3>
      {/* <script defer src="js/order.js" /> */}
    </Layout>
  );
};
