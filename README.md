# Node.js-Passport

https://viblo.asia/p/su-dung-passportjs-xay-dung-kich-ban-dang-ky-va-dang-nhap-4dbZNEJyKYM

https://viblo.asia/p/su-dung-passportjs-xay-dung-kich-ban-dang-ky-va-dang-nhapp2-6J3Zg93g5mB

https://techmaster.vn/posts/33637/tim-hieu-ve-passportjs-cac-buoc-de-xac-thuc-tai-khoan

https://viblo.asia/p/su-dung-passport-local-xay-dung-chuc-nang-login-theo-mo-hinh-mvc-nodejs-express-L4x5x84g5BM

https://viblo.asia/p/passport-trong-nodejs-authentication-1VgZvwdrlAw

https://hocweb.vn/cach-su-dung-passport-jwt-trong-nodejs/

#

Authenticate Login with Passport: https://codetheworld.io/xac-thuc-dang-nhap-bang-passport-bat-dau-voi-local-authentication.html

Dùng làm gì:

    Đăng nhập bằng tài khoản local và đăng ký (passport-local)
    Đăng nhập bằng tài khoản Facebook và tạo tài khoản mới (passport-facebook) 
    Đăng nhập bằng tài khoản Twitter và tạo tài khoản mới (passport-twitter)
    Đăng nhập bằng tài khoản Google+ và tạo tài khoản mới (sử dụng oauth với passport-google-oauth)
    Thiết lập các trang chỉ có thể xem được sau khi đã xác thực.
    Mã hóa mật khẩu khi lưu vào database cho local account (bcrypt-nodejs)
    Hiển thị thông báo lỗi ra phía người dùng (connect-flash, yêu cầu sử dụng express version > 3.0)
    Liên kết tất cả các tài khoản mạng xã hội dưới một tài khoản.
    Cho phép một người dùng có thể hủy liên kết một tài khoản mạng xã hội.

#
---------passport-local----------https://www.passportjs.org/packages/passport-local/

    passport.use(new LocalStrategy(
      function(username, password, done) {
        // tìm người dùng trong hệ thống bằng tên đăng nhập (username)
        User.findOne({ username: username }, function (err, user) {
          if (err) { return done(err); } // nếu lỗi thì báo lỗi
          if (!user) { return done(null, false); } // nếu không tìm thấy người dùng thì báo lỗi không xác thực được
          if (!user.verifyPassword(password)) { return done(null, false); } // nếu mật khẩu không chính xác thì báo lỗi không xác thực được
          return done(null, user); // nếu xác thực được thì trả về người dùng
        });
      }
    ));
    
    - passport.use() dùng để thiết lập một phương thức xác thực mới.
    - LocalStrategy được sử dụng để xác thực người dùng bằng cách so sánh tên đăng nhập và mật khẩu với cơ sở dữ liệu của người dùng. Đây là một trong các chiến lược xác thực được hỗ trợ bởi Passport.
    - function(username, password, done) là hàm xử lý xác thực. Nó nhận vào hai tham số là tên đăng nhập (username) và mật khẩu (password), và một hàm callback (done) để trả về kết quả xác thực.
    - Trong hàm xử lý xác thực, User.findOne() được sử dụng để tìm người dùng trong cơ sở dữ liệu bằng tên đăng nhập. Nếu không tìm thấy người dùng thì trả về lỗi không xác thực được (done(null, false)).
    - Nếu tìm thấy người dùng, user.verifyPassword() được sử dụng để kiểm tra tính hợp lệ của mật khẩu. Nếu mật khẩu không chính xác thì trả về lỗi không xác thực được (done(null, false)).
    - Nếu tất cả đều hợp lệ, done(null, user) được sử dụng để trả về kết quả xác thực với thông tin người dùng.    
    









- Phải cài thêm express-session trong passport, vì: express-session là một middleware trong ExpressJS cho phép lưu trữ thông tin phiên làm việc của người dùng trên server. Nó cho phép tạo ra các phiên làm việc và lưu trữ các giá trị liên quan đến phiên đó, chẳng hạn như thông tin đăng nhập, thông tin giỏ hàng, và các thông tin khác cần thiết.


